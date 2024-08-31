import Filter from "../components/Filter.jsx";
import AddTodoModel from "../components/models/AddTodoModel.jsx";
import ModelWindow from "../components/models/ModelWindow.jsx";
import { useTodos } from "../TodosContext.jsx";
import TodosList from "../components/TodosList.jsx";

function Home() {
  const store = useTodos();
  return (
    <>
      {store.modelIsActive && (
        <ModelWindow>
          <AddTodoModel />
        </ModelWindow>
      )}

      <div className="container">
        <Filter />
        <TodosList />
      </div>
    </>
  );
}

export default Home;
