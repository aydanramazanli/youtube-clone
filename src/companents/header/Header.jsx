/* eslint-disable linebreak-style */
import React from 'react';
import './_header.scss';
import { FaBars } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdNotifications, MdApps } from 'react-icons/md';
import logo from '../../images/youtube-logo-png-31812.png';

function Header({ handleClick }) {
    return (
        <div className="header">
            <FaBars className="header__menu" size={26} onClick={handleClick} />
            <img src={logo} alt="" className="header__logo" />
            <form>
                <input type="text" placeholder="Search" />
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
