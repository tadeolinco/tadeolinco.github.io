import {
  createMemoryHistory,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ReactTagManager } from "react-gtm-ts";
import "unfonts.css";
import "./main.css";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

const memoryHistory = createMemoryHistory({
  initialEntries: ["/"],
});

// Create a new router instance
const router = createRouter({ routeTree, history: memoryHistory });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

ReactTagManager.init({
  code: "GTM-5D7BZ38N", // GTM Code
  debug: false, // debug mode (default false)
  performance: false, // starts GTM only after user interaction (improve initial page load)
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
