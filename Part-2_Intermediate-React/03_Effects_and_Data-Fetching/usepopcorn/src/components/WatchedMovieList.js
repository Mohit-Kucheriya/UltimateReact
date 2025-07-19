import WatchedMovie from "./WatchedMovie";

export default function WatchedMovieList({
  watched,
  onHandleDeleteWatchedMovie,
}) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          key={movie.imdbID}
          movie={movie}
          onHandleDeleteWatchedMovie={onHandleDeleteWatchedMovie}
        />
      ))}
    </ul>
  );
}
