import React, { useEffect } from "react";
import Video from "../companents/video/Video";
import Category from "../companents/category/Category";
import uniqid from "uniqid";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getHomeVideos } from "../redux/slices/video";

function Home() {
  const dispatch = useDispatch();
  // console.log(getHomeVideos());
  useEffect(() => {
    dispatch(getHomeVideos);
  }, [dispatch]);
  return (
    <>
      <Container>
        <Category />
        <Row style={{ background: "#000", paddingTop: "0.5rem" }}>
          {[...new Array(20)].map(() => (
            <Col key={uniqid()} lg={3} md={4}>
              <Video />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;
