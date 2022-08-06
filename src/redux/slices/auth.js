import firebase from 'firebase/compat/app';
import auth from '../../firebase';
import {    
    LOAD_PROFILE,
    LOGIN_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOG_OUT,} from '../actionType';


//log in
export const loginAuth = () => async (dispatch) => {
    try {
    //request
        dispatch({ type: LOGIN_REQUEST });

        const provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl');

        const result = await auth.signInWithPopup(provider);


        const accessToken = result.credential.accessToken;
        const profile = {
            name: result.additionalUserInfo.profile.name,
            photoUrl: result.additionalUserInfo.profile.picture,
        };

        sessionStorage.setItem('accessToken', accessToken);
        sessionStorage.setItem('user', JSON.stringify( profile));


        dispatch({ type: LOGIN_SUCCESS, payload: accessToken });
   
        dispatch({ type: LOAD_PROFILE, payload:profile });
    } catch (err) {
        console.log(err.message);
        dispatch({ type: LOGIN_FAIL, payload:err.message });
    }
};


//log out
export const logoutAuth=()=>async (dispatch)=>{
    try{
        await auth.signOut();
        sessionStorage.removeItem('accessToken');
        sessionStorage.removeItem('user');
        dispatch({type:LOG_OUT});
    }
    catch(err){
        console.log('Error signing out', err);
    }
};
