import React from "react"

import './home.css'
import profileImage from "../../requrements/DattaProfie.png"
import {Link} from "react-scroll"
import { FaSuitcase } from "react-icons/fa";

const Home = () => {
    return (
        <section id="home">
            <div className="homeContent">
                <span className="hello">Hello,</span> 
                <span className="name">I'm <span className="nametile">Datta Gangadhar</span> <br /> <span className="reactcolor">Front-End Developer</span></span>
                <p className="description">I am Skilled Front End Developer by Using React JS with expirence in creating visually appealing <br/>and user -friendly websites</p>
                <Link ><button className="btn"><div className="icon"><FaSuitcase  /></div> <div className="buttonname">Hire Me</div> </button></Link>
            </div>
            <img src={profileImage} alt="profilepic" className="profilPick" />
        </section>
    )
}


export default Home;