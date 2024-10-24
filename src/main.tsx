import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./App.tsx";
import { RouterProvider } from "react-router-dom";
import bgTexture from "./assets/bgtexture.svg";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div
      className="fixed h-full w-full overflow-y-auto bg-cover bg-bottom bg-no-repeat brightness-110 contrast-125 saturate-[1.5]"
      style={{ backgroundImage: `url(${bgTexture})` }}
    >
      <RouterProvider basename="hackernews-web" router={Router} />
    </div>
  </React.StrictMode>,
);
