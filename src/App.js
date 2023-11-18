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
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/skills" element={<NewSkills />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Router>
            <Footer />
        </>
    );
}

const Navbar = () => {
    const listClass = 'inline-block ml-[1.8rem] text-[1.57rem] font-semibold duration-300 hover:text-orange-color'
    return (
        <div className="bg-white sticky top-0 p-6 z-10 shadow-md">
            <div className="flex max-w-[80vw] mx-auto justify-between">
                <h1 className='text-[2.5rem] hover:text-orange-color'><Link to="/" className='transition duration-400'><i className="fa-brands fa-node-js"></i> Deepak</Link></h1>
                <div className="cursor-pointer p-2">
                    <ul>
                        <a href="/#"><li className={`nav-item active ${listClass}`}>Home</li></a>
                        <a href="/#about"><li className={`nav-item ${listClass}`}>About</li></a>
                        <a href="/#education"><li className={`nav-item ${listClass}`}>Education</li></a>
                        <a href="/#skills"><li className={`nav-item ${listClass}`}>Skills</li></a>
                        <a href="/#experience"><li className={`nav-item ${listClass}`}>Experiences</li></a>
                        <a href="/work"><li className={`nav-item ${listClass}`}>Works</li></a>
                        <a href="/#contact"><li className={`nav-item ${listClass}`}>Contact Me</li></a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default App;
