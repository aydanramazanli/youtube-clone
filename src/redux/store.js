import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducer/authReducer";
import { videosReducer , selectedVideoReducer,relatedVideoReducer, searchedVideoReducer, } from "./reducer/videosReducer";
import {channelDeatilReducer} from './reducer/channelReducer';
import {commentReducer} from './reducer/commentReducer';


const store = configureStore({
  reducer: {
    auth: authReducer,
    videos: videosReducer,
    selectedVideos: selectedVideoReducer,
    channelDetails:channelDeatilReducer,
    commentList:commentReducer,
    relatedVideos:relatedVideoReducer,
    searchedVideos:searchedVideoReducer
  },
});

export default store;
