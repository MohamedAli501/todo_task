import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const taskListSlice = createSlice({
  name: "taskList",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      state.push(payload);
      localStorage.setItem("tasks", JSON.stringify(state));
    },
    completedescription: (state, { payload }) => {
      let index = state.findIndex((obj) => obj.task_id === payload.id);

      state[index].task_description[payload.descIndex].complete =
        payload.checkComplete;
      localStorage.setItem("tasks", JSON.stringify(state));
    },
    deleteTask: (state, { payload }) => {
      let deleteItem = state.filter((del) => del.task_id !== payload);
      localStorage.setItem("tasks", JSON.stringify(deleteItem));
      return deleteItem;
    },
    doneTask: (state, { payload }) => {
      let index = state.findIndex((obj) => obj.task_id === payload);
      state[index].task_complete = true;
      localStorage.setItem("tasks", JSON.stringify(state));
    },
    loadTaskList: (state, { payload }) => {
      return payload;
    },
  },
});

export const {
  addTask,
  completedescription,
  deleteTask,
  doneTask,
  loadTaskList,
} = taskListSlice.actions;
export default taskListSlice.reducer;
