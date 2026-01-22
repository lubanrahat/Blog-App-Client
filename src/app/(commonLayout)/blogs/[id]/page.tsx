import { blogService } from "@/services/blog.service";
import SinglePost from "@/components/modules/homepage/SinglePost";

export async function generateStaticParams() {
  const { data } = await blogService.getBlogPost();
  return data.data.data.map((post: any) => ({ id: post.id })).slice(0, 3);
}

export default async function SingleBlogsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data } = await blogService.getBlogById(id);
  console.log(data);
  return (
    <div>
      <SinglePost post={data.data} />
    </div>
  );
}
