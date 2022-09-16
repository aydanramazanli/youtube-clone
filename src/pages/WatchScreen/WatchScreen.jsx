import { useEffect } from "react";
import "./_watchScreen.scss";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Comments from "../../companents/comments/Comments";
import VideoHorizontal from "../../companents/videoHorizontal/VideoHorizontal";
import VideoData from "../../companents/videoData/VideoData";
import { getVideoById, relatedVideos } from "../../redux/slices/video";

const WatchScreen = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getVideoById(id));
    dispatch(relatedVideos(id));
  }, [dispatch, id]);

  const { video, loading } = useSelector((state) => state.selectedVideos);
  const { videos, loading:relatedVideosLoading } = useSelector(
    (state) => state.relatedVideos
  );

  return (
    <Row style={{ padding: "1.5rem" }}>
      <Col lg={8} style={{ padding: 0 }}>
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
        {!relatedVideosLoading && videos?.map((video) => (
          <VideoHorizontal video={video} key={video.id.videoId} />
        ))}
      </Col>
    </Row>
  );
};

export default WatchScreen;
