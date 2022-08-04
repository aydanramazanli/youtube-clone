import {
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
  HOME_VIDEOS_FAIL,
} from "../actionType";
import req from "../../api";


const baseUrl = "https://youtube.googleapis.com/youtube/v3";

export const getHomeVideos = async (dispatch) => {
  try {
    dispatch({ type: HOME_VIDEOS_REQUEST });
    const { data } = await req(`${baseUrl}/videos`, {
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        regionCode: "TR",
        maxResults: 40,
      },
    });

    dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
      },
    });

   
  } catch (err) {
     console.log(err);
    dispatch({ type: HOME_VIDEOS_FAIL, payload: err.message });
  }
};

getHomeVideos();
