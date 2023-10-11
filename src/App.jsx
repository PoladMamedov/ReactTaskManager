import { AppRoutes } from "./AppRoutes";
import Header from "./components/Header/Header";
import CreateEditTaskModal from "./components/createEditTaskModal/CreateEditTaskModal";
import DeleteTaskModal from "./components/deleteTaskModal/DeleteTaskModal";

function App() {

  return (
    <>
      <Header />
      <AppRoutes />
      <CreateEditTaskModal />
      <DeleteTaskModal />
    </>
  );
}

export default App;
