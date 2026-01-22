"use client";

import { blogService } from "@/services/blog.service";
import React from "react";

export const dynamic = "force-dynamic";

export default async function AboutPage() {
  
  const [data,setData] = React.useState(null);
  React.useEffect(() => {
    (async () => {
      const {data} = await blogService.getBlogPost();
      setData(data);
    })();
  }, []);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">About Page</h1>
      <p className="mt-2 text-muted-foreground">Page content goes here About</p>
    </main>
  );
}
