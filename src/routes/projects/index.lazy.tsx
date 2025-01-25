import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/projects/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center bg-black">
      <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Projects</h1>
        <img src="/meow_code.gif" />
        <p className="text-white text-lg">WIP</p>

        <Link to="/">
          <a className="text-white text-lg" role="button">
            {"<-"} go back
          </a>
        </Link>
      </div>
    </div>
  );
}
