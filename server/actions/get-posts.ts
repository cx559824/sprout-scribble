"use server";

import { db } from "@/server";

export default async function getPosts() {
  const posts = await db.query.posts.findMany();
  console.log("These are the posts: ", posts);

  if (!posts) {
    return { error: "No posts found" };
  }

  return { success: posts };
}
