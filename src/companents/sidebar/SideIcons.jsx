import "./_sideIcon.scss";

import {
    MdSubscriptions,
    MdThumbUp,
    MdHistory,
    MdLibraryBooks,
    MdHome,
 } from "react-icons/md";

function SideIcons() {
  return (
    <nav className="iconBar">
    <li  className="iconList">
        <MdHome size={23} />
        <h3 >Home</h3>
     </li>
     <li className="iconList">
        <MdSubscriptions size={23} />
        <h3 >Subscriptions</h3>
     </li>

     <li className="iconList">
        <MdThumbUp size={23} />
        <h3 >Liked Video</h3>
     </li>

     <li className="iconList">
        <MdHistory size={23} />
        <h3 >History</h3>
     </li>

     <li className="iconList">
        <MdLibraryBooks size={23} />
        <h3 >Library</h3>
     </li>
     <hr />
</nav>
  );
}

export default SideIcons;