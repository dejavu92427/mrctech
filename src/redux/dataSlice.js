import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: null,
  data: [],
  newData: [],
};

export const dataFetch = createAsyncThunk("data/dataFetch", async () => {
  try {
    const rep = await axios.get("https://fortnite-api.com/v1/banners");
    // const rep = await axios.get("http://localhost:3001/");

    return rep.data.data;
  } catch (error) {
    console.log(error);
  }
});

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    filterCategory: (state, action) => {
      state.newData = state.data.filter((v) => {
        return v.category === action.payload;
      });
    },
  },
  extraReducers: {
    [dataFetch.padding]: (state, action) => {
      state.status = "padding";
    },
    [dataFetch.fulfilled]: (state, action) => {
      state.data = action.payload.filter((v, i) => {
        return i < 50;
      });
      state.newData = action.payload.filter((v, i) => {
        return i < 50;
      });
      state.status = "success";
    },
    [dataFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

// Action creators are generated for each case reducer function
export const { filterCategory } = dataSlice.actions;

export default dataSlice.reducer;
