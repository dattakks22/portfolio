import React, { useRef } from 'react'
import './contect.css'

import c1 from "../../requrements/walmart.png"
import c2 from "../../requrements/adobe.png"
import c3 from "../../requrements/microsoft.png"
import c4 from "../../requrements/facebook.png"

import f1 from '../../requrements/facebook-icon.png'
import t1 from '../../requrements/twitter.png'
import y1 from '../../requrements/youtube.png'
import i1 from '../../requrements/instagram.png'
import emailjs from '@emailjs/browser';


const Contect = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_k0pd2xj', 'template_8u017sz', form.current, 'qLVmJxpZ15JtInEuXVbAI')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent !');
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section id='contectPage'>
            <div id='clients'>
                <h1 className='contectpageTitle'>My Client</h1>
                <span className='clientsDesc'>I have had the opportunity to work with a diverse group of companies. Some of the notable companies I jhave worked with inclide. </span>
                <div className='clientImges'>
                    <img src={c1} alt="clientImg1" className='clientImg' />
                    <img src={c2} alt="clientImg2" className='clientImg' />
                    <img src={c3} alt="clientImg3" className='clientImg' />
                    <img src={c4} alt="clientImg4" className='clientImg' />
                </div>
            </div>
            <div id="contect">
                <h1 className='contectpageTitle'>Contect Me</h1>
                <span className='contectDesc'>Please fill out the form below to discuss any work opportunity</span>
                <form className='contectForm' ref={form}  onSubmit={sendEmail}>
                    <input type="text" className='nameInput' placeholder='Your Name' name =  'your_name' />
                    <input type="email" className='emailInput' placeholder='Your Email' name = 'your_email'/>
                    <textarea  className="msgInput" rows='5' placeholder='Your Message' name="message">
                    </textarea>
                    <button type="submit" value="sent" className='submitbutton'>Submit</button>
                    <div className='links'>
                        <img src={f1} className='link' alt="facebook" />
                        <img src={t1} className='link' alt="twitter" />
                        <img src={y1} className='link' alt="youtube" />
                        <img src={i1} className='link' alt="instgram" />
                    </div>
                </form>
            </div>
        </section>
    )
}


export default Contect;