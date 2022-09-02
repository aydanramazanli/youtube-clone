import React from 'react';
import './_watchScreen.scss';
import { Col, Row } from 'react-bootstrap';
//import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
//import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import Comments from '../../companents/comments/Comments';
import VideoHorizontal from '../../companents/videoHorizontal/VideoHorizontal';
import VideoData from '../../companents/videoData/VideoData';
//import { Helmet } from 'react-helmet';
// import {
//    getRelatedVideos,
//    getVideoById,
// } from '../../redux/actions/videos.action';


const WatchScreen = () => {
//    const { id } = useParams();

//    const dispatch = useDispatch();

//    useEffect(() => {
//       dispatch(getVideoById(id));

//       dispatch(getRelatedVideos(id));
//    }, [dispatch, id]);

//    const { videos, loading} = useSelector(
//       state => state.relatedVideos
//    );

//    const { video} = useSelector(state => state.selectedVideo);

   return (
      <Row>
         {/* <Helmet>
            <title>{video?.snippet?.title}</title>
         </Helmet> */}
         <Col lg={8}>
            <div className='watchScreen__player'>
               <iframe
                  src='https://www.youtube.com/embed/I6nZKZKtnj0'
                  frameBorder='0'
                  title="video"
                  allowFullScreen
                  width='100%'
                  height='100%'></iframe>
            </div>
          
               <VideoData  />
           

            <Comments
        
              
            />
         </Col>
         <Col lg={4}>
         {   [...Array(10)].map((id)=><VideoHorizontal key={id}/>)}
            {/* {!loading ? (
               videos
                  ?.filter(video => video.snippet)
                  .map(video => (
                     <VideoHorizontal video={video} key={video.id.videoId} />
                  ))
            ) : (
               <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
                  <Skeleton width='100%' height='130px' count={15} />
               </SkeletonTheme>
            )} */}
         </Col>
      </Row>
   );
};

export default WatchScreen;