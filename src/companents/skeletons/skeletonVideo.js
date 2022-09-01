import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const SkeletonVideo = () => {
   return (
      <div style={{ width: '100%', margin: '0.5rem 0', background:'#343a40', height:'150px'}}>
         <SkeletonTheme baseColor='#fff' highlightColor='#3c4147'>
            <Skeleton />
           
         </SkeletonTheme>
      </div>
   );
};

export default SkeletonVideo;