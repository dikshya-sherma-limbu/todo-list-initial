import {
  createContext,
  useReducer,
  useEffect,
  useState,
  useContext,
} from "react";
export const TodosContext = createContext();

export default function TodosProvider({ children }) {
  const [data, setData] = useState([]);
  const [todos, dispatch] = useReducer(TodosReducer, data);
  const [modelIsActive, setModelIsActive] = useState(false);
  const [filterBy, setFilterBy] = useState("");

  function filterTodos() {
    switch (filterBy) {
      case "todo":
        return todos.filter((todo) => !todo.completed);
      case "done":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }
  useEffect(() => {
    fetch("https://dummyjson.com/todos?limit=7&skip=0")
      .then((res) =>
        res.json().then((list) => {
          //sorted the list again because the fetched data return contains the todos in a nested structure, rather than an array directly.
          const data = list.todos;
          setData(data);
          // // Dispatch an action to update the state with the fetched data
          dispatch({ type: "setTodos", payload: data });
          // Log the fetched data to the console
          console.log("data: ", data);
        })
      )
      .catch((error) => console.error("Error fetching todos:", error));
  }, []); // Empty dependency array to run only once on mount
  return (
    <>
      <main>
        <TodosContext.Provider
          value={{
            todos,
            modelIsActive,
            setModelIsActive,
            dispatch,
            filterBy,
            setFilterBy,
            filterTodos,
          }}
        >
          {children}
        </TodosContext.Provider>
      </main>
    </>
  );
}
export function useTodos() {
  return useContext(TodosContext);
}
function TodosReducer(todos, action) {
  switch (action.type) {
    case "setTodos": {
      return action.payload;
    }
    case "added": {
      //added new item on top first and then the old time using spread operator.
      return [action.newTodo, ...todos];
    }
    case "deleted": {
      //this filters the list removing the list with the given id in props.
      return todos.filter((todo) => todo.id !== action.id);
    }
    case "toggledIsDone": {
      return store.todos.map((todo) => {
        if (todo.id === action.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    }
    default: {
      return todos;
    }
  }
}
