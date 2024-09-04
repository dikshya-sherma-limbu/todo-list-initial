import { useState } from "react";
import { useTodos } from "../../TodosContext";
function AddTodoModel() {
  const store = useTodos();
  const { todos } = useTodos();
  //initialize use state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // Generate a random integer for the id

  const id = Math.floor(Math.random() * 100); // Generates a random number between 0 and 100

  //update state on input change
  function handleTitleChange(e) {
    setTitle(e.target.value);
  }
  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }
  function addTaskHandler() {
    let newTodo = {
      userId: title,
      todo: description,
      completed: false,
      id: id,
    };
    console.log("new task: ");
    if (newTodo.userId && newTodo.todo) {
      //add the task
      store.dispatch({ type: "added", newTodo });
      store.setModelIsActive(false);
    } else {
      alert("Please enter the task before submision .");
    }
  }

  return (
    <>
      <div className="form">
        <h3>Add a new task</h3>
        <label htmlFor="title">Title *</label>
        <input
          type="text"
          name="title"
          placeholder="Enter a title..."
          value={title}
          onChange={handleTitleChange}
        />
        <br />
        <label htmlFor="description">Description *</label>
        <textarea
          name="description"
          rows="4"
          placeholder="Enter a description..."
          value={description}
          onChange={handleDescriptionChange}
        />
        <br />
        <button className="btn gray" onClick={addTaskHandler}>
          Add Task
        </button>
      </div>
    </>
  );
}

export default AddTodoModel;
