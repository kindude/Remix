// app/routes/post.tsx

import React from "react";
import { json, LoaderFunction, redirect } from "@remix-run/node";
import { useParams, useLoaderData} from "@remix-run/react";
import { promises as fs } from "fs";
import path from "path";
import { format } from "date-fns";

export let loader: LoaderFunction = async ({ params }) => {
    const postId = params.id; 
    if (postId === undefined) {
      return json({ error: "Post ID is missing" }, { status: 400 });
    }
    const jsonFilePath = path.join(process.cwd(), "app/json_data/posts_data.json");
    const fileContents = await fs.readFile(jsonFilePath, "utf8");
    const data: Post[] = JSON.parse(fileContents);
  
    const post = data.find((p) => p.id === parseInt(postId));
  
    if (!post) {
      return redirect("/posts");
    }
  
    return json({
      post,
    });
  };
  
  export default function Post() {
    let post: Post = useLoaderData<{ post: Post }>().post;
    return (
      <div>
        <h1>{post.title}</h1>
        <p>Author: {post.author}</p>
        <p>Date: {format(new Date(post.publication_date), "MMMM d, yyyy")}</p>
        <p>{post.text}</p>
      </div>
    );
  }