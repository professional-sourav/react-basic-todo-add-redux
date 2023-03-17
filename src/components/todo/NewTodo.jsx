import React, { createRef } from "react";
import { useDispatch } from "react-redux";
import { createNewTodo } from "../../redux/slices/todo";

const NewTodo = () => {
  const title = createRef();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(title.current.value);
    dispatch(createNewTodo(title.current.value));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input placeholder="Enter the title" ref={title} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default NewTodo;
