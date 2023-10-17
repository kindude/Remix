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
    const response = await fetch("https://script.googleusercontent.com/macros/echo?user_content_key=JD8JqixlpmdoQ_5s0sdK5IkV3xgp88EQWIPJZk5Lhby1PNy7A-7vPfITBXZI71yDbU7B1xLUBZF9Aj9S08a6EOc0NT18IGn7m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKPMkCx5dR-BN5e9-gS2xw3O5fzxqiQiTv7jqgHztyuKulPSC57a2Lg09YC-byVSPVK0Uqcwo0Hw7DxsGOPbfY2l4RISzCleetz9Jw9Md8uu&lib=MLqq-WMtfb_ts-X6oo0ayY2RKaxkauJaF");
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    const data: Post[] = await response.json();

  
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