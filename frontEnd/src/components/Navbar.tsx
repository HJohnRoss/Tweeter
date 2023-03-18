import React from "react";
import twitterLogo from "../assets/twitter-logo.png"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container columns-1">
      <ul>
        <li><Link to="/"><img className="inline-block" src={twitterLogo} alt="Twitter Logo" /></Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="#">Explore</Link></li>
        <li><Link to="#">Notifications</Link></li>
        <li><Link to="#">Messages</Link></li>
        <li><Link to="#">Bookmarks</Link></li>
        <li><Link to="#">Profile</Link></li>
        <li><button>More</button></li>
        <li><button className="my-4">Tweet</button></li>
      </ul>

    </nav>
  )
}

export default Navbar