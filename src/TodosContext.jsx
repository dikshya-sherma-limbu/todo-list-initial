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
    fetch("https://dummyjson.com/todos/random/5")
      .then((res) =>
        res.json().then((data) => {
          // // Dispatch an action to update the state with the fetched data
          setData(data);
          dispatch({ type: "setTodos", payload: data });
          // Log the fetched data to the console
          console.log("data: ", data);
        })
      )
      .catch((error) => console.error("Error fetching todos:", error));
  }, []); // Empty dependency array to run only once on mount

  //adding all the data in local storage
  //i used 'todos' here instead of 'data' because that it is just the fetched data without any state changes.
  // here updating the local storage whenever the `todos` state changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); //with this second argument, new todo will be added in local storage whenever the  add state occurs
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
      return [...todos, action.newTodo];
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
