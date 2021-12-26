import { configureStore } from "@reduxjs/toolkit";

import taskListSlice from "./sliceList";
import languageSlice from "./langSlice";

export default configureStore({
  reducer: {
    language: languageSlice,
    taskList: taskListSlice,
  },
});
