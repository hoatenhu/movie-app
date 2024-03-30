import React, { useMemo, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Skeleton from "react-loading-skeleton";
import MovieModal from "./MovieModal";
import "react-loading-skeleton/dist/skeleton.css";

interface MovieItemProps {
  movie: any;
}

const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const isMissing = useMemo(() => !movie?.title, [!movie?.title]);

  return (
    <div className="movie-item" onClick={toggleModal}>
      {isMissing ? (
        <Skeleton width={"100%"} height={300} />
      ) : (
        <LazyLoadImage
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          effect="opacity"
          width={"100%"}
          height={300}
        />
      )}
      <div className="movie-details">
        <h3 className="movie-title">
          {isMissing ? (
            <Skeleton containerClassName="flex-1" height={25} />
          ) : (
            movie.title
          )}
        </h3>
        <p>{isMissing ? <Skeleton count={3} /> : movie.overview}</p>
        <MovieModal isOpen={showModal} onClose={toggleModal} movie={movie} />
      </div>
    </div>
  );
};

export default MovieItem;
