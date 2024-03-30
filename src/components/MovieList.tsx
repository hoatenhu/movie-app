import React, { useState, useEffect, useMemo } from "react";
import { getMoviesByType } from "../api/movies";
import MovieItem from "./MovieItem";
import { MoviesByTypeEnum } from "../types/movie";
import TabBar from "./TabBar";
import SearchBar from "./SearchBar";

const skeletonArr = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
}));

const MoviesList: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [moviesType, setMoviesType] = useState<MoviesByTypeEnum>(
    MoviesByTypeEnum.POPULAR
  );
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handlePressNowPlaying = () => {
    setMoviesType(MoviesByTypeEnum.NOW_PLAYING);
  };

  const handlePressTopRated = () => {
    setMoviesType(MoviesByTypeEnum.TOP_RATED);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredMovies = useMemo(() => {
    if (loading) return skeletonArr;
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [loading, searchQuery]);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const data = await getMoviesByType(moviesType);
        if (data?.results) {
          setMovies(data.results);
          setLoading(false);
        } else {
          throw new Error("An error occurred while fetching data.");
        }
      } catch (error) {
        setError("An error occurred while fetching data.");
        setLoading(false);
      }
    };

    fetchMovies();
  }, [moviesType]);

  return (
    <>
      <SearchBar searchValue={searchQuery} onChangeSearch={handleSearch} />
      <TabBar
        onPressNowPlaying={handlePressNowPlaying}
        onPressTopRated={handlePressTopRated}
      />
      <div className="movies-list">
        {error && <div className="error">{error}</div>}
        {!error && (
          <div className="movies">
            {filteredMovies.map((movie) => (
              <MovieItem key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default MoviesList;
