/* eslint-disable linebreak-style */
import { useEffect, useState } from 'react';
import './_video.scss';
import moment from 'moment';
import numeral from 'numeral';
import request from '../../api';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';


function Video({videos}) {
    const [durations,setDurations] =useState();
    const [view, setView] = useState();
    const [channelIcon, setChannelIcon]= useState();
    const navigate = useNavigate();
  
    const { id, snippet:{channelId,channelTitle,publishedAt, thumbnails:{medium},title}}= videos; 
 const videoId = id?.videoId || id;
    // video details 
    useEffect(()=>{
        const videoDetails=async()=>{
            const {
                data: { items },
            } = await request('/videos', {
                params:{
                    part: 'contentDetails, statistics',
                    id:id
                },
            });
            setDurations(items[0].contentDetails.duration);
            setView(items[0].statistics.viewCount);
        };
        videoDetails();
    },[id]);

    //channel details
    useEffect(() => {
        const get_channel_icon = async () => {
            const {
                data: { items },
            } = await request('/channels', {
                params: {
                    part: 'snippet',
                    id: channelId,
                },
            });
            setChannelIcon(items[0].snippet.thumbnails.default);
        };
        get_channel_icon();
    }, [channelId]);
  
    // to video:id 
    const handleVideoClick=()=>{
      navigate(`/watch/${videoId}`);
    };

    
    const seconds= moment.duration(durations).asSeconds();
    const duration = moment.utc(seconds * 1000).format('mm:ss');

    return (
        <div className="video" onClick={handleVideoClick}>
            <div className="video__top">
                <LazyLoadImage
                    src={medium?.url}
                    effect='blur'
                />
                <span className="video__top__duration">{duration}</span>
            </div>
            <div className="video__channel">
                <LazyLoadImage
                    src={channelIcon?.url}
                    effect='blur'
                />
                <div className="video__channel__channelDetails">
      
                    <div className="video__title">{title.length >= 25 ? title.slice(0, 20) + '...' : title}</div>
                    <p className="channelTitle">{channelTitle.length >= 25 ? title.slice(0, 25) + '...' :channelTitle}</p>
                    <div className="video__details">
                        <span>
                            {numeral(view).format('0.a')} Views
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
