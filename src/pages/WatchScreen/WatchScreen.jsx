import React from "react";
import "./_watchScreen.scss";
import { Col, Row } from "react-bootstrap";

import Comments from "../../companents/comments/Comments";
import VideoHorizontal from "../../companents/videoHorizontal/VideoHorizontal";
import VideoData from "../../companents/videoData/VideoData";

const WatchScreen = () => {
  return (
    <Row style={{ padding: "1.5rem" }}>
      <Col lg={8}>
        <div className="watchScreen__player">
          <iframe
            src="https://www.youtube.com/embed/I6nZKZKtnj0"
            frameBorder="0"
            title="video"
            allowFullScreen
            width="100%"
            height="100%"
          ></iframe>
        </div>

        <VideoData />

        <Comments />
      </Col>
      <Col lg={4}>
        {[...Array(10)].map((id) => (
          <VideoHorizontal key={id} />
        ))}
      </Col>
    </Row>
  );
};

export default WatchScreen;
