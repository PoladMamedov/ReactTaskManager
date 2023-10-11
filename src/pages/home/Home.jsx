import TasksList from "../../components/tasksList/TasksList";
import { useSelector } from "react-redux";

function Home() {
  const tasks = useSelector((state) => state.tasks);

  return <TasksList tasks={tasks} />;
}

export default Home;
