import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

const Page = async () => {
  const user = await currentUser()

  const role = user?.publicMetadata?.role as
    | "user"
    | "editor"
    | undefined

  if (role === "editor") {
    redirect("/dashboard/editor")
  }

  redirect("/dashboard/user")
}

export default Page