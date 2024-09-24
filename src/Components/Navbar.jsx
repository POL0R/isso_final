import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineLeaderboard } from "react-icons/md";
import { MdScoreboard } from "react-icons/md";
import { GiPodium } from "react-icons/gi";

const Navbar = () => {
    return (
        <div className="navbarHolder">
            <div className="firsterNavbar">
            <div className="displayNavbarFlex">
            <a href="https://jpischool.com"><img className="topLogo" src="isso.png"/></a>
            <img className="topLogo mainer" src="jpisMain.png"/>
            </div>
            <Link to="/scoreboard">
                <button className="buttonNavbar" ><GiPodium  className="MdScoreboard"/><span className="spannerNavbar">All Matches</span></button>
            </Link>
            <Link to="/leaderboard">
                <button className="buttonNavbar"><MdScoreboard className="MdScoreboard"/><span className="spannerNavbar">Points Table</span></button>
            </Link>
            
            </div>
            <div className="lasterNavbar">
            <div></div><h5 className="lastNavbar">&copy; JPIS 2024 - ISSO U19</h5>
            </div>
        </div>
    )
}

export default Navbar;
