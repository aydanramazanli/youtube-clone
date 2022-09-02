import React from 'react';
import './_videoData.scss';
import moment from 'moment';
import numeral from 'numeral';
import { MdThumbUp, MdThumbDown } from 'react-icons/md';
import ShowMoreText from 'react-show-more-text';

function videoData() {
  return (
    <div className="videoData ">
      <div className="videoData__top py-2">
        <h4>TITle</h4>
        <div className="d-flex justify-content-between align-items-center py-1">
          <span>
            {numeral(10000).format('0.a')} view
            {moment('2022-02-09').fromNow}
          </span>
          <div>
          <span className="mr-3">
            <MdThumbUp size={26} /> {numeral(10000).format('0.a')}
          </span>
          <span className="mr-3">
            <MdThumbDown size={26} /> {numeral(10000).format('0.a')}
          </span>
        </div>
        </div>
       
      </div>
      <div className="videoData__channel py-3 my-2 d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <img src="https://i.pinimg.com/736x/65/79/aa/6579aaaedde20287d08c896dbc8a2969.jpg" alt="video" className="mr-3 rounded-circle" />
      
            <span>titles</span>
            <span>
              {numeral(1000).format('0.a')}
              Subscribers
            </span>
        
        </div>
        <button
               className='p-2 m-2 border-0 btn btn-gray'>
              Subscribed
            </button>
      </div>
      <div className="videoData__description">
      <ShowMoreText
               lines={3}
               more='SHOW MORE'
               less='SHOW LESS'
               anchorClass='showMoreText'
               expanded={false}>
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius placeat adipisci autem non?
            </ShowMoreText>
      
      </div>
    </div>
  );
}

export default videoData;
