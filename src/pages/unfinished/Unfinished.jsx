import { useSelector } from "react-redux";
import TasksList from "../../components/tasksList/TasksList";

function Unfinished() {
  const tasks = useSelector((state) => state.tasks.filter((task) => task.finished === false));

  return <TasksList tasks={tasks} />;
}

export default Unfinished;
