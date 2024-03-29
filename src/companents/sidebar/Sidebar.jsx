
import { useDispatch } from "react-redux";
import "./_sidebar.scss";

import { logoutAuth } from "../../Redux/slices/auth";
//import { FaBars } from "react-icons/fa";
import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdVideoLibrary,
  MdExplore,
  MdAccessTime,
  MdNewLabel,
} from "react-icons/md";
//import logo from "../../images/logo.png";

function Sidebar() {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logoutAuth());
  };
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
        <MdHistory size={23} />
        <span>History</span>
      </li>
      <li className="list">
        <MdThumbUp size={23} />
        <span>Liked Video</span>
      </li>
      <li className="list">
        <MdExplore size={23} />
        <span>Explore</span>
      </li>

      <li className="list">
        <MdNewLabel size={23} />
        <span>Shorts</span>
      </li>
      <li className="list">
        <MdAccessTime size={23} />
        <span>Watch Later</span>
      </li>

      <li className="list">
        <MdLibraryBooks size={23} />
        <span>Library</span>
      </li>
      <li className="list">
        <MdVideoLibrary size={23} />
        <span>Your videos</span>
      </li>

      <hr />

      <li className="list" onClick={handleLogOut}>
        <MdExitToApp size={23} />
        <span>Log Out</span>
      </li>

      <hr />
    </nav>
  );
}

export default Sidebar;
