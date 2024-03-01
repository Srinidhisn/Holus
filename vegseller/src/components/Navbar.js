import React,{ useState } from "react";
import Logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";
import Icon from "../assets/icon.png";
function Navbar() {

    const [openLinks, setOpenLinks] = useState(false);
    const toggleNavbar = () =>
    {
        setOpenLinks(openLinks);

    };
  return (
    <div className="navbar">
        <div className="leftSide" id={openLinks ? "open":"close"}>
        <a href="#" id="bar" class="navbar-brand"><b>Holus</b></a>
            <img src={Logo} class="rounded-circle" alt="Rounded Image" height="63px" width="15px"/>
           
           {/* search bar */} 
          {/* <div class ="nav-search-field ">
            <label for="twotabsearchtextbox" display= "none">Holus.in</label>
            <input type="text" id="twotabsearchtextbox" value="Holus" name="field-keywords" autocomplete="off" placeholder="search amazon.in" class="nav-input nav-progressive-attribute" dir="auto" tabIndex={0} aria-label="Search Amazon.in" spellchech="false"></input>
          </div>
          <div class="nav-right">
            <div class="nav-search-submit nav-sprite"></div>
          </div> */}
            <div className="hiddenLinks">
              <Link to="/">Home</Link>
              <Link to="/Shopping">Menu</Link>
              <Link to="/About">About</Link>
              <Link to="/Contact">Contact</Link>
              {/* <Link to="/Signin">Signin</Link> */}
              <Link to="/Signup">Signup/Login</Link>
              {/* <Link to="/Cart"><img src={Icon}/></Link> */}
            </div>

        </div>

        
        <div className="rightSide">
      
            <Link to="/">Home</Link>
            <Link to="/Shopping">Menu</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
            {/* <Link to="/Signin">Signin</Link> */}
            <Link to="/Signup">Signup/Login</Link>
            {/* <Link to="/cart">Cart</Link> */}
            {/* <Link to="/Cart"><img src={Icon} width="20px" height="20px"/></Link> */}
            <button onClick={toggleNavbar}>
                <ReorderIcon />
            </button>
        </div>
    </div>
  )
}

export default Navbar
