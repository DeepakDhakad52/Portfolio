import './styles/Contact.css'

function Contact() {
    return (
        <section className='bg-white pt-[7vh]' id='contact'>
            <div className="contact mx-auto" >
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
        </section>
    )
}

export default Contact
