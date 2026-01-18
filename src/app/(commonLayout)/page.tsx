import { authClient } from "@/lib/auth-client"

export default async function HomePage() {
  const session = await authClient.getSession()
  console.log(session)
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Home Pages</h1>
      <p className="mt-2 text-muted-foreground">
        Page content goes here home pages
      </p> 
    </main>
  )
}