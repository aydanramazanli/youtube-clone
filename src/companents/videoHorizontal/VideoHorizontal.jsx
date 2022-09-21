import { useEffect, useState } from "react";
import "./_videoHorizontal.scss";
import { Col, Row } from "react-bootstrap";
import moment from "moment";
import numeral from "numeral";
import request from "../../api";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from 'react-router-dom';

export default function VideoHorizontal({ video }) {
  const [durations, setDurations] = useState();
  const [view, setView] = useState();
  const [channelIcon, setChannelIcon] = useState();
  const navigate = useNavigate();
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      thumbnails: { medium },
    },
  } = video;

  // video details
  useEffect(() => {
    const videoDetails = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails, statistics",
          id: id.videoId,
        },
      });
      setDurations(items[0].contentDetails.duration);
      setView(items[0].statistics.viewCount);
    };
    videoDetails();
  }, [id]);

  //channel details
  useEffect(() => {
    const get_channel_icon = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default);
    };
    get_channel_icon();
  }, [channelId]);

  // to video:id
  const handleVideoClick = () => {
    navigate(`/watch/${id.videoId}`);
  };
  const seconds = moment.duration(durations).asSeconds();
  const duration = moment.utc(seconds * 1000).format("mm:ss");
  return (
    <Row className="videoHorizontal align-items-center" onClick={handleVideoClick}>
      <Col xs={6} md={6} className="videoHorizontal__left">
        <LazyLoadImage
          src={medium.url}
          effect="blur"
          className={`videoHorizontal__thumbnail `}
          wrapperClassName="videoHorizontal__thumbnail-wrapper"
        />
        <span className="videoHorizontal__top__duration ">{duration}</span>
      </Col>
      <Col xs={6} md={6} className="videoHorizontal__right p-0">
        <p className=" videoHorizontal__title">{title}</p>
        <div className="videoHorizontal__channel d-flex align-items-center">
          {/* <LazyLoadImage
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWy4mGn2H4biENdFN-hIutdbAB9-aXVl08sXAzq_fFY4feDadOGQJH5kHBM1adSIKL2W0&usqp=CAU"
          effect="blur"
        /> */}
          <p>{channelTitle}</p>
        </div>
        <div className="videoHorizontal__details">
          {numeral(view).format("0.a")} Views •{moment(publishedAt).fromNow()}
        </div>
      </Col>
    </Row>
  );
}
