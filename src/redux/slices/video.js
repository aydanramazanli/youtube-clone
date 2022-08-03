import { HOME_VIDEOS_REQUEST } from "../actionType";
import req from "../../api";


 const baseUrl='https://youtube.googleapis.com/youtube/v3'

export const getHomeVideos = async(dispatch)  => {
  try {
    dispatch({ type: HOME_VIDEOS_REQUEST });
    const request =await  req(`${baseUrl}/videos`, {
      params: {
        part: 'snippet,contentDetails,statistics',
        chart: 'mostPopular',
        regionCode: 'US',
        maxResults: 20,
     
      },
    });
 console.log(request)
  } catch (err) {
 
  }
}
 


getHomeVideos ()
