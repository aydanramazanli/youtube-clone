import React from 'react'
import "./_sidebar.scss";

import {
    MdSubscriptions,
    MdExitToApp,
    MdThumbUp,
    MdHistory,
    MdLibraryBooks,
    MdHome,
    MdSentimentDissatisfied,
 } from "react-icons/md"

// change style and icons


function Sidebar() {
  
  return (
    <nav className="sidebar">
        <li className="list">
            <MdHome size={23} />
            <span>Home</span>
         </li>
         <li className="list">
            <MdSubscriptions size={23} />
            <span>Subscriptions</span>
         </li>

         <li className="list">
            <MdThumbUp size={23} />
            <span>Liked Video</span>
         </li>

         <li className="list">
            <MdHistory size={23} />
            <span>History</span>
         </li>

         <li className="list">
            <MdLibraryBooks size={23} />
            <span>Library</span>
         </li>
         <li className="list">
            <MdSentimentDissatisfied size={23} />
            <span>Your videos</span>
         </li>
        
         <hr />

         <li className="list">
            <MdExitToApp size={23} />
            <span>Log Out</span>
         </li>

         <hr />
    </nav>
  )
}

export default Sidebar