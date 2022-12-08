import {
  CHANNEL_DETAILS_FAIL,
  CHANNEL_DETAILS_REQUEST,
  CHANNEL_DETAILS_SUCCESS,

} from "../ActionType";
import req from "../../api";
export const getChannelDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: CHANNEL_DETAILS_REQUEST,
    });

    const { data } = await req("/channels", {
      params: {
        part: "snippet,statistics,contentDetails",
        id,
      },
    });
    dispatch({
      type: CHANNEL_DETAILS_SUCCESS,
      payload: data.items[0],
    });
  } catch (error) {
    console.log(error.response.data);
    dispatch({
      type: CHANNEL_DETAILS_FAIL,
      payload: error.response.data,
    });
  }
};

