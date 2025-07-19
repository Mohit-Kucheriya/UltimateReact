import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import Logo from "./components/Logo";
import NavBar from "./components/NavBar";
import InputSearch from "./components/InputSearch";
import NumsResults from "./components/NumsResults";
import Main from "./components/Main";
import Box from "./components/Box";
import MovieList from "./components/MovieList";
import WatchedMovieList from "./components/WatchedMovieList";
import WatchedMovieSummary from "./components/WatchedMovieSummary";
import SelectedMovieDetails from "./components/SelectedMovieDetails";
import KEY from "./config/key";

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedMovieID, setSelectedMovieID] = useState(null);

  function handleSelectedMovieID(id) {
    setSelectedMovieID((currentID) => (currentID === id ? null : id));
  }

  function handleCloseDetails() {
    setSelectedMovieID(null);
  }

  function handleAddWatchedMovie(movie) {
    setWatched((currWatchedMovie) => [...currWatchedMovie, movie]);
  }

  function handleDeleteWatchedMovie(id) {
    setWatched((currWatchedMovie) =>
      currWatchedMovie.filter((movie) => movie.imdbID !== id)
    );
  }

  useEffect(() => {
    const controller = new AbortController();

    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
        );
        if (!res.ok) {
          throw new Error("Something went wrong with the API request");
        }

        const data = await res.json();
        if (data.Response === "False") {
          throw new Error("No movies found");
        }

        setMovies(data.Search);
        setError("");
      } catch (err) {
        if (err.name !== "AbortError") {
          console.log(err.message);
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    // If the query is less than 3 characters, we don't want to fetch movies, to avoid unnecessary API calls
    if (query.length < 3) {
      setMovies([]);
      setError("");
    }

    handleCloseDetails();
    fetchMovies();
    return () => {
      controller.abort();
    };
  }, [query]);

  return (
    <>
      <NavBar>
        <Logo />
        <InputSearch query={query} setQuery={setQuery} />
        <NumsResults movies={movies} />
      </NavBar>

      <Main>
        {/* Component composition */}
        <Box>
          {isLoading ? (
            <Loader />
          ) : error ? (
            <ErrorMessage message={error} />
          ) : (
            <MovieList
              movies={movies}
              onSelectedMovieID={handleSelectedMovieID}
            />
          )}
        </Box>

        <Box>
          {selectedMovieID ? (
            <SelectedMovieDetails
              selectedMovieID={selectedMovieID}
              onHandleCloseDetails={handleCloseDetails}
              onHandleAddWatchedMovie={handleAddWatchedMovie}
              watched={watched}
            />
          ) : (
            <>
              <WatchedMovieSummary watched={watched} />
              <WatchedMovieList
                watched={watched}
                onHandleDeleteWatchedMovie={handleDeleteWatchedMovie}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
