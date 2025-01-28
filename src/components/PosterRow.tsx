import ColorThief from "colorthief";
import mixpanel from "mixpanel-browser";
import { memo, useRef } from "react";
import baseFilms from "../baseFilms.json";
import cdn from "../cdn.json";

type PosterRowProps = {
  startIndex: number;
  isReverse: boolean;
  stopBlur: boolean;
  stopGrayscale: boolean;
  onChangePalette: (palette: [number, number, number][]) => void;
};

function shuffleArray(array: (typeof baseFilms)[number][]) {
  // Create a clone of the array
  const clonedArray = [...array];

  // Fisher-Yates Shuffle
  for (let i = clonedArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [clonedArray[i], clonedArray[randomIndex]] = [
      clonedArray[randomIndex],
      clonedArray[i],
    ];
  }

  return clonedArray;
}

const colorThief = new ColorThief();

export const PosterRow = memo(
  (props: PosterRowProps) => {
    const films = useRef(shuffleArray(baseFilms));

    const renderFilms = films.current
      .slice(props.startIndex)
      .concat(films.current.slice(0, props.startIndex))
      .map((film) => {
        const uriSplit = film["Letterboxd URI"].split("/");
        const uriSlug = uriSplit[uriSplit.length - 1];

        return (
          <a
            key={film["Name"]}
            target="_blank"
            href={film["Letterboxd URI"]}
            className="w-40 block min-w-0 flex-shrink-0 h-60"
            onClick={() => {
              mixpanel.track("film_click", {
                film: film["Name"],
              });
            }}
          >
            <img
              // @ts-expect-error cannot type
              src={cdn[`posters/${uriSlug}`]}
              alt={film["Name"]}
              className={
                "h-full w-full rounded-md object-cover hover:scale-110 transition-all duration-300 filter cursor-pointer" +
                (!props.stopBlur ? " blur-[2px] hover:blur-0" : "") +
                (!props.stopGrayscale ? " grayscale hover:grayscale-0" : "")
              }
              crossOrigin="anonymous"
              onMouseEnter={(event) => {
                const palette = colorThief.getPalette(
                  event.target as HTMLImageElement,
                  4
                );
                const mainColor = colorThief.getColor(
                  event.target as HTMLImageElement
                );
                if (!palette || palette.length === 0) {
                  props.onChangePalette([[255, 255, 255]]);
                } else {
                  mixpanel.track("film_hover", {
                    film: film["Name"],
                  });
                  props.onChangePalette(
                    [mainColor].concat(
                      palette.filter((color) =>
                        color.every((c, i) => c !== mainColor[i])
                      )
                    )
                  );
                }
              }}
            />
          </a>
        );
      });

    return (
      <div
        className={`flex gap-4 ${props.isReverse ? "marquee-reverse" : "marquee"}`}
        style={{
          width: 175.65217391304347 * baseFilms.length,
          animationDuration: `${baseFilms.length * 7}s`,
        }}
      >
        {renderFilms}
        {renderFilms}
      </div>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.stopBlur === nextProps.stopBlur &&
      prevProps.stopGrayscale === nextProps.stopGrayscale
    );
  }
);
