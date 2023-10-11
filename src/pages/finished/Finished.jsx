import { useSelector } from "react-redux";
import TasksList from "../../components/tasksList/TasksList";

function Finished() {
  const tasks = useSelector((state) => state.tasks.filter((task) => task.finished === true));

  return <TasksList tasks={tasks} />;
}

export default Finished;
