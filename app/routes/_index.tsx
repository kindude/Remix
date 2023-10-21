import type { MetaFunction } from "@remix-run/node";
import "../components/styles/styles.css";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="container">
      <h1 className="YUI">Welcome <span className="GREEN" > to </span> <span className="red" >Remix</span></h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
            className="QWE"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
            className="QWE"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer" className="QWE">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
