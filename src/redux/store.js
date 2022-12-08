import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Reducer/authReducer";
import { videosReducer , selectedVideoReducer,relatedVideoReducer, searchedVideoReducer, } from "./Reducer/videosReducer";
import {channelDeatilReducer} from './Reducer/channelReducer';
import {commentReducer} from './Reducer/commentReducer';


const store = configureStore({
  reducer: {
    auth: authReducer,
    videos: videosReducer,
    selectedVideos: selectedVideoReducer,
    channelDetails:channelDeatilReducer,
    commentList:commentReducer,
    relatedVideos:relatedVideoReducer,
    searchedVideos:searchedVideoReducer,
  },
});

export default store;
