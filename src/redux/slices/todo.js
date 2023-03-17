import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  const todoData = await fetch("https://jsonplaceholder.typicode.com/todos");
  return todoData.json();
});

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    isLoading: false,
    todos: [],
    isError: false
  },
  reducers: {
    createNewTodo: (state, action) => {
      state.todos.push({
        userId: state.todos.length + 1,
        id: state.todos.length + 1,
        title: action.payload,
        completed: false
      });
    },

    clearTodos: (state, action) => {
      state.todos = [];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    });

    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  }
});

const todoReducer = todoSlice.reducer;
const { createNewTodo, clearTodos } = todoSlice.actions;

export { todoReducer, createNewTodo, clearTodos };
