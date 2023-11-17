import './styles/About.css'
import image from './img/Deepak.jpg'
import Education from './Education';

const calculate_age = (dob) => {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);
    
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

function About() {
    return (
        <>
            <section className="about pt-[5vh]" id='about'>
                <div className="heading">
                    <h2><i className='fa-solid fa-user-large'></i> About <span>Me</span></h2>
                    <div className="about-box">
                        <div className="text about-content">
                            <h3>Hello I'm Deepak </h3>
                            <h4>Programmer | Learner | Web Developer</h4>
                            <p>I'm A Passionate Undergraduate Student Who Is Always Interested In Exploring New Things And Technology. Technology has always fascinated me, and I am constantly seeking to expand my knowledge and skills in this field. I enjoy exploring new technologies, programming, and problem-solving. Beyond academics, I also participate in tech competitions and also participate in Hackathons. I believe that a balance of theoretical knowledge and practical skills is crucial for success in the IT industry, and I am fully committed to achieving both.</p>
                            <div className='personal-details'>
                                <p><span><i className="fa-solid fa-user-large"></i> Age :</span> {calculate_age(new Date(2001, 8, 15))} year</p>
                                <p><span><i className="fa-solid fa-envelope"></i> Email : </span>dhakadd745@gmail.com</p>
                                <p><span><i className="fa-solid fa-phone"></i> Phone :</span> +91 8357019508   </p>
                                <p><span><i className="fa-solid fa-location-dot"></i> Place : </span> Indore, India</p>
                            </div>
                            <button className="btn">Download Resume</button>
                        </div>
                        <div className="img about-content">
                            <img src={image} alt="Deepak Nagar" />
                        </div>
                    </div>
                </div>
            </section>
            <Education />   
        </>
    )
}

export default About
