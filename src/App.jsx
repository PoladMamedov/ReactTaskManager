import { AppRoutes } from "./AppRoutes";
import Header from "./components/header/Header";
import CreateEditTaskModal from "./components/createEditTaskModal/CreateEditTaskModal";
import DeleteTaskModal from "./components/deleteTaskModal/DeleteTaskModal";

function App() {
  return (
    <>
      <Header />
      <main>
        <AppRoutes />
      </main>
      <CreateEditTaskModal />
      <DeleteTaskModal />
    </>
  );
}

export default App;
