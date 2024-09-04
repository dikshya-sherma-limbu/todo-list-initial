import "./ToDo.scss";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useTodos } from "../TodosContext.jsx";
import { useParams } from "react-router-dom";
import { Button } from "@material-tailwind/react";

function SingleTodo() {
  let { id } = useParams();
  const store = useTodos();
  const { todos } = useTodos();
  const givenID = todos.filter((todo) => todo.id == id)[0];
  return (
    <>
      <Link to="/">
        <div className="back-btn">
          <Button
            variant="outlined"
            sx={{ mt: 10, mb: 10, mr: 5 }} // mt = margin-top, mb = margin-bottom, mr = margin-right
          >
            Back
          </Button>
        </div>
      </Link>

      <div className={`todo ${givenID.completed ? "done" : ""}`}>
        <Link to={"/todo/" + givenID} style={{ textDecoration: "none" }}>
          <h3>{givenID.userId}</h3>
          <p>{givenID.todo}</p>
          <div className="task-check">
            <input
              type="checkbox"
              onClick={() =>
                store.dispatch({
                  type: "toggledIsDone",
                  id: givenID,
                })
              }
              checked={givenID.completed}
            />
            <label>{!givenID.completed ? "To-Do" : "Done"}</label>
          </div>
          <button
            className="erase"
            onClick={() =>
              store.dispatch({
                type: "deleted",
                id: givenID,
              })
            }
          >
            x erase
          </button>
        </Link>
      </div>
    </>
  );
}

export default SingleTodo;
