import { useEffect } from "react";
import "./_watchScreen.scss";
import shortid from "shortid";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Comments from "../../companents/comments/Comments";
import VideoHorizontal from "../../companents/videoHorizontal/VideoHorizontal";
import VideoData from "../../companents/videoData/VideoData";
import { getVideoById } from "../../redux/slices/video";

const WatchScreen = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getVideoById(id));
  }, [dispatch, id]);

  const { video, loading } = useSelector((state) => state.selectedVideos);



  return (
    <Row style={{ padding: "1.5rem" }}>
      <Col lg={8} style={{ padding: 0}}>
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

        <Comments  videoId={id}  totalComments ={video?.statistics?.commentCount}/>
      </Col>
      <Col lg={4}>
        {[...Array(10)].map(() => (
          <VideoHorizontal key={shortid()} />
        ))}
      </Col>
    </Row>
  );
};

export default WatchScreen;
