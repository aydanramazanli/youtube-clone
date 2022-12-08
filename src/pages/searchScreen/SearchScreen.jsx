import {useParams} from 'react-router-dom';
import './_searchScreen.scss';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getSearchingVideos} from '../../redux/slices/video';
import { Container } from "react-bootstrap";
import VideoHorizontal from "../../companents/VideoHorizontal/VideoHorizontal";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function SearchScreen() {
    const {query} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getSearchingVideos(query));
    },[query, dispatch]);

    const {videos, loading} = useSelector(state=>state.searchedVideos);

  return (

    <Container className="search-container">

      {!loading ?(videos?.map(video=><VideoHorizontal  video={video} key={video.id.videoId} SearchScreen/>)): (
          <SkeletonTheme baseColor="#fff" highlightColor="#3c4147">
            <Skeleton width='100%' height='130' count={20}/>
          </SkeletonTheme>
        )}
    </Container>
  );
}
