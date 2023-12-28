import React from "react"
import './footer.css'
import { PiCopyrightFill } from "react-icons/pi";

import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            Copyright <span className="footerIcon "><PiCopyrightFill /></span> 2023 Datta Gangadhar. All right received.
        </footer>
    );
}

export default Footer