import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Home.css'
import image from './img/Deepak-cp.jpg'
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import About from './About';
import NewSkills from './NewSkills';
import Contact from './Contact'
import Experience from './Experience';

function Home() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Web Development', 'Completative Coading', 'Cloud Computing'],
            startDelay: 300,
            typeSpeed: 70,
            backSpeed: 10,
            backDelay: 100,
            loop: true
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);


    return (
        <>
            <div className='newhome'>
                <div className="section1">
                    <div className="content-box">
                        <span>Full-Stack Web Developer</span>
                        <h1>I'm Deepak <span style={{ fontSize: '7rem' }}>Nagar</span></h1>
                        <h3>I'm into <span ref={el}></span></h3>
                        <p>
                            <Link to="/about">More About Me <i className="fa-solid fa-arrow-right"></i></Link>
                            <Link to="/contact">Hire Me <i className="fa-solid fa-arrow-right"></i></Link>
                        </p>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/dhakad-deepak/" target='blank' className='linkedin'><i className="fa-brands fa-linkedin"></i></a>
                            <a href="https://github.com/DeepakDhakad52" target='blank' className='github'><i className="fa-brands fa-github"></i></a>
                            <a href="https://www.instagram.com/dhakad____deepak/" target='blank' className='insta'><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://www.facebook.com/dhakadd745" target='blank' className='fb'><i className="fa-brands fa-facebook"></i></a>
                            <a href="https://www.twitter.com/Deepak_Dhakad52" target='blank' className='twitter'><i className="fa-brands fa-twitter"></i></a>
                        </div>
                        <p className='mt-8 text-2xl'>Copyright ©2023 All rights reserved | Made with <i className='fa-solid fa-heart text-red-600'></i> by <span>Deepak Nagar</span></p>
                    </div>
                </div>
                <div className="section2">
                    <div className="img-box">
                        <img src={image} alt="Deepak Nagar" />
                    </div>
                </div>
            </div>
            <About />
            <NewSkills />
            <Experience />
            <Contact />
        </>
    )
}

export default Home
