import {
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_SUCCESS,
  HOME_VIDEOS_REQUEST,
  SELECTED_VIDEOS_REQUEST,
  SELECTED_VIDEOS_SUCCESS,
  SELECTED_VIDEOS_FAIL,
  RELATED_VIDEOS_REQUEST,
  RELATED_VIDEOS_SUCCESS,
  RELATED_VIDEOS_FAIL,
  SEARCHED_VIDEOS_REQUEST,
  SEARCHED_VIDEOS_SUCCESS,
  SEARCHED_VIDEOS_FAIL,
  CHANNEL_VIDEOS_SUCCESS,
  CHANNEL_VIDEOS_REQUEST,
  CHANNEL_VIDEOS_FAIL
} from "../ActionType";

// Home videos
export const videosReducer = (
  state = {
    videos: [],
    loading: false,
    nextPageToken: null,
    activeCategorie: "All",
  },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case HOME_VIDEOS_SUCCESS:
      return {
        ...state,
        videos:
          state.activeCategorie === payload.category
            ? [...state.videos, ...payload.videos]
            : payload.videos,
        loading: false,
        nextPageToken: payload.nextPageToken,
        activeCategorie: payload.category,
      };
    case HOME_VIDEOS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case HOME_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    default:
      return state;
  }
};
// selected video
export const selectedVideoReducer = (
  state = { loading: true, video: null },
  action
) => {
  const { payload, type } = action;
  switch (type) {
    case SELECTED_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SELECTED_VIDEOS_SUCCESS:
      return {
        ...state,
        video: payload,
        loading: false,
      };
    case SELECTED_VIDEOS_FAIL:
      return {
        ...state,
        video: null,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

// related video
export const relatedVideoReducer = (
  state = { loading: true, videos: [] },
  action
) => {
  const { payload, type } = action;
  switch (type) {
    case  RELATED_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case  RELATED_VIDEOS_SUCCESS:
      return {
        ...state,
        videos: payload,
        loading: false,
      };
    case  RELATED_VIDEOS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

// searched video
export const searchedVideoReducer = (
  state = { loading: true, videos: [] },
  action
) => {
  const { payload, type } = action;
  switch (type) {
    case SEARCHED_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEARCHED_VIDEOS_SUCCESS:
      return {
        ...state,
        videos: payload ,
        loading: false,
      };
    case SEARCHED_VIDEOS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

// channel video 
export const channelVideoReducer = (
  state = {
     loading: true,
     videos: [],
  },
  action
) => {
  const { payload, type } = action;

  switch (type) {
     case CHANNEL_VIDEOS_REQUEST:
        return {
           ...state,
           loading: true,
        };
     case CHANNEL_VIDEOS_SUCCESS:
        return {
           ...state,
           videos: payload,
           loading: false,
        };
     case CHANNEL_VIDEOS_FAIL:
        return {
           ...state,
           loading: false,
           error: payload,
        };

     default:
        return state;
  }
};

// export default videosReducer;
// export const reducer =videosReducer.reducer;
