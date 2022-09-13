import {
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
  HOME_VIDEOS_FAIL,
  SELECTED_VIDEOS_REQUEST,
  SELECTED_VIDEOS_SUCCESS,
  SELECTED_VIDEOS_FAIL,
} from "../actionType";
import req from "../../api";

const baseUrl = "https://youtube.googleapis.com/youtube/v3";
//videos
export const getHomeVideos = async (dispatch) => {
  try {
    dispatch({ type: HOME_VIDEOS_REQUEST });
    const { data } = await req(`${baseUrl}/videos`, {
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        regionCode: "TR",
        maxResults: 10,
        // pageToken: getState().homeVideos.nextPageToken,
      },
    });

    dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: "All",
      },
    });
  } catch (err) {
    console.log(err);
    dispatch({ type: HOME_VIDEOS_FAIL, payload: err.message });
  }
};

//categories
export const getCategories = (keyword) => async (dispatch) => {
  try {
    dispatch({ type: HOME_VIDEOS_REQUEST });
    const { data } = await req(`${baseUrl}/search`, {
      params: {
        part: "snippet",
        maxResults: 40,
        //pageToken: getState().homeVideos.nextPageToken,
        q: keyword,
        type: "video",
      },
    });

    dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: keyword,
      },
    });
  } catch (err) {
    console.log(err);
    dispatch({ type: HOME_VIDEOS_FAIL, payload: err.message });
  }
};

//video by id
export const getVideoById = (id) => async (dispatch) => {
  try {
    dispatch({ type: SELECTED_VIDEOS_REQUEST });

    const { data } = await req("/videos", {
      params: {
        part: "snippet, statistics",
        id: id,
      },
    });
    dispatch({ type: SELECTED_VIDEOS_SUCCESS, payload:data.items[0] });
  } catch (err) {
    console.log(err.message);
    dispatch({ type: SELECTED_VIDEOS_FAIL, payload: err.message});
  }
};
