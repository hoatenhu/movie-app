import Modal from "react-modal";

interface MovieModalProps {
  isOpen: boolean;
  onClose: () => void;
  movie: any;
}

Modal.setAppElement("#root");

const MovieModal = ({ isOpen, onClose, movie }: MovieModalProps) => {
  return (
    <Modal isOpen={isOpen} className="modal" overlayClassName="modal-overlay">
      <div className="modal-content">
        <h1 className="close" onClick={onClose}>
          &times;
        </h1>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <p>Release Date: {movie.release_date}</p>
        <p>Rating: {movie.vote_average}</p>
      </div>
    </Modal>
  );
};

export default MovieModal;
