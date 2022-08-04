import React, { useEffect } from "react";
import Video from "../companents/video/Video";
import Category from "../companents/category/Category";
import uniqid from "uniqid";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getHomeVideos } from "../redux/slices/video";

function Home() {
  const dispatch = useDispatch();

const {videos, loading}= useSelector(state=>state.videos)

  useEffect(() => {
    dispatch(getHomeVideos);
  }, [dispatch]);
  return (
    <>
      <Container>
        <Category />
        <Row style={{ background: "#000", paddingTop: "0.5rem" }}>
          {videos.map((el) => (
            <Col key={uniqid()} lg={3} md={4}>
              <Video videos={el} key={videos.id} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;
