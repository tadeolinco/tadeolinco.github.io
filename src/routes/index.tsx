import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

const SUBS = [
  { text: "New card.", duration: 2_000, ytOffset: 88 },
  { text: "What do you think?", duration: 3_000, ytOffset: 91 },
  { text: "Whoa-ho. Very nice.", duration: 2_000, ytOffset: 92 },
  { text: "Look at that.", duration: 2_000, ytOffset: 96 },
  {
    text: "Picked them up from the printers yesterday.",
    duration: 3_000,
    ytOffset: 97,
  },
  { text: "Good coloring", duration: 1_500, ytOffset: 99 },
  { text: "That's bone.", duration: 1_500, ytOffset: 99 },
  {
    text: "And the lettering is something called Silian Rail.",
    duration: 3_000,
    ytOffset: 100,
  },
  { text: "That's very cool, Bateman.", duration: 2_000, ytOffset: 105 },
  { text: "But that's nothing.", duration: 2_000, ytOffset: 105 },
  { text: "Look at this.", duration: 2_000, ytOffset: 107 },
  { text: "That is really nice", duration: 1_500, ytOffset: 108 },
  { text: "Eggshell with Romalian type", duration: 2_000, ytOffset: 109 },
  { text: "What do you think?", duration: 2_000, ytOffset: 113 },
  { text: "Nice.", duration: 500, ytOffset: 114 },
  { text: "Jesus, that is really super", duration: 1_500, ytOffset: 116 },
  {
    text: "How'd a nitwit like you get so tasteful?",
    duration: 3_000,
    ytOffset: 116,
  },
  {
    text: "But wait. You ain't seen nothing yet",
    duration: 3_000,
    ytOffset: 122,
  },
  {
    text: "Raised lettering, pale nimbus, white",
    duration: 4_000,
    ytOffset: 131,
  },
  { text: "Impressive", duration: 2_000, ytOffset: 137 },
  { text: "Very nice", duration: 2_000, ytOffset: 139 },
  { text: "Let's see Paul Allen's card", duration: 5_000, ytOffset: 142 },
  {
    text: "Look at that subtle off-white coloring.",
    duration: 2_000,
    ytOffset: 156,
  },
  { text: "The tasteful thickness of it.", duration: 2_000, ytOffset: 161 },
  {
    text: "Oh my god, it even has a watermark...",
    duration: 2_000,
    ytOffset: 164,
  },
];

