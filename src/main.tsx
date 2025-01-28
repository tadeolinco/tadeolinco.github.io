import { createRouter, RouterProvider } from "@tanstack/react-router";
import mixpanel from "mixpanel-browser";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "unfonts.css";
import "./main.css";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

// const memoryHistory = createHashHistory({});

// Create a new router instance
const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Near entry of your product, init Mixpanel
mixpanel.init("a02956969c6328dac2035bc0fdb1065f", {
  debug: true,
  track_pageview: true,
  persistence: "localStorage",
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
