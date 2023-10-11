import { AppRoutes } from "./AppRoutes";
import Header from "./components/Header/Header";
import CreateTaskModal from "./components/createTaskModal/createTaskModal";
import DeleteTaskModal from "./components/deleteTaskModal/DeleteTaskModal";

function App() {

  return (
    <>
      <Header />
      <AppRoutes />
      <CreateTaskModal />
      <DeleteTaskModal />
    </>
  );
}

export default App;
