/* eslint-disable react/prop-types */
import TaskItem from "../taskItem/TaskItem";
import ListGroup from "react-bootstrap/ListGroup";

function TasksList({ tasks }) {
  return (
    <ListGroup as={"ul"} className="mt-5 gap-2">
      {tasks.length ? (
        tasks.map((task) => (
          <ListGroup.Item key={task.id} as={"li"} className="d-flex justify-content-between border-top gap-2">
            <TaskItem taskObj={task} />
          </ListGroup.Item>
        ))
      ) : (
        <p className="text-center fs-3">Oops, there is no tasks!</p>
      )}
    </ListGroup>
  );
}

export default TasksList;
