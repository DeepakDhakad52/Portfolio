import React from 'react'
// import './styles/footer.css'

function Footer() {
    return (
        <section className="mb-0 text-white bg-[#050033]">
            <div className="box-container flex container mx-auto">
                <div className="box w-[33%] mt-8 p-8 ml-32">
                    <h3 className='text-5xl mb-8'>Deepak Nagar Portfolio</h3>
                    <p className='text-2xl pr-8 leading-snug'>Thank you for visiting my personal portfolio website. Connect with me over socials.</p>
                    <p className='mt-8 text-3xl text-yellow-400'>Projects will be Comming Soon.</p>
                    <p className='mt-8 text-xl'>Till Now, You can checkout my Github: <a href="https://github.com/DeepakDhakad52/" rel='noreferrer'><span>DhakadDeepak52</span></a></p>
                </div>
                <div className="box w-[33%] mt-8 p-8 ml-32">
                    <h3 className='text-5xl'>Quick Links</h3>
                    <div className='flex flex-col text-2xl mt-4'>
                        <a href="/#" ><span><i className="fa-solid fa-link" /></span> Home</a>
                        <a href="/#about" ><span><i className="fa-solid fa-link" /></span> About</a>
                        <a href="/#skills" ><span><i className="fa-solid fa-link" /></span> Skills</a>
                        <a href="/#education" ><span><i className="fa-solid fa-link" /></span> Education</a>
                        <a href="/#experience" ><span><i className="fa-solid fa-link" /></span> Experience</a>
                        <a href="/#project" ><span><i className="fa-solid fa-link" /></span> Project</a>
                    </div>
                </div>
                <div className="box w-[33%] mt-8 p-8 ml-32">
                    <h3 className='text-5xl mb-8'>Contact Info</h3>
                    <div className='text-2xl'>
                        <p className='m-4'><span><i className="fa-solid fa-phone" /></span> +91 8357019508</p>
                        <p className='m-4'><span><i className="fa-solid fa-envelope" /></span> dhakadd745@gmail.com</p>
                        <p className='m-4'><span><i className="fa-solid fa-location-dot" /></span> Indore, India</p>
                    </div>
                    <div className="share mt-8 text-4xl">
                        <a href="https://www.linkedin.com/in/dhakad-deepak/" className="fab fa-linkedin ml-6 transition hover:text-orange-color" target="_blank" rel="noreferrer" ><i></i></a>
                        <a href="https://github.com/DeepakDhakad52" className="fab fa-github ml-6 transition hover:text-orange-color" target="_blank" rel="noreferrer" ><i></i></a>
                        <a href="mailto:dhakadd745@gmail.com" className="fas fa-envelope ml-6 transition hover:text-orange-color" target="_blank" rel="noreferrer" ><i></i></a>
                        <a href="https://twitter.com/Deepak_Dhakad52" className="fab fa-twitter ml-6 transition hover:text-orange-color" target="_blank" rel="noreferrer" ><i></i></a>
                    </div>
                </div>
            </div>
            <hr className='w-[75%] mx-auto text-slate-600' />
            <div>
                <h1 className='text-center p-8 text-2xl'>
                    Copyright ©2023 All rights reserved | Made with{' '} Love by{' '}
                    <span><a href="https://www.linkedin.com/in/dhakad-deepak/" target='_blank' rel="noreferrer">Deepak Nagar</a></span>
                </h1>
            </div>
        </section>
    )
}

export default Footer
