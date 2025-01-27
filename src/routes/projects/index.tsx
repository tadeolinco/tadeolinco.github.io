import { createFileRoute, Link } from "@tanstack/react-router";
import { Fragment, useEffect, useMemo, useState } from "react";
import { PROJECTS, ProjectType } from "./-constants/projects.constants";

export const Route = createFileRoute("/projects/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [columnCount, setColumnCount] = useState(
    window.innerWidth >= 992 ? 3 : window.innerWidth >= 768 ? 2 : 1
  );

  useEffect(() => {
    const handleResize = () => {
      setColumnCount(
        window.innerWidth >= 992 ? 3 : window.innerWidth >= 768 ? 2 : 1
      );
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const columnData = useMemo(() => {
    const data: ProjectType[][] = [];
    const columnHeights: number[] = [];

    for (let i = 0; i < columnCount; i++) {
      data.push([]);
      columnHeights.push(0);
    }

    for (const project of PROJECTS) {
      let shortestColumnIndex = 0;
      let shortestColumnHeight = Infinity;
      for (let i = 0; i < columnCount; i++) {
        if (columnHeights[i] < shortestColumnHeight) {
          shortestColumnHeight = columnHeights[i];
          shortestColumnIndex = i;
        }
      }
      columnHeights[shortestColumnIndex] += project.height;
      data[shortestColumnIndex].push(project);
    }

    return data;
  }, [columnCount]);

  const renderColumn = (projects: ProjectType[]) => {
    return (
      <div className="flex flex-1 flex-col gap-4">
        {projects.map((project) => (
          <div
            className="border border-neutral-700 flex flex-col bg-neutral-900 rounded-xl p-4 transition-all cursor-pointer duration-300 hover:scale-[101.25%]"
            style={{
              height: `${project.height / 35}%`,
            }}
          >
            <p className="text-lg font-bold mb-4">{project.title}</p>
            {project.video && (
              <video
                src={project.video}
                playsInline
                autoPlay
                loop
                muted
                disableRemotePlayback
                className={`w-full min-h-0 mx-auto flex-1 rounded-xl ${
                  project.noCover ? "" : "object-cover"
                }`}
              />
            )}
            {project.image && (
              <img
                src={project.image}
                className={`w-full min-h-0 mx-auto flex-1 rounded-xl ${
                  project.noCover ? "" : "object-cover"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-dvh p-4 bg-black">
      <div className="mx-auto text-white">
        <Link to="/">
          <a className="text-white text-lg" role="button">
            {"<-"} go back
          </a>
        </Link>
        <div className="flex mt-4 gap-4">
          {columnData.map((projects, index) => (
            <Fragment key={index}>{renderColumn(projects)}</Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
