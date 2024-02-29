import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ITodo {
  id: number;
  description: string;
  completed: boolean;
}

interface TodosState {
  list: ITodo[];
}

const initialState: TodosState = {
  list: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.list.push({
        id: Date.now(),
        description: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.list.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((t) => t.id !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<{ id: number; newDescription: string }>) => {
      const todo = state.list.find((t) => t.id === action.payload.id);
      if (todo) {
        todo.description = action.payload.newDescription;
      }
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, updateTodo } = todosSlice.actions;
export default todosSlice.reducer;
