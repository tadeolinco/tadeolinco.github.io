import { Dialog, DialogPanel } from "@headlessui/react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Fragment, useEffect, useMemo, useState } from "react";
import cdn from "../../cdn.json";
import { ProjectCard } from "./-components/ProjectCard";
import { PROJECTS, ProjectType } from "./-constants/projects.constants";

export const Route = createFileRoute("/projects/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [columnCount, setColumnCount] = useState(
    innerWidth >= 992 ? 3 : innerWidth >= 768 ? 2 : 1
  );
  useEffect(() => {
    const handleResize = () => {
      setColumnCount(
        window.innerWidth >= 992 ? 3 : window.innerWidth >= 768 ? 2 : 1
      );
      setInnerWidth(window.innerWidth);
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
          <ProjectCard
            key={project.title}
            project={project}
            selectProject={setSelectedProject}
          />
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
      <Dialog
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        transition
        className="fixed inset-0 flex w-screen items-center justify-center bg-black p-4 transition duration-300 ease-out data-[closed]:opacity-0"
      >
        {/* <DialogBackdrop className="fixed inset-0 bg-black/75" /> */}
        <div className="fixed inset-0 flex w-screen items-center justify-center">
          <DialogPanel className="rounded-2xl max-h-full bg-black flex flex-col lg:flex-row text-white p-8 gap-10 overflow-auto">
            <div className="flex-1 flex flex-col gap-6 items-start min-w-0 lg:sticky lg:top-0">
              <div className="flex items-center gap-4">
                <a
                  role="button"
                  onClick={() => {
                    setSelectedProject(null);
                  }}
                >
                  {"<-"}
                </a>
                <p className="font-bold text-2xl">{selectedProject?.title}</p>
              </div>

              {selectedProject?.video && (
                <video
                  // @ts-expect-error cannot type
                  src={cdn[selectedProject.video]}
                  playsInline
                  autoPlay
                  loop
                  muted
                  disableRemotePlayback
                  className="rounded-xl w-full max-w-none"
                />
              )}
              {selectedProject?.image && (
                <img
                  // @ts-expect-error cannot type
                  src={cdn[selectedProject.image]}
                  className="rounded-xl w-full max-w-none"
                />
              )}
            </div>
            <div className="min-w-0 flex-1">{selectedProject?.content}</div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}
