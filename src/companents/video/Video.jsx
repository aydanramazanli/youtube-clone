import React from 'react'
import './_video.scss'
import { AiFillEye } from 'react-icons/ai'

function Video() {
  return (
    <div className='video'>
    <div className='video__top'>
       <img src="https://i.ytimg.com/vi/WS1S8XKNCIk/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBVGTPHTTAKx5-58kAxzOJF4keq8w" alt='' />
       
       <span className='video__top__duration'>12:06</span>
    </div>
    <div className='video__title'>Guardians Of The Galaxy 3 Trailer: Adam Warlock First Look Breakdown and Marvel Phase 5 Easter Eggs</div>
    <div className='video__details'>
       <span>
          <AiFillEye /> 20k Views •
       </span>
       <span>3 days ago  </span>
    </div>
   
       <div className='video__channel'>
        
<img src="https://yt3.ggpht.com/ytc/AMLnZu8VcQgI4mTUuYB6idER20SqI4vJU4Hq0RnmCLC1QA=s68-c-k-c0x00ffffff-no-rj" alt="" />
          <p>Emergency Awesome</p>
       </div>
    
 </div>
  )
}

export default Video