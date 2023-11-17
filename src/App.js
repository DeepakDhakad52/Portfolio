import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from "react-router-dom";
import PageNotFound from './components/PageNotFound';
import Home from './components/Home';
import NewSkills from './components/NewSkills';
import Footer from './components/Footer';
import Experience from './components/Experience';

function App() {

    React.useEffect(() => {
        const navList = document.querySelectorAll('.nav-item');
        const handleScroll = () => {
            if (window.scrollY >= 0 && window.scrollY <= 780) {
                navList.forEach(link => link.classList.remove('active'));
                navList[0].classList.add('active')
            }
            else if (window.scrollY >= 780 && window.scrollY <= 900) {
                navList.forEach(link => link.classList.remove('active'));
                navList[1].classList.add('active')
            }
            else if (window.scrollY >= 1575 && window.scrollY <= 1700) {
                navList.forEach(link => link.classList.remove('active'));
                navList[2].classList.add('active')
            }
            else if (window.scrollY >= 2353 && window.scrollY <= 2500) {
                navList.forEach(link => link.classList.remove('active'));
                navList[3].classList.add('active')
            }
            else if (window.scrollY >= 3287 && window.scrollY <= 3500) {
                navList.forEach(link => link.classList.remove('active'));
                navList[4].classList.add('active')
            }
            else if (window.scrollY >= 4289 && window.scrollY <= 4500) {
                navList.forEach(link => link.classList.remove('active'));
                navList[6].classList.add('active')
            }

        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Router>
                <div className="navbar shadow-md">
                    <div className="nav-elements">
                        <h1><Link to="/"><i className="fa-brands fa-node-js"></i> Deepak</Link></h1>
                        <div className="menuIcon">
                            {/* {close ? <i className="fa-solid fa-xmark" onClick={handleOnClick}></i> : <i className="fa-solid fa-bars" onClick={handleOnClick}></i>} */}
                            <ul className='nav-items'>
                                <a href="/#"><li className='nav-item active'>Home</li></a>
                                <a href="/#about"><li className='nav-item'>About</li></a>
                                <a href="/#education"><li className='nav-item'>Education</li></a>
                                <a href="/#skills"><li className='nav-item'>Skills</li></a>
                                <a href="/#experience"><li className='nav-item'>Experiences</li></a>
                                <a href="/work"><li className='nav-item'>Works</li></a>
                                {/* <Link onClick={handleOnClick} to="/blog"><li className='nav-item'>Blog</li></Link> */}
                                <a href="/#contact"><li className='nav-item'>Contact Me</li></a>
                            </ul>
                        </div>
                    </div>
                </div>

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/skills" element={<NewSkills />} />
                    <Route path="/experience" element={<Experience />} />
                    {/* <Route path="/blog" element={<Blog />} /> */}
                    {/* <Route path='/blog/:id' element={<BlogTemplate />} /> */}
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Router>
            <Footer />
        </>
    );
}

export default App;
