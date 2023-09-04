import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  BranchGetData,
  DashboardGetData, DepartmentGetData, DesignationGetData, RegionGetData, SalesGetData, addAllDataCrud,
} from "./DashboardCrud";

// GET DATA IN DASHBOARD TABLE
export const dashboardGetDataSlice = createAsyncThunk(
  "dashboardGet/dashboardGet",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await DashboardGetData(payload);
      if (res?.status) {
        return res?.data;
      } else {
        throw new Error(res?.message);
      }
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);

// GET DATA IN REGION DROPDOWN
export const regionGetDataSlice = createAsyncThunk(
  "regionGet/dashboardGet",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await RegionGetData(payload);
      if (res?.status) {
        return res?.data;
      } else {
        throw new Error(res?.message);
      }
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);

// GET ALL DATA IN BRANCH DROPDOWN
export const branchGetDataSlice = createAsyncThunk(
  "branchGet/dashboardGet",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await BranchGetData(payload);
      if (res?.status) {
        return res?.data;
      } else {
        throw new Error(res?.message);
      }
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);

// GET ALL DATA IN DEPARTMENT DROPDOWN
export const departmentGetDataSlice = createAsyncThunk(
  "departmentGet/dashboardGet",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await DepartmentGetData(payload);
      if (res?.status) {
        return res?.data;
      } else {
        throw new Error(res?.message);
      }
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);

// GET ALL DATA IN SALES DROPDOWN
export const salesGetDataSlice = createAsyncThunk(
  "salesGet/dashboardGet",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await SalesGetData(payload);
      if (res?.status) {
        return res?.data;
      } else {
        throw new Error(res?.message);
      }
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);

// GET ALL DATA IN DESIGNATION DROPDOWN
export const designationGetDataSlice = createAsyncThunk(
  "designationGet/dashboardGet",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await DesignationGetData(payload);
      if (res?.status) {
        return res?.data;
      } else {
        throw new Error(res?.message);
      }
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);

// ADD ALL DATA
export const addAllData = createAsyncThunk(
  "addAllData/dashboardGet",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await addAllDataCrud(payload);
      if (res?.status) {
        return res?.data;
      } else {
        throw new Error(res?.message);
      }
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);

const DashboardSlice = createSlice({
  name: "dashboardGet",
  initialState: {
    getAllData: [],
    getRegionData: {},
    getBranchData: {},
    getsalesData: {},
    getDepartmentData: {},
    getDesignationData: {},
    addAllFormData:{},
    isLoading: false,
    error: "",
  },
  reducers: {
  },
  extraReducers: {
    // **************************
    [dashboardGetDataSlice.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [dashboardGetDataSlice.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.getAllData = action?.payload?.data;
      state.error = null;
    },
    [dashboardGetDataSlice.rejected]: (state, error) => {
      state.isLoading = false;
      state.error = error;
    },
    // ***************************
    [regionGetDataSlice.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [regionGetDataSlice.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.getRegionData = action?.payload?.data;
      state.error = null;
    },
    [regionGetDataSlice.rejected]: (state, error) => {
      state.isLoading = false;
      state.error = error;
    },
    // ***************************
    [branchGetDataSlice.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [branchGetDataSlice.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.getBranchData = action?.payload?.data;
      state.error = null;
    },
    [branchGetDataSlice.rejected]: (state, error) => {
      state.isLoading = false;
      state.error = error;
    },
    // *******************
    [departmentGetDataSlice.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [departmentGetDataSlice.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.getDepartmentData = action?.payload?.data;
      state.error = null;
    },
    [departmentGetDataSlice.rejected]: (state, error) => {
      state.isLoading = false;
      state.error = error;
    },
    // *******************
    [salesGetDataSlice.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [salesGetDataSlice.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.getSalesData = action?.payload?.data;
      state.error = null;
    },
    [salesGetDataSlice.rejected]: (state, error) => {
      state.isLoading = false;
      state.error = error;
    },
    // ****************
    [designationGetDataSlice.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [designationGetDataSlice.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.getDesignationData = action?.payload?.data;
      state.error = null;
    },
    [designationGetDataSlice.rejected]: (state, error) => {
      state.isLoading = false;
      state.error = error;
    },
    
    // **********
    [addAllData.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [addAllData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.addAllFormData = action?.payload?.data;
      state.error = null;
    },
    [addAllData.rejected]: (state, error) => {
      state.isLoading = false;
      state.error = error;
    },
  },
});

export const { } = DashboardSlice.actions;
export default DashboardSlice.reducer;
