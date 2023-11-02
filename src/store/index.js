import { configureStore } from "@reduxjs/toolkit";
import {
  setColumns,
  addUserDetail,
  tableReducer,
} from "./slices/tableDataSlice";

const store = configureStore({
  reducer: {
    table: tableReducer,
  },
});
export { store, setColumns, addUserDetail };
