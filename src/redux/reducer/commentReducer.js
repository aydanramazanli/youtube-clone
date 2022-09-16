import {
    COMMENT_LIST_FAIL,
    COMMENT_LIST_REQUEST,
    COMMENT_LIST_SUCCESS,
  } from "../actionType";
  
  export const commentReducer = (
    state = {
      loading: false,
      comments:null,
    },
    action
  ) => {
    const { type, payload } = action;
    switch (type) {
      case  COMMENT_LIST_SUCCESS:
        return {
          ...state,
         comments:payload,
         loading: false,
        };
      case COMMENT_LIST_FAIL:
        return {
          ...state,
          loading: false,
          error: payload,
        };
  
      case COMMENT_LIST_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
     
      default:
        return state;
    }
  };
  
  
  
  export default commentReducer;
  export const reducer = commentReducer.reducer;
  