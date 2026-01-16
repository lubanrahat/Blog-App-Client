export const dynamic = "force-dynamic";

export default async function AboutPage() {
  
  await new Promise((resolve) => setTimeout(resolve, 1000 * 10));

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">About Page</h1>
      <p className="mt-2 text-muted-foreground">Page content goes here About</p>
    </main>
  );
}
