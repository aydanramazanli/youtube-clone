import React, { useEffect } from 'react';
import Video from '../Companents/Video/Video';
import Category from '../Companents/Category/Category';
import uniqid from 'uniqid';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getHomeVideos } from '../Redux/slices/video';
import InfiniteScroll from 'react-infinite-scroll-component';
import SkeletonVideo from '../Companents/Skeletons/skeletonVideo';

function Home() {
  const dispatch = useDispatch();

  const { videos, activeCategorie, loading } = useSelector(
    (state) => state.videos,
  );
  const fetchData = () => {
    if (activeCategorie === 'All') {
      dispatch(getHomeVideos());
    } else {
      dispatch(getHomeVideos(activeCategorie));
    }
    dispatch(getHomeVideos());
  };

  useEffect(() => {
    dispatch(getHomeVideos);
  }, [dispatch]);
  return (
    <>
      <Container style={{marginRight:"0"}}>
        <Category />
        <InfiniteScroll
          dataLength={videos.length}
          next={fetchData}
          hasMore={true}
        >
          <Row style={{ paddingTop: '0.5rem', width: '100%' , margin:0,background: '#080808af'}}>
            {!loading
              ? videos.map((el) => (
                  <Col key={uniqid()} lg={3} md={4}>
                    <Video videos={el} key={videos.id} />
                  </Col>
                ))
              : [...Array(20)].map(() => (
                  <Col lg={3} md={4} key={uniqid()} >
                    <SkeletonVideo/>
                  </Col>
                ))}
          </Row>
        </InfiniteScroll>
      </Container>
    </>
  );
}

export default Home;
