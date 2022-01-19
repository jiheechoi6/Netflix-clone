import './navbar.scss'
import Search from "@material-ui/icons/Search"
import Notifications from "@material-ui/icons/Notifications"
import ArrowDropDown from "@material-ui/icons/ArrowDropDown"
import logo from './logo.png'
import profile from './profile.png'

const Navbar = () => {
  return (
  <div className="navbar">
      <div className="container">
          <div className="left">
            <img src={logo} alt={logo} className="logo"/>
            <span>Homepage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My List</span>
          </div>
          <div className="right">
            <Search className="icon"/>
            <span>Kids</span>
            <Notifications className="icon"/>
            <img src={profile} alt=""/>

            <div className="profile">
                <ArrowDropDown className="icon"/>
                <div className="options">
                    <span>Settings</span>
                    <span>Logout</span>
                </div>
            </div>
          </div>
      </div>
  </div>);
};

export default Navbar;
