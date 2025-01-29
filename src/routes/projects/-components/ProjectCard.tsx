import { Button } from "@headlessui/react";
import { useEffect, useState } from "react";
import { ProjectType } from "../-constants/projects.constants";
import cdn from "../../../cdn.json";

type ProjectCardProps = {
  project: ProjectType;
  selectProject: (project: ProjectType) => void;
};

export function ProjectCard({ project, selectProject }: ProjectCardProps) {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const [width, setWidth] = useState<number | null>(null);

  const aspectRatio = project.width / project.height;

  useEffect(() => {
    setWidth(container?.clientWidth || null);

    const handleResize = () => {
      setWidth(container?.clientWidth || null);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [container]);

  return (
    <div className="border border-neutral-700 flex flex-col bg-neutral-900 rounded-xl p-3 h-fit">
      <div className="flex justify-between mb-3 items-center">
        <p className="font-bold">{project.title}</p>
        {project.content && (
          <div>
            <Button
              className="rounded bg-zinc-600 py-1 px-2 text-xs text-white data-[hover]:bg-zinc-500 data-[active]:bg-zinc-700"
              onClick={() => selectProject(project)}
            >
              Read more
            </Button>
          </div>
        )}
      </div>
      <div ref={setContainer}>
        {project.video && (
          <video
            // @ts-expect-error cannot type
            src={cdn[project.video]}
            playsInline
            autoPlay
            loop
            muted
            disableRemotePlayback
            className={`w-full min-h-0 mx-auto flex-1 rounded-xl`}
            style={{
              width: width ? width / (project.widthDivider ?? 1) : undefined,
              aspectRatio,
            }}
          />
        )}
        {project.image && (
          <img
            // @ts-expect-error cannot type
            src={cdn[project.image]}
            className={`w-full min-h-0 mx-auto flex-1 rounded-xl`}
            style={{
              width: width ? width / (project.widthDivider ?? 1) : undefined,
              aspectRatio,
            }}
          />
        )}
      </div>
    </div>
  );
}
