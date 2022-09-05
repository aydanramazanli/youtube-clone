import { useState } from "react";
import "./_videoData.scss";
import numeral from "numeral";
import { MdThumbUp, MdThumbDown } from "react-icons/md";

function videoData() {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="videoData ">
      <div className="videoData__top py-2">
        <h4>Title</h4>
        <div className="d-flex justify-content-between align-items-center py-1">
          <span>{numeral(10000).format("0.a")} view</span>
          <div>
            <span className="likeIcons">
              <MdThumbUp size={26} /> {numeral(10000).format("0.a")}
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
            src="https://i.pinimg.com/736x/65/79/aa/6579aaaedde20287d08c896dbc8a2969.jpg"
            alt="video"
            className="mr-3 rounded-circle"
          />
          <div className="subscribes">

            <span>titles</span>
            <span style={{ color: "gray"}}>
              {numeral(1000).format("0.a")} Subscribers
            </span>
          </div>
        </div>
        <button className="p-2 m-2 border-0 btn btn-gray">Subscribed</button>
      </div>
      <div className="videoData__description">
        <h4
          onClick={() => {
            setReadMore(!readMore);
          }}
        >
          {readMore ? "Read Less" : "Read Description"}
        </h4>
        {readMore && (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            consectetur neque ab porro quasi culpa nulla rerum quis minus
            voluptatibus sed hic ad quo sint, libero commodi officia aliquam!
            Maxime.
          </p>
        )}
      </div>
    </div>
  );
}

export default videoData;
