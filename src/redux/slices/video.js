import {
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
  HOME_VIDEOS_FAIL,
  SELECTED_VIDEOS_REQUEST,
  SELECTED_VIDEOS_SUCCESS,
  SELECTED_VIDEOS_FAIL,
  RELATED_VIDEOS_REQUEST,
  RELATED_VIDEOS_SUCCESS,
  RELATED_VIDEOS_FAIL,
  SEARCHED_VIDEOS_REQUEST,
  SEARCHED_VIDEOS_SUCCESS,
  SEARCHED_VIDEOS_FAIL,

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
        regionCode: "US",
        maxResults: 10,
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
        maxResults: 20,
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

//related videos
export const relatedVideos = (id) => async (dispatch) => {
  try {
    dispatch({ type: RELATED_VIDEOS_REQUEST });

    const { data } = await req("/search", {
      params: {
        part: "snippet",
        relatedToVideoId: id,
        maxResults:10,
        type:'video'
      },

    });
    dispatch({ type: RELATED_VIDEOS_SUCCESS, payload:data.items});
  } catch (err) {
    console.log(err.response.data.message);
    dispatch({ type: RELATED_VIDEOS_FAIL, payload: err.response.data.message});
  }
};

//categories
export const getSearchingVideos = keyword => async dispatch => {
  try {
    dispatch({ type: SEARCHED_VIDEOS_REQUEST });
    const { data } = await req(`/search`, {
      params: {
        part: "snippet",
        maxResults: 20,
        q: keyword,
        type: "video,channel",
      },
    });

    dispatch({
      type: SEARCHED_VIDEOS_SUCCESS,
      payload:  data.items
      
    });
  } catch (err) {
    console.log(err);
    dispatch({ type: SEARCHED_VIDEOS_FAIL, payload: err.message });
  }
};

