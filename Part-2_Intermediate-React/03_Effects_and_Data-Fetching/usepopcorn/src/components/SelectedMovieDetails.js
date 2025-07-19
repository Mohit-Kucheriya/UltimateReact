import { useState, useEffect } from "react";
import Loader from "./Loader";
import StarRating from "../StarRating";
import KEY from "../config/key";

export default function SelectedMovieDetails({
  selectedMovieID,
  onHandleCloseDetails,
  onHandleAddWatchedMovie,
  watched,
}) {
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const isMovieWatched = watched
    .map((movie) => movie.imdbID)
    .includes(selectedMovieID);

  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedMovieID
  )?.userRating;

  const {
    Actors: actors,
    Director: director,
    Genre: genre,
    Plot: plot,
    Poster: poster,
    Released: released,
    Title: title,
    imdbRating,
    Year: year,
    Runtime: runtime,
  } = movieDetails;

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedMovieID,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ")[0]), // Extracting the number from "120 min"
      userRating,
    };

    onHandleAddWatchedMovie(newWatchedMovie);
    onHandleCloseDetails();
  }

  useEffect(() => {
    async function fetchMovieDetailsByID() {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedMovieID}`
      );
      const data = await res.json();
      setMovieDetails(data);
      setIsLoading(false);
    }

    fetchMovieDetailsByID();
  }, [selectedMovieID]);

  useEffect(() => {
    if (!title) return;
    document.title = `Movie | ${title}`;

    return () => {
      document.title = "usePopcorn"; // Resetting the title when the component unmounts
    };
  }, [title]);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.code === "Escape") {
        onHandleCloseDetails();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onHandleCloseDetails]);

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onHandleCloseDetails}>
              &times;
            </button>
            <img src={poster} alt={`${title} poster`} />
            <div className="details-overview">
              <h2>{title}</h2>

              <p>
                <span>{released}</span>
                <span>•</span>
                <span>{runtime}</span>
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐️</span>
                <span>{imdbRating} IMDb Rating </span>
              </p>
            </div>
          </header>

          <section>
            <div className="rating">
              {!isMovieWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />

                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAdd}>
                      + Add to list
                    </button>
                  )}
                </>
              ) : (
                <p>
                  You have already rated this movie with {watchedUserRating}
                  <span>⭐️</span>
                </p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
}
