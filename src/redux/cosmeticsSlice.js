import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: null,
  data: [],
  newData: [],
};

export const cosmeticsFetch = createAsyncThunk("cosmetics/cosmeticsFetch", async () => {
  try {
    const rep = await axios.get("https://fortnite-api.com/v2/news");
    return rep.data.data;
  } catch (error) {
    console.log(error);
  }
});

const cosmeticsSlice = createSlice({
  name: "cosmetics",
  initialState,
  reducers: {},
  extraReducers: {
    [cosmeticsFetch.padding]: (state, action) => {
      state.status = "padding";
    },
    [cosmeticsFetch.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "success";
    },
    [cosmeticsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

// Action creators are generated for each case reducer function
export const {} = cosmeticsSlice.actions;

export default cosmeticsSlice.reducer;
