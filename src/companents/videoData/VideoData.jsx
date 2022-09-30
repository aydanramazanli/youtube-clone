import { useState, useEffect } from "react";
import "./_videoData.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getChannelDetails,
} from "../../redux/slices/channel";
import numeral from "numeral";
import moment from "moment";
import { MdThumbUp, MdThumbDown } from "react-icons/md";

function videoData({ video: { snippet, statistics } }) {
  const [readMore, setReadMore] = useState(true);
  const [subscribes, setSubscribes] = useState(false);
  const { channelId, channelTitle, description, publishedAt, title } = snippet;
  const { likeCount, viewCount } = statistics;




  const dispatch = useDispatch();
  const { snippet: channelSnippet, statistics: channelStatistics } =
    useSelector((state) => state.channelDetails.channel);


  useEffect(() => {
    dispatch(getChannelDetails(channelId));
  }, [dispatch, channelId]);

  return (
    <div className="videoData ">
      <div className="videoData__top ">
        <h4>{title}</h4>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <span style={{ marginRight: "10px" }}>
              {numeral(viewCount).format("0.a")} view
            </span>
            <span>{moment(publishedAt).fromNow()}</span>
          </div>

          <div>
            <span className="likeIcons">
              <MdThumbUp size={26} /> {numeral(likeCount).format("0.a")}
            </span>
            <span className="likeIcons">
              <MdThumbDown size={26} /> {numeral(10000).format("0.a")}
            </span>
          </div>
        </div>
      </div>
      <div className="videoData__channel py-3 my-2 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img
            src={channelSnippet?.thumbnails?.default?.url}
            alt="video"
            className="mr-3 rounded-circle"
          />
          <div className="subscribes">
            <span>{channelTitle}</span>
            <span style={{ color: "gray" }}>
              {numeral(channelStatistics?.subscriberCount).format("0.a")}
                 <span> Subscribers</span>
            </span>
          </div>
        </div>
        <button onClick={()=>setSubscribes(!subscribes)} className={`p-2 m-2 border-0 ${subscribes? 'btn-gray' : 'btn-red'}`}>{subscribes? 'subscribed' : 'suBscribe'}</button>
      </div>
      <div className="videoData__description">
        <h4
          onClick={() => {
            setReadMore(!readMore);
          }}
        >
          {readMore ? "Read Less" : "Read More"}
        </h4>
        {readMore && <p>{description}</p>}
      </div>
    </div>
  );
}

export default videoData;
