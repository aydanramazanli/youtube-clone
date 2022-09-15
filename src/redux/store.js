import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducer/authReducer";
import { videosReducer } from "./reducer/videosReducer";
import { selectedVideoReducer } from "./reducer/videosReducer";
import {channelDeatilReducer} from './reducer/channelReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    videos: videosReducer,
    selectedVideos: selectedVideoReducer,
    channelDetails:channelDeatilReducer
  },
});

export default store;
