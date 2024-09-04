import Todo from "./Todo.jsx";

import { useTodos } from "../TodosContext.jsx";
import { useContext } from "react";

function TodosList() {
  const store = useTodos();

  // function deleteHandler(id) {
  //   if (confirm("Are you sure you want to delete the to-do?")) {
  //     store.dispatch({
  //       type: "deleted",
  //       id: id,
  //     });
  //   }
  // }
  // function toggleIsDoneHandler(id) {
  //   store.setTodos({
  //     type: "toggledIsDone",
  //     id: id,
  //   });
  // console.log("toggle");
  // }
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
