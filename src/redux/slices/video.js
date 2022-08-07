import {
	HOME_VIDEOS_REQUEST,
	HOME_VIDEOS_SUCCESS,
	HOME_VIDEOS_FAIL,
} from '../actionType';
import req from '../../api';

const baseUrl = 'https://youtube.googleapis.com/youtube/v3';
//videos
export const getHomeVideos = async (dispatch) => {
	try {
		dispatch({ type: HOME_VIDEOS_REQUEST });
		const { data } = await req(`${baseUrl}/videos`, {
			params: {
				part: 'snippet,contentDetails,statistics',
				chart: 'mostPopular',
				regionCode: 'TR',
				maxResults: 40,
				// pageToken: getState().homeVideos.nextPageToken,
			},
		});

		dispatch({
			type: HOME_VIDEOS_SUCCESS,
			payload: {
				videos: data.items,
				nextPageToken: data.nextPageToken,
				category: 'All',
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
				part: 'snippet',
				maxResults: 40,
				//pageToken: getState().homeVideos.nextPageToken,
				q: keyword,
				type: 'video',
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
