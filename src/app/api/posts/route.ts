// app/api/posts/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const tag = searchParams.get("tag");
    const isFeatured = searchParams.get("isFeatured") === "true";
    const isEditorsChoice = searchParams.get("isEditorsChoice") === "true";
    const isWatchSection = searchParams.get("isWatchSection") === "true";

    const where: Record<string, unknown> = {};
    if (category && category !== "ALL") where.category = category;
    if (tag) where.tags = { has: tag };
    if (isFeatured) where.isFeatured = true;
    if (isEditorsChoice) where.isEditorsChoice = true;
    if (isWatchSection) where.isWatchSection = true;

    const posts = await prisma.post.findMany({
      where,
      include: {
        author: {
          select: { name: true, avatarUrl: true, countryTag: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, excerpt, content, banners, category, tags, authorId } = body;

    const slug = `${title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "")}-${Date.now()}`;

    const wordCount = content ? content.split(/\s+/).length : 0;
    const readTime = Math.ceil(wordCount / 200) || 1;

    const newPost = await prisma.post.create({
      data: {
        title,
        slug,
        excerpt,
        content,
        banners: banners || [],
        category,
        tags: tags || [],
        readTime,
        authorId,
      },
    });

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
  }
}