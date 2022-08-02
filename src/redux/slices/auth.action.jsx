import firebase from "firebase/compat/app";
import auth from "../../firebase";
import {    
LOAD_PROFILE,
   LOGIN_FAIL,
   LOGIN_REQUEST,
   LOGIN_SUCCESS,
   LOG_OUT,} from "../actionType";

export const loginAuth = () => async (dispatch) => {
  try {
    //request
    dispatch({ type: LOGIN_REQUEST });

    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);
    console.log(result);

    const accessToken = result.credential.accessToken;
    const profile = {
      name: result.additionalUserInfo.profile.name,
      photoUrl: result.additionalUserInfo.profile.picture,
    };
    console.log(profile);

    dispatch({ type: LOGIN_SUCCESS, payload: accessToken });
   
    dispatch({ type: LOAD_PROFILE, payload:profile });
  } catch (err) {
    console.log(err.message);
    dispatch({ type: LOGIN_FAIL, payload:err.message });
  }
};
