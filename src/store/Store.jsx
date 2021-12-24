import { configureStore } from "@reduxjs/toolkit";

import taskListSlice from "./sliceList";

export default configureStore({
  reducer: {
    taskList: taskListSlice,
  },
});
