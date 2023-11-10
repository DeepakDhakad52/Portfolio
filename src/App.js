import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from "react-router-dom";
import Skills from './components/Skills';
import PageNotFound from './components/PageNotFound';
import Home from './components/Home';
// import Blog from './components/Blog';
import BlogTemplate from './components/BlogTemplate';

function App() {
    const [close, setClose] = useState(true);

    function handleOnClick(e) {
        console.log(e);
        setClose(!close);

        const navList = document.querySelectorAll('.nav-item');
        navList.forEach(link => {
            link.classList.remove('active');
        })
        e.target.classList.add('active')
    }

    return (
        <>
            <Router>
                <div className="navbar">
                   <div className="nav-elements">
                   <h1><Link to="/"><i className="fa-brands fa-node-js"></i> Deepak</Link></h1>
                    <div className="menuIcon">
                        {/* {close ? <i className="fa-solid fa-xmark" onClick={handleOnClick}></i> : <i className="fa-solid fa-bars" onClick={handleOnClick}></i>} */}
                        <ul className='nav-items'>
                            <Link onClick={handleOnClick} to="/"><li className='nav-item active'>Home</li></Link>
                            <Link onClick={handleOnClick} to="/about"><li className='nav-item'>About</li></Link>
                            <Link onClick={handleOnClick} to="/skills"><li className='nav-item'>Skills</li></Link>
                            <Link onClick={handleOnClick} to="/newHome"><li className='nav-item'>Experiences</li></Link>
                            <Link onClick={handleOnClick} to="/work"><li className='nav-item'>Works</li></Link>
                            {/* <Link onClick={handleOnClick} to="/blog"><li className='nav-item'>Blog</li></Link> */}
                            <Link onClick={handleOnClick} to="/contact"><li className='nav-item'>Contact Me</li></Link>
                        </ul>
                    </div>
                   </div>
                </div>

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/skills" element={<Skills />} />
                    {/* <Route path="/blog" element={<Blog />} /> */}
                    <Route path='/blog/:id' element={<BlogTemplate />} />
                    <Route path="*" element={<PageNotFound />}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
