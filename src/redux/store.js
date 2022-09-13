import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducer/authReducer";
import { videosReducer } from "./reducer/videosReducer";
import { selectedVideoReducer } from "./reducer/videosReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    videos: videosReducer,
    selectedVideos: selectedVideoReducer,
  },
});

export default store;
