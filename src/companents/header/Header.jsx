/* eslint-disable linebreak-style */
import {useState} from "react";
import "./_header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import logo from "../../images/logo.png";
import {useNavigate} from 'react-router-dom';

function Header({ handleClick }) {
  const [inputValue,setInputValue] =useState('');
const navigate = useNavigate();
  const handleSubmit=(e)=>{
e.preventDefault();
navigate(`search/${inputValue}`);
  };
  return (
    <div className="header">
      <FaBars className="header__menu" size={26} onClick={handleClick} />
      <img src={logo} alt="" className="header__logo" />
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search"  value={inputValue} onChange={e=>setInputValue(e.target.value)}/>
        <button type="submit">
          <AiOutlineSearch size={22} />
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
