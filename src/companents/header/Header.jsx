import {useState} from "react";
import "./_header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import logo from "../../Images/logo.png";
import {useNavigate, Link} from 'react-router-dom';

function Header({ handleClick }) {
  const [inputValue,setInputValue] =useState('');
const navigate = useNavigate();
  const handleSubmit=(e)=>{
e.preventDefault();
navigate(`search/${inputValue}`);
  };
  return (
    <div className="header">
      <div >
      <FaBars className="header__menu" size={20} onClick={handleClick} />
      <Link to ='/'> <img src={logo} alt="logo" className="header__logo" /></Link>
      </div>
   
     
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search"  value={inputValue} onChange={e=>setInputValue(e.target.value)}/>
        <button type="submit">
          <AiOutlineSearch size={24} />
        </button>
      </form>
      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWy4mGn2H4biENdFN-hIutdbAB9-aXVl08sXAzq_fFY4feDadOGQJH5kHBM1adSIKL2W0&usqp=CAU"
          alt="avatar"
        />
      </div>
    </div>
  );
}

export default Header;
