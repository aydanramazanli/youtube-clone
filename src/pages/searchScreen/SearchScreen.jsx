import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getSearchingVideos} from '../../redux/slices/video';
import { Container } from "react-bootstrap";
import VideoHorizontal from "../../companents/videoHorizontal/VideoHorizontal";

export default function SearchScreen() {
  console.log(getSearchingVideos());
    const {query} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getSearchingVideos(query));
    },[query, dispatch]);

    const {videos, loading} = useSelector(state=>state.searchedVideos);

  return (
    <Container>
 
      {!loading ?(videos?.map(video=><VideoHorizontal  video={video} key={video.id.videoId}/>)):<h1>Loading...</h1>}
    </Container>
  );
}
