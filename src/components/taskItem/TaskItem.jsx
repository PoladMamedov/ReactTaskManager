/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { toggleTaskReadiness } from "../../redux/slices/tasksSlice";
import { openDeleteTaskModal } from "../../redux/slices/deleteTaskModalSlice";
import { openEditingTaskModal } from "../../redux/slices/createEditTaskModalSlice";

function TaskItem({ taskObj: { task, taskDescription, finished, id } }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="ms-2 me-auto flex-shrink-1 w-75">
        {finished ? (
          <>
            <div className="fw-bold fs-4 text-decoration-line-through">{task} &#10004;</div>
            <p className="text-decoration-line-through">{taskDescription ? taskDescription : "No description"}</p>
            <p className="text-success fs-4 fw-bold">DONE</p>
          </>
        ) : (
          <>
            <div className={finished ? "fw-bold fs-4 text-decoration-line-through" : "fw-bold fs-4"}>{task}</div>
            <p>{taskDescription ? taskDescription : "No description"}</p>
            <p className="text-danger fs-4 fw-bold">NOT DONE</p>
          </>
        )}
      </div>
      <div style={{ width: "140px" }} className="d-flex flex-column gap-2 flex-shrink-0">
        {finished ? (
          <Button
            onClick={() => {
              dispatch(toggleTaskReadiness(id));
            }}
            variant="danger"
          >
            Mark as not done &#10006;
          </Button>
        ) : (
          <Button
            onClick={() => {
              dispatch(toggleTaskReadiness(id));
            }}
            variant="success"
          >
            Mark as done &#10004;
          </Button>
        )}
        <Button
          onClick={() => {
            dispatch(openEditingTaskModal(id));
          }}
          variant="primary"
        >
          Edit
        </Button>
        <Button
          onClick={() => {
            dispatch(openDeleteTaskModal(id));
          }}
          variant="danger"
        >
          Delete
        </Button>
      </div>
    </>
  );
}

export default TaskItem;
