import type { Posts } from "../types/post";

export const getPosts = async (): Promise<Posts> => {
  const response = await fetch("https://shomrkm.cdn.newt.so/v1/makiyuu-okatazuke/post", {
      headers: {
        Authorization: `Bearer ${import.meta.env.NEWT_TOKEN}`,
      },
    });
  const posts: Posts = await response.json()
  return posts;
}
