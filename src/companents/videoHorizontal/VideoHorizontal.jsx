import React from "react";
import "./_videoHorizontal.scss";
import { Col, Row } from "react-bootstrap";
import moment from "moment";
import numeral from "numeral";
//import request from "../../api";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function VideoHorizontal() {
  const seconds = moment.duration(100).asSeconds();
  const duration = moment.utc(seconds * 1000).format("mm:ss");
  return (
    <Row className="py-1 m-1 videoHorizontal align-items-center">
      <Col xs={6} md={6}  className="videoHorizontal__left">
        <LazyLoadImage
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWy4mGn2H4biENdFN-hIutdbAB9-aXVl08sXAzq_fFY4feDadOGQJH5kHBM1adSIKL2W0&usqp=CAU"
          effect="blur"
          className={`videoHorizontal__thumbnail `}
          wrapperClassName="videoHorizontal__thumbnail-wrapper"
        />
        <span className="videoHorizontal__top__duration ">{duration}</span>
      </Col>
      <Col xs={6} md={6}  className="videoHorizontal__right p-0">
        <p className="mb-1 videoHorizontal__title">Galerimizdeki En Gizli Fotoğraflar !</p>
        <div className='my-1 videoHorizontal__channel d-flex align-items-center'>
        {/* <LazyLoadImage
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWy4mGn2H4biENdFN-hIutdbAB9-aXVl08sXAzq_fFY4feDadOGQJH5kHBM1adSIKL2W0&usqp=CAU"
          effect="blur"
        /> */}
        <p>Coder</p>
        </div>
        <div className="videoHorizontal__details">
          {numeral(1000000).format("0.a")} Views •
          {moment("2022-09-04").fromNow()}
        </div>
      
      </Col>
    </Row>
  );
}
