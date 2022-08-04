import React, { useEffect, useState } from "react";
import "./_video.scss";
import { AiFillEye } from "react-icons/ai";
import moment from "moment";
import numeral from 'numeral';
import request from '../../api'



function Video({videos}) {
  const [durations,setDurations] =useState()
  const [view, setView] = useState()
  
  const {etag, id, snippet:{channelId,channelIcon,channelTitle,defaultLanguage,description,publishedAt, thumbnails:{medium},title}}= videos
  console.log(videos)
 
  //details 
  useEffect(()=>{
    const videoDetails=async()=>{
      const {
        data: { items },
     } = await request('/videos', {
        params:{
          part: "contentDetails, statistics",
          id:id
        },
      })
     
    }
    videoDetails()
  },[id])


  
const seconds= moment.duration(durations).asSeconds()
const duration = moment.utc(seconds * 1000).format('mm:ss')
  return (
    <div className="video">
      <div className="video__top">
        <img
          src={medium.url}
          alt="video"
        />
        <span className="video__top__duration">{duration}</span>
      </div>
      <div className="video__channel">
        <img
          src={channelIcon?.url}
          alt=""
        />
        <div>
      
        <div className="video__title">{title.length >= 25 ? title.slice(0, 20) + "..." : title}</div>
        <p className="channelTitle">{channelTitle.length >= 25 ? title.slice(0, 25) + "..." :channelTitle}</p>
      <div className="video__details">
        <span>
          <AiFillEye />{numeral(view).format('0.a')} Views
        </span>
        <span>•</span>
        <span>{moment(publishedAt).fromNow()} </span>
      </div>
        </div>
       
      </div>
     
    </div>
  );
}

export default Video;
