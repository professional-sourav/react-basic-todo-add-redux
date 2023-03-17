import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewTodo from "./components/todo/NewTodo";
import { clearTodos, fetchTodos } from "./redux/slices/todo";
import "./styles.css";

export default function App() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchTodos());

    // return () => {
    //   dispatch(clearTodos());
    // };
  }, []);

  console.log(state.todo);

  return (
    <div className="App">
      <NewTodo />
      <h1>List of Todos</h1>
      {state.todo.isLoading && <p>Loading...</p>}
      {state.todo.todos &&
        state.todo.todos.map((todo) => <p key={todo.id}>{todo.title}</p>)}
    </div>
  );
}
