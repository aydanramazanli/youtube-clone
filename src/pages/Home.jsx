import React from "react";
import Video from "../companents/video/Video";
import Category from "../companents/category/Category";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <>
      <Container>
        <Category />
        <Row>
          {[...new Array(20)].map(() => (
            <Col lg="4" md={4} sm={5}>
              <Video />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;
