import React from "react"

import './work.css'
import portfolio1 from '../../requrements/1.png'
import portfolio2 from '../../requrements/2.png'
import portfolio3 from '../../requrements/3.png'
import portfolio4 from '../../requrements/4.png'
import portfolio5 from '../../requrements/5.png'
import portfolio6 from '../../requrements/6.png'


const Work= () => {
    return (
        <section id = "work">
                <h2 className = "workTitle">My Portfolio</h2>
                
                <span className="workDesc"> I take pride in paying attention to the smallest details and making sure that my work is pixel perfevt. I am excited to bring my skills and expirence to help business achive their golas and create a strong online presence .</span>
                <div className="projectImg">
                    <img src = {portfolio1} alt = "1" className = "projectlogo" />
                    <img src = {portfolio2} alt = "2" className = "projectlogo" />
                    <img src = {portfolio3} alt = "3" className = "projectlogo" />
                    <img src = {portfolio4} alt = "4" className = "projectlogo" />
                    <img src = {portfolio5} alt = "5" className = "projectlogo" />
                    <img src = {portfolio6} alt = "6" className = "projectlogo" />

                </div>
<button className = "seeMorebtn" >See More</button>        
        </section>
    )
}


export default Work
