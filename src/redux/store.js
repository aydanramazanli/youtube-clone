import { configureStore } from '@reduxjs/toolkit';
import {authReducer} from './reducer/authReducer';
import { videosReducer } from './reducer/videosReducer';


const store = configureStore({
    reducer:{
       auth:authReducer,
       videos:videosReducer
    }
})

export default store