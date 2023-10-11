import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { closeDeleteTaskModal } from "../../redux/slices/deleteTaskModalSlice";
import { deleteTask } from "../../redux/slices/tasksSlice";

function DeleteTaskModal() {
  const dispatch = useDispatch();
  const deleteTaskModalOpened = useSelector((state) => state.deleteTaskModal.open);
  const deletingTaskId = useSelector((state) => state.deleteTaskModal.deletingId);
  const handleClose = () => dispatch(closeDeleteTaskModal());

  return (
    <Modal centered show={deleteTaskModalOpened} onHide={handleClose}>
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
            dispatch(deleteTask(deletingTaskId));
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
