import { json, LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { promises as fs } from "fs";
import path from "path";
import { format } from "date-fns"
import CardsList from "~/components/lists/CardsList";

export let loader: LoaderFunction = async ({ request }) => {
  try {
    const response = await fetch("https://script.googleusercontent.com/macros/echo?user_content_key=JD8JqixlpmdoQ_5s0sdK5IkV3xgp88EQWIPJZk5Lhby1PNy7A-7vPfITBXZI71yDbU7B1xLUBZF9Aj9S08a6EOc0NT18IGn7m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKPMkCx5dR-BN5e9-gS2xw3O5fzxqiQiTv7jqgHztyuKulPSC57a2Lg09YC-byVSPVK0Uqcwo0Hw7DxsGOPbfY2l4RISzCleetz9Jw9Md8uu&lib=MLqq-WMtfb_ts-X6oo0ayY2RKaxkauJaF");
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    const data = await response.json();
    return json({ data });
  } catch (error) {
    console.error("Error fetching data:", error);
    return json({ error: "Error fetching data" }, { status: 500 });
  }
};

export default function Posts() {
  let { data } = useLoaderData<{ data: Post[] }>();

  return (
    <CardsList data={data} itemsPerPage={5}/>
  );
}

