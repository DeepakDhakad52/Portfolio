import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Home.css'
import image from './img/Deepak-cp.jpg'
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import About from './About';
import Skills from './Skills';

function Home({handleOnClick}) {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Web Development', 'Completative Coading', 'Machine Learning', 'Cloud Computing'],
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
            <section className='newhome'>
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
                            <a href="/" target='blank' className='linkedin'><i className="fa-brands fa-linkedin"></i></a>
                            <a href="/" target='blank' className='github'><i className="fa-brands fa-github"></i></a>
                            <a href="/" target='blank' className='insta'><i className="fa-brands fa-instagram"></i></a>
                            <a href="/" target='blank' className='fb'><i className="fa-brands fa-facebook"></i></a>
                            <a href="/" target='blank' className='twitter'><i className="fa-brands fa-twitter"></i></a>
                            <a href="/" target='blank' className='whatsapp'><i className="fa-brands fa-whatsapp"></i></a>
                        </div>
                    </div>
                </div>
                <div className="section2">
                    <div className="img-box">
                        <img src={image} alt="Deepak Nagar" />
                    </div>
                </div>
            </section>
            <About/>
            <Skills/>
        </>
    )
}

export default Home
