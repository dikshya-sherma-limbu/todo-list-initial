import Todo from "./Todo.jsx";

import { useTodos } from "../TodosContext.jsx";
import { useContext } from "react";

function TodosList() {
  const store = useTodos();
  console.log("store " + store.todo);
  return (
    <>
      <div className="todos">
        {store.filterTodos().map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </div>
    </>
  );
}

export default TodosList;
