// app/api/webhooks/clerk/route.ts
import { Webhook } from "svix"
import { headers } from "next/headers"
import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET

  if (!WEBHOOK_SECRET) {
    return NextResponse.json(
      { error: "Please add CLERK_WEBHOOK_SECRET to .env" },
      { status: 500 }
    )
  }

  // Get Svix verification headers
  const headerPayload = await headers()
  const svix_id = headerPayload.get("svix-id")
  const svix_timestamp = headerPayload.get("svix-timestamp")
  const svix_signature = headerPayload.get("svix-signature")

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return NextResponse.json(
      { error: "Missing svix headers" },
      { status: 400 }
    )
  }

  // Get raw body payload for verification
  const payload = await req.json()
  const body = JSON.stringify(payload)

  const wh = new Webhook(WEBHOOK_SECRET)
  let evt: any

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    })
  } catch (err) {
    console.error("Error verifying webhook:", err)
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
  }

  const eventType = evt.type

  // Handle user creation and user update
  if (eventType === "user.created" || eventType === "user.updated") {
    const { id, email_addresses, first_name, last_name, image_url } = evt.data

    const primaryEmail = email_addresses?.[0]?.email_address
    const fullName = [first_name, last_name].filter(Boolean).join(" ") || "Anonymous User"

    if (!primaryEmail) {
      return NextResponse.json({ error: "No email provided" }, { status: 400 })
    }

    // Upsert into NeonDB via Prisma
    await prisma.user.upsert({
      where: { id: id },
      update: {
        email: primaryEmail,
        name: fullName,
        avatarUrl: image_url || null,
      },
      create: {
        id: id,
        email: primaryEmail,
        name: fullName,
        avatarUrl: image_url || null,
      },
    })

    return NextResponse.json({ message: "User synced successfully" }, { status: 200 })
  }

  // Handle user deletion
  if (eventType === "user.deleted") {
    const { id } = evt.data

    if (id) {
      await prisma.user.deleteMany({
        where: { id: id },
      })
    }

    return NextResponse.json({ message: "User deleted" }, { status: 200 })
  }

  return NextResponse.json({ message: "Webhook received" }, { status: 200 })
}