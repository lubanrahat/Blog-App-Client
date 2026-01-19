import BlogCard from "@/components/modules/homepage/BlogCard";
import { Badge } from "@/components/ui/badge";
import { blogService } from "@/services/blog.service";
import { BlogPost } from "@/types";


export default async function HomePage() {

  
  const {data} = await blogService.getBlogPost({
    search: ""
  });
  const posts: BlogPost[] = Array.isArray(data.data.data) ? data.data.data : [];

  return (
   <div>
    <div className=" max-w-7xl mx-auto flex justify-end mt-10"><Badge className="text-sm" variant="outline">Total Post : {posts.length}</Badge></div>
     <div className="grid grid-cols-3 px-4 gap-10 max-w-7xl mx-auto mt-10">
      {posts.map((post: BlogPost) => {
        return (
          <BlogCard key={post.id} post={post} />
        )
      })}
    </div>
   </div>
  );
}
