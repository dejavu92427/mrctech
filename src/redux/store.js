import { configureStore } from "@reduxjs/toolkit";
import cosmeticsReducer from "./cosmeticsSlice";

export default configureStore({
  reducer: {
    cosmetics: cosmeticsReducer,
  },
});
