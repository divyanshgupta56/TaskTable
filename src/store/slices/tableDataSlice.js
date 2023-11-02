import { createSlice } from "@reduxjs/toolkit";
const tableDataSlice = createSlice({
  name: "table",
  initialState: {
    tableEntries: [
      {
        srNo: 0,
        task: "",
        project: "",
        pImpact: "",
        effort: "",
        clarity: "",
        owner: "",
        badges: "",
        dueDate: "",
        allotmentDate: "",
        status: "",
        files: "",
        links: "",
        submissionApproval: "",
        additionalInfo: "",
        isEditable: "",
      },
    ],
    columns: {
      task: true,
      project: true,
      pImpact: true,
      effort: true,
      clarity: true,
      owner: false,
      badges: true,
      dueDate: true,
      allotmentDate: true,
      status: true,
      files: true,
      links: true,
      submissionApproval: true,
      additionalInfo: true,
    },
  },
  reducers: {
    addUserDetail(state, action) {
      state.tableEntries.push(action.payload);
    },
    setColumns(state, action) {
      state.columns = {
        ...state.columns,
        ...action.payload,
      };
    },
  },
});

export const { addUserDetail, setColumns } = tableDataSlice.actions;
export const tableReducer = tableDataSlice.reducer;
