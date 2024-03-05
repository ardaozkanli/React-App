import { Button, Card } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import DeleteModal from "./DeleteModal";
function MovieCard({ id, title, src, rating, onDelete }) {
  const [showModal, setShowModal] = useState(false);
  const handleDeleteButton = () => {
    setShowModal(true);
  };
  const handleDeleteMovie = async () => {
    try {
      await onDelete(id);
      setShowModal(false);
    } catch (error) {
      console.log("unsuccesful");
    }
  };

  return (
    <>
      <Card
        key={id}
        className="movie-card-container"
        style={{ border: "none", borderRadius: "10px" }}>
        <Link to={`/movie-detail/${id}`}>
          <Card.Img variant="top" src={src} />
        </Link>
        <Card.Body className="movie-card" style={{ height: "200px" }}>
          <Card.Text className="d-flex align-items-center gap-1">
            <FaStar style={{ color: "#FFC107" }} /> {rating}
          </Card.Text>
          <Card.Title>{title}</Card.Title>
          <Card.Text
            className="d-flex justify-content-end card-icons"
            style={{ gap: "5px" }}>
            <Button variant="outline-primary" onClick={handleDeleteButton}>
              <FaTrash />
            </Button>
            <Link to={`/edit-movie/${id}`}>
              <Button variant="outline-success">
                <FaEdit />
              </Button>
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
      <DeleteModal
        title={title}
        show={showModal}
        onHide={() => setShowModal(false)}
        onConfirm={handleDeleteMovie}
      />
    </>
  );
}

export default MovieCard;
