import { configureStore } from "@reduxjs/toolkit";
import { immoApi } from "../services/immoApi";

export default configureStore({
  reducer: {
    [immoApi.reducerPath]: immoApi.reducer,
  },
});
