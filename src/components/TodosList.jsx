import Todo from "./Todo.jsx";

import { useTodos } from "../TodosContext.jsx";

function TodosList() {
  const store = useTodos();

  console.log("store " + store.todo);
  return (
    <>
      <div className="todos">
        {store
          .filterTodos()
          .reverse()
          .map((todo) => (
            <Todo todo={todo} key={todo.id} />
          ))}
      </div>
    </>
  );
}

export default TodosList;
