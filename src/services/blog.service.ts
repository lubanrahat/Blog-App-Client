import { env } from "@/env";

const API_URL = env.API_URL;
console.log(API_URL)

interface GetBlogsParms {
  limit?: number;
  page?: number;
  search?: string;
  tags?: string;
  isFeatured?: boolean;
  status?: string;
  authorId?: string;
  sortBy?: string;
  sortOrder?: string;
}

export const blogService = {
  getBlogPost: async (params?: GetBlogsParms) => {
    try {
      const url = new URL(`${API_URL}/api/v1/post`);

      if(params) {
        Object.entries(params).forEach(([key,value]) => {
          if(value !== undefined && value !== null && value !== "") {
            url.searchParams.append(key,value);
          }
        })
      }

      console.log(url.toString())

      const res = await fetch(url.toString());
      console.log(`${API_URL}/api/v1/post`)

      const data = await res.json();
      console.log(data);

      return { data, error: null };
    } catch (error) {
      console.error("getBlogPost error:", error);
      return { data: null, error };
    }
  },
  getBlogById: async (id: string) => {
    try {
      const res = await fetch(`${API_URL}/api/v1/post/${id}`);
      const data = await res.json();
      return { data, error: null };
    } catch (error) {
      console.error("getBlogById error:", error);
      return { data: null, error };
    }
  },
};
