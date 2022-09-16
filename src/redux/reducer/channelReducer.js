import {
  CHANNEL_DETAILS_FAIL,
  CHANNEL_DETAILS_REQUEST,
  CHANNEL_DETAILS_SUCCESS,
} from "../actionType";

export const channelDeatilReducer = (
  state = {
    loading: false,
    channel: {},
  },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case  CHANNEL_DETAILS_SUCCESS:
      return {
        ...state,
       channel:payload,
       loading: false,
      };
    case  CHANNEL_DETAILS_FAIL:
      return {
        ...state,
        channel:null,
        loading: false,
        error: payload,
      };

    case CHANNEL_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
   
    default:
      return state;
  }
};



export default channelDeatilReducer;
export const reducer = channelDeatilReducer.reducer;
