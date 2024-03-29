import {
	LOAD_PROFILE,
	LOGIN_FAIL,
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOG_OUT,
} from '../actionType';

const state={
	accessToken:sessionStorage.getItem('accessToken')? sessionStorage.getItem('accessToken'):null,
	user:sessionStorage.getItem('user')? JSON.parse(sessionStorage.getItem('user')) :null,
	loading:false
};


export const authReducer = (prevState = state, action) => {
	const { type, payload } = action;
 
	switch (type) {
		case LOGIN_REQUEST:
			return {
				...prevState,
				loading: true,
			};
 
		case LOGIN_SUCCESS:
			return {
				...prevState,
				accessToken: payload,
				loading: false,
			};
		case LOGIN_FAIL:
			return {
				...prevState,
				accessToken: null,
				loading: false,
				error: payload,
			};
		case LOAD_PROFILE:
			return {
				...prevState,
				user: payload,
			};
 
		case LOG_OUT:
			return {
				...prevState,
				accessToken: null,
				user: null,
			};
		default:
			return prevState;
	}
};

export default authReducer;
export const reducer =authReducer.reducer;
    
   