function RouteComponent() {
  const [rotations, setRotations] = useState({ x: 0, y: 0 });

  const [currSubIndex, setCurrSubIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrSubIndex((prev) => prev + 1);
    }, SUBS[currSubIndex].duration + 500);

    return () => clearTimeout(timeout);
  }, [currSubIndex]);

  useEffect(() => {
    const callback = (event: MouseEvent) => {
      const maxRotation = 20;

      const x = event.x;
      const y = event.y;

      const containerWidth = window.innerWidth;
      const containerHeight = window.innerHeight;

      setRotations({
        y: ((x - containerWidth / 2) / containerWidth) * maxRotation,
        x: ((y - containerHeight / 2) / containerHeight) * maxRotation,
      });
    };

    window.addEventListener("mousemove", callback);

    return () => {
      window.removeEventListener("mousemove", callback);
    };
  }, []);

  return null;

  // return (
  //   <div className="min-h-dvh flex flex-col items-center justify-center bg-black">
  //     <div
  //       className="bg-green-500 absolute p-4 flex flex-col gap-10 rounded-3xl"
  //       style={{
  //         width: 452 + 3 * Math.abs(rotations.y),
  //         height: 232 + 3 * Math.abs(rotations.x),
  //         transform: `rotateX(${rotations.x * (1 + 0.125 * 3)}deg) rotateY(${
  //           rotations.y * (1 + 0.125 * 3)
  //         }deg)`,
  //       }}
  //     ></div>
  //     <div
  //       className="bg-orange-500 absolute p-4 flex flex-col gap-10 rounded-2xl"
  //       style={{
  //         width: 452 + 2 * Math.abs(rotations.y),
  //         height: 232 + 2 * Math.abs(rotations.x),
  //         transform: `rotateX(${rotations.x * (1 + 0.125 * 2)}deg) rotateY(${
  //           rotations.y * (1 + 0.125 * 2)
  //         }deg)`,
  //       }}
  //     ></div>
  //     <div
  //       className="bg-blue-500 absolute p-4 flex flex-col gap-10 rounded-xl"
  //       style={{
  //         width: 452 + 1 * Math.abs(rotations.y),
  //         height: 232 + 1 * Math.abs(rotations.x),
  //         transform: `rotateX(${rotations.x * (1 + 0.125 * 1)}deg) rotateY(${
  //           rotations.y * (1 + 0.125 * 1)
  //         }deg)`,
  //       }}
  //     ></div>
  //     <div
  //       className="bg-[#faf9f6] p-4 flex flex-col gap-10 rounded-md z-10 shadow-2xl"
  //       style={{
  //         width: 452,
  //         height: 232,
  //         transform: `rotateX(${rotations.x}deg) rotateY(${rotations.y}deg)`,
  //       }}
  //     >
  //       <div className="flex gap-40 justify-between items-center">
  //         <div className="flex gap-1">
  //           <a
  //             href="https://www.linkedin.com/in/tadeolinco/"
  //             target="_blank"
  //             role="button"
  //             className="rounded-full p-1 transition duration-300 ease-in-out hover:bg-gray-200"
  //           >
  //             <svg viewBox="0 0 24 24" role="presentation" className="w-6 h-6">
  //               <path
  //                 d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"
  //                 style={{ fill: "#2867b2" }}
  //               ></path>
  //             </svg>
  //           </a>
  //           <a
  //             href="https://github.com/tadeolinco"
  //             target="_blank"
  //             role="button"
  //             className="rounded-full p-1 transition duration-300 ease-in-out hover:bg-gray-200"
  //           >
  //             <svg viewBox="0 0 24 24" role="presentation" className="w-6 h-6">
  //               <path
  //                 d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
  //                 style={{ fill: "currentColor" }}
  //               ></path>
  //             </svg>
  //           </a>
  //           <a
  //             href="https://letterboxd.com/tadeolinco/"
  //             target="_blank"
  //             role="button"
  //             className="rounded-full p-1 min-w-8 transition duration-300 ease-in-out hover:bg-gray-200"
  //           >
  //             <img
  //               src="https://a.ltrbxd.com/logos/letterboxd-decal-dots-pos-rgb-500px.png"
  //               className="w-6 min-w-6 h-6"
  //             />
  //           </a>
  //         </div>

  //         <div>
  //           <a
  //             href="mailto:tadeolinco@gmail.com"
  //             target="_blank"
  //             role="button"
  //             className="transition hover:underline"
  //           >
  //             tadeolinco@gmail.com
  //           </a>
  //         </div>
  //       </div>
  //       <div className="flex flex-col text-center">
  //         <p className="font-bold text-gray-900 text-3xl">Sam Bautista</p>
  //         <p className="text-gray-900 text-xl">Frontend Engineer</p>
  //       </div>
  //       <div className="flex justify-center gap-2 text-center">
  //         <a className="hover:underline" role="button">
  //           Projects
  //         </a>
  //         <span>•</span>
  //         <a className="hover:underline" role="button">
  //           Projects
  //         </a>
  //         <span>•</span>
  //         <a className="hover:underline" role="button">
  //           Projects
  //         </a>
  //       </div>
  //     </div>
  //     <p className="absolute bottom-4 left-0 right-0 text-center text-white">
  //       <a
  //         role="button"
  //         className="hover:underline"
  //         target="_blank"
  //         href={`https://www.youtube.com/watch?v=_Jdvwiun9zY&t=${SUBS[currSubIndex].ytOffset}s`}
  //       >
  //         "{SUBS[currSubIndex].text}"
  //       </a>
  //     </p>
  //   </div>
  // );
}
