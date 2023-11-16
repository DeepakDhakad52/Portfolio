import './styles/Contact.css'

function Contact() {
    return (
        <>
            <div className="contact">
                <h2 className="heading"><i className="fa-regular fa-address-card"></i> Contact <span>Me!</span></h2>
                <div className="form">
                    <div className='input-box'>
                        <input type="text" name="" id="" placeholder='Full Name' required />
                        <input type="email" name="" id="" placeholder='Email Address' required />
                    </div>
                    <div className='input-box'>
                        <input type="number" name="" id="" placeholder='Mobile Number' />
                        <input type="text" name="" id="" placeholder='Email Subject' />
                    </div>
                    <textarea name="textarea" id="" cols="30" rows="10" placeholder="Your Message" required></textarea>
                    <button className="btn">Send Message</button>
                </div>
            </div>
            {/* <div className="footer">
                <p>Copyright ©2023 All rights reserved | Made with <i className='fa-solid fa-heart'></i> by <span>Deepak Nagar</span></p>
            </div> */}
        </>
    )
}

export default Contact
