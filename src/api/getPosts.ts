export const getPosts = async () => {
  const response = await fetch("https://shomrkm.cdn.newt.so/v1/makiyuu-okatazuke/post", {
      headers: {
        Authorization: `Bearer ${import.meta.env.NEWT_TOKEN}`,
      },
    });
  const posts = await response.json()
  return posts;
}