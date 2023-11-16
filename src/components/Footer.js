import React from 'react'
// import './styles/footer.css'

function Footer() {
    return (
        <section className="footer mb-0">
            <div className="box-container flex container mx-auto">
                <div className="box w-[33%] mt-8 p-8 ml-32">
                    <h3 className='text-5xl mb-8'>Deepak Nagar Portfolio</h3>
                    <p className='text-2xl pr-8 leading-snug'>Thank you for visiting my personal portfolio website. Connect with me over socials. Projects will be Comming Soon</p>
                </div>
                <div className="box w-[33%] mt-8 p-8 ml-32">
                    <h3 className='text-5xl'>Quick Links</h3>
                    <div className='flex flex-col text-2xl mt-4'>
                        <a href="/#" > Home</a>
                        <a href="/#about" > About</a>
                        <a href="/#skills" > Skills</a>
                        <a href="/#education" > Education</a>
                        <a href="/#experience" > Experience</a>
                        <a href="/#project" > Project</a>
                    </div>
                </div>
                <div className="box w-[33%] mt-8 p-8 ml-32">
                    <h3 className='text-5xl mb-8'>Contact Info</h3>
                    <div className='text-2xl'>
                        <p className='m-2'> +918357019508</p>
                        <p className='m-2'> dhakadd745@gmail.com</p>
                        <p className='m-2'> Indore, India</p>
                    </div>
                    <div className="share">
                        <a href="https://www.linkedin.com/in/dhakad-deepak/" className="fab fa-linkedin" target="_blank" rel="noreferrer" />
                        <a href="https://github.com/DeepakDhakad52" className="fab fa-github" target="_blank" rel="noreferrer" />
                        <a href="mailto:dhakadd745@gmail.com" className="fas fa-envelope" target="_blank" rel="noreferrer" />
                        <a href="https://twitter.com/Deepak_Dhakad52" className="fab fa-twitter" target="_blank" rel="noreferrer" />
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
