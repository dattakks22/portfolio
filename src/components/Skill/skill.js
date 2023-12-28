import React from "react"
import './skill.css'

import Ui from '../../requrements/ui-design.png';
import Web from '../../requrements/website-design.png';
import Apps from '../../requrements/app-design.png';



const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle" >What I Do </span>
            <span className="skillDec">I am Skilled and possionate web designer with experience in crating visually appending and user-friendly website.
                I have a strong understanding of design and a keen eye detail. i am proficient in HTML,Css & Java Script and as well Fround End Developer By using React js</span>


<div className="skillbars">

<div className="skillbar">
                <img src={Ui} alt="uiUx" className="skillLogo" />
                <div className="skillsContent">
                    <h2 className="skillsHeading">UI/UX design</h2>
                    <p className="skillsPara">UI/UX Design: Proficient in creating visually appealing and intuitive user interfaces with a strong focus on user experience. Skilled in the end-to-end design process, from ideation to prototyping, and experienced in using industry-standard tools.

                    </p>
                </div>
            </div>

            <div className="skillbar">
                <img src={Web} alt="uiUx" className="skillLogo" />
                <div className="skillsContent">
                    <h2 className="skillsHeading">Website design</h2>
                    <p className="skillsPara">
Proficient in crafting dynamic and responsive websites with a strong emphasis on the front end, I am skilled in utilizing React.js to create efficient and interactive user interfaces. With hands-on experience.</p>
                </div>
            </div>

            <div className="skillbar">
                <img src={Apps} alt="uiUx" className="skillLogo" />
                <div className="skillsContent">
                    <h2 className="skillsHeading">App design</h2>
                    <p className="skillsPara">Proficient in crafting dynamic and responsive websites with a strong emphasis on the front end. I have successfully developed user-friendly and visually appealing web applications</p>
                </div>
            </div>
</div>

           
        </section>
    )
}


export default Skills;