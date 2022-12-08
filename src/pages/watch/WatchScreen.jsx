import { useEffect } from "react";
import "./_watchScreen.scss";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Comments from "../../companents/Comments/Comments";
import VideoHorizontal from "../../companents/VideoHorizontal/VideoHorizontal";
import VideoData from "../../companents/VideoData/VideoData";
import { getVideoById, relatedVideos } from "../../redux/slices/video";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const WatchScreen = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getVideoById(id));
    dispatch(relatedVideos(id));
  }, [dispatch, id]);

  const { video, loading } = useSelector((state) => state.selectedVideos);
  const { videos, loading: relatedVideosLoading } = useSelector(
    (state) => state.relatedVideos
  );

  return (
    <Row className='watchScreen' >
      <Col lg={8} className='watchScreen__left' >
        <div className="watchScreen__player">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
            title={video?.snippet?.title}
            allowFullScreen
            width="100%"
            height="100%"
          ></iframe>
        </div>

        {!loading ? (
          <VideoData video={video} videoId={id} />
        ) : (
          <h3>Loading...</h3>
        )}

        <Comments
          videoId={id}
          totalComments={video?.statistics?.commentCount}
        />
      </Col>
      <Col lg={4}>
        {!relatedVideosLoading ? (
          videos?.map((video) => (
            <VideoHorizontal video={video} key={video.id.videoId} />
          ))
        ) : (
          <SkeletonTheme baseColor="#fff" highlightColor="#3c4147">
            <Skeleton width='100%' height='130' count={15}/>
          </SkeletonTheme>
        )}
      </Col>
    </Row>
  );
};

export default WatchScreen;
