import {
	HOME_VIDEOS_FAIL,
	HOME_VIDEOS_SUCCESS,
	HOME_VIDEOS_REQUEST,
} from '../actionType';

export const videosReducer = (
	state = {
		videos: [],
		loading: false,
		nextPageToken: null,
		activeCategorie:'All'
	},
	action
) => {
	const { type, payload } = action;
	switch (type) {
		case HOME_VIDEOS_SUCCESS:
			return {
				...state,
				videos: payload.videos,
				loading: false,
				nextPageToken: payload.nextPageToken,
				activeCategorie:payload.category
			};
		case HOME_VIDEOS_FAIL: return{
			...state,
			loading:false,
			error:payload
    
		};
    
		case HOME_VIDEOS_REQUEST:return{
			...state,
			loading:true,
			error:null
    
		};
		default: return state;
 
	}
};

export default videosReducer;
export const reducer =videosReducer.reducer;