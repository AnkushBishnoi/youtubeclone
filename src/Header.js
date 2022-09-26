import React,{useState} from "react";
import "./Header.css";
import Avatar from '@mui/material/Avatar';
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {Link} from 'react-router-dom'
// import Avatar from "@material-ui/core/Avatar"
function Header() {
  const [inputSearch, setinputSearch] = useState("")
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Logo_of_YouTube_%282005-2006%29.svg"
          alt="img"
        />
        </Link>
        
      </div>
      <div className="header__input">
        <input onChange={e=>setinputSearch(e.target.value)} value={inputSearch} placeholder='Search'  type="text" />
        <Link to={`/search/${inputSearch}`}>
        <SearchIcon className="header__inputbutton" />
        </Link>
        
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
      </div>
      {/* <Avatar/> */}
    </div>
  );
}

export default Header;