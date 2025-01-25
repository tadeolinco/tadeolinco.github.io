import baseFilms from "../baseFilms.json";

type PosterRowProps = {
  startIndex: number;
  isReverse: boolean;
};

export function PosterRow(props: PosterRowProps) {
  const renderFilms = baseFilms
    .slice(props.startIndex)
    .concat(baseFilms.slice(0, props.startIndex))
    .map((film) => {
      const uriSplit = film.uri.split("/");
      const uriSlug = uriSplit[uriSplit.length - 1];

      return (
        <a
          key={film.name}
          target="_blank"
          href={film.uri}
          className="w-40 block min-w-0 flex-shrink-0 h-60"
        >
          <img
            src={`/posters/${uriSlug}/poster.jpg`}
            alt={film.name}
            className="h-full w-full rounded-md object-cover hover:scale-110 transition-all duration-300 filter cursor-pointer blur-[2px] hover:blur-0 grayscale hover:grayscale-0"
          />
        </a>
      );
    });

  return (
    <div
      className={`flex gap-4 ${props.isReverse ? "marquee-reverse" : "marquee"}`}
      style={{ width: 175.65217391304347 * baseFilms.length }}
    >
      {renderFilms}
      {renderFilms}
    </div>
  );
}
