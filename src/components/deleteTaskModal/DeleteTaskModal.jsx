import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { closeDeleteTaskModal } from "../../redux/slices/deleteTaskModalSlice";
import { deleteTask } from "../../redux/slices/tasksSlice";

function DeleteTaskModal() {
  const dispatch = useDispatch();
  const { open, deletingId } = useSelector((state) => state.deleteTaskModal);
  const handleClose = () => dispatch(closeDeleteTaskModal());

  return (
    <Modal centered show={open} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Are you sure?</Modal.Title>
      </Modal.Header>
      <Modal.Body>Delete this task?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          onClick={() => {
            dispatch(deleteTask(deletingId));
            handleClose();
          }}
          variant="danger"
        >
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteTaskModal;
