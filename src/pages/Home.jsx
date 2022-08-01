import React from "react";
import Video from "../companents/video/Video";
import Category from "../companents/category/Category";
import { Container, Row, Col } from "react-bootstrap";


function Home() {
  return (
    <>
      <Container>
        <Category />
        <Row style={{ background:"#000", paddingTop:"0.5rem"}}>
          {[...new Array(20)].map(() => (
            <Col lg={3} md={4}>
              <Video />
            </Col>
          ))}
        </Row>
      </Container>
    
    </>
  );
}

export default Home;
