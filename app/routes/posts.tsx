import { json, LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { promises as fs } from "fs";
import path from "path";
import { format } from "date-fns"
import CardsList from "~/components/lists/CardsList";

export let loader: LoaderFunction = async ({ request }) => {
  const jsonFilePath = path.join(process.cwd(), "app/json_data/posts_data.json");
  const fileContents = await fs.readFile(jsonFilePath, "utf8");
  const data = JSON.parse(fileContents);

  return json({
    data,
  });
};

export default function Posts() {
  let { data } = useLoaderData<{ data: Post[] }>();

  return (
    <CardsList data={data} itemsPerPage={5}/>
  );
}

