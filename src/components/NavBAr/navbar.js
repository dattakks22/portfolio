import React from "react";
import { Link } from "react-scroll";
import { LuMessageSquare } from "react-icons/lu";
import { AiOutlineMenuFold } from "react-icons/ai";
import { FaWindowClose } from "react-icons/fa";
import logo from "../../requrements/Datta_Gangadhar-removebg-preview.png";
import "./navbar.css";

const NavBar = () => {

  const showSidebar = () => {
    const sidebar = document.querySelector('.mobile_nav_items');
    sidebar.style.display = "flex";
  };

  const showClosebar = () => {
    const closebar = document.querySelector(".mobile_nav_items");
    closebar.style.display = 'none'
  }


  return (
    <nav className="navbarcontainer">
      <img className="logo" src={logo} alt="websitelogo" />
      <div className="nav_items">
        <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500} className="nav_link">Home</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-60} duration={500} className="nav_link">About</Link>
        <Link activeClass="active" to="work" spy={true} smooth={true} offset={-60} duration={500} className="nav_link">Portfolio</Link>
        <Link activeClass="active" to="contectPage" spy={true} smooth={true} offset={-60} duration={500} className="nav_link">Clients</Link>
      </div>
      <button className="nav_button" onClick={() => {
        document.getElementById("contect").scrollIntoView({ behaviour: "smooth" })
      }}>
        <div className="navBarIcon"><LuMessageSquare /></div>Contect Me
      </button>

      <AiOutlineMenuFold  className = "menuIcon" onClick={showSidebar}/>
    
      <div className="mobile_nav_items">
      <FaWindowClose className="closeIcon" onClick = {showClosebar} />
        <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500} className="mobileListItem">Home</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-60} duration={500} className="mobileListItem">About</Link>
        <Link activeClass="active" to="work" spy={true} smooth={true} offset={-60} duration={500} className="mobileListItem">Portfolio</Link>
        <Link activeClass="active" to="contectPage" spy={true} smooth={true} offset={-60} duration={500} className="mobileListItem">Clients</Link>
        <Link activeClass="active" to="contect" spy={true} smooth={true} offset={-60} duration={500} className="mobileListItem">Contect</Link>
      
      </div>


    </nav>
  )
}



export default NavBar;

