import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducer/authReducer";
import { videosReducer } from "./reducer/videosReducer";
import { selectedVideoReducer } from "./reducer/videosReducer";
import {channelDeatilReducer} from './reducer/channelReducer';
import {commentReducer} from './reducer/commentReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    videos: videosReducer,
    selectedVideos: selectedVideoReducer,
    channelDetails:channelDeatilReducer,
    commentList:commentReducer,
  },
});

export default store;
