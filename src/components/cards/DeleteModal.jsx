import { Modal, Button } from "react-bootstrap";

const DeleteModal = ({ show, onHide, onConfirm, title }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>Do you want to delete this movie?</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onConfirm}>
          Yes
        </Button>
        <Button variant="primary" onClick={onHide}>
          No
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
