import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: null,
  data: [],
  newData: [],

  now: new Date().toString().substr(16, 2) + new Date().toString().substr(19, 2), //目前時間不會隨著元件改變而更新(除非重新整理)
  // now: "1230", //大專demo錄製影片用
};
//fetch data
export const storesFetch = createAsyncThunk("stores/storesFetch", async () => {
  try {
    const rep = await axios.get("https://gis.taiwan.net.tw/XMLReleaseALL_public/restaurant_C_f.json");
    return rep.data;
  } catch (error) {
    console.log(error);
  }
});

const storesSlice = createSlice({
  name: "stores",
  initialState,
  reducers: {
    extraReducers: {
      [storesFetch.padding]: (state, action) => {
        state.status = "padding";
      },
      [storesFetch.fulfilled]: (state, action) => {
        state.data = action.payload;
        state.status = "success";
      },
      [storesFetch.rejected]: (state, action) => {
        state.status = "rejected";
      },
    },
  },
});

// Action creators are generated for each case reducer function
export const {} = storesSlice.actions;

export default storesSlice.reducer;
