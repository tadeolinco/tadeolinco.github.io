import { Button, Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Fragment, useEffect, useMemo, useState } from "react";
import { PROJECTS, ProjectType } from "./-constants/projects.constants";

export const Route = createFileRoute("/projects/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );

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
          <div className="border border-neutral-700 flex flex-col bg-neutral-900 rounded-xl p-4 h-fit">
            <div className="flex justify-between mb-4 items-center">
              <p className="text-lg font-bold">{project.title}</p>
              {project.content && (
                <div>
                  <Button
                    className="rounded bg-zinc-600 py-2 px-4 text-sm text-white data-[hover]:bg-zinc-500 data-[active]:bg-zinc-700"
                    onClick={() => setSelectedProject(project)}
                  >
                    Read more
                  </Button>
                </div>
              )}
            </div>
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
      <Dialog
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        transition
        className="fixed inset-0 flex w-screen items-center justify-center bg-black/30 p-4 transition duration-300 ease-out data-[closed]:opacity-0"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/75" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-20">
          <DialogPanel className="rounded-2xl max-h-full bg-black flex flex-col lg:flex-row text-white p-8 gap-10">
            <div className="flex-1 flex items-center min-w-0">
              {selectedProject?.video && (
                <video
                  src={selectedProject.video}
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
                  src={selectedProject.image}
                  className="rounded-xl w-full max-w-none"
                />
              )}
            </div>

            <div className="min-w-0 min-h-0 flex flex-1 flex-col">
              <p className="font-bold text-2xl">{selectedProject?.title}</p>
              <div className="mt-4 min-h-full overflow-auto">
                {selectedProject?.content}
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}
