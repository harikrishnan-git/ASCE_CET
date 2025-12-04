import React from 'react'
import './Contact.css'
import email from '../../assets/email.png'
import phone from '../../assets/phone.png'
import location from '../../assets/location.png'


const Contact = () => {
  return (
    <div className='contactus'>
        <div className="text">
            <h2>Send us a message</h2>
            <p>Feel free to reach out through contact form or find our contact information below. 
              <br/>Your feedback, questions, and suggestions are important to us as we strive to provide  <br/>exceptional service to our university community.</p>
            <div className="contact">
               <div>
                 <img src={email} alt="" />
                 <span>info@pkggi.org</span>
               </div>

              <div>
                 <img src={phone} alt="" />
                 <span>+91-9053055301, +91-9053055302</span>
              </div>
              
              <div>
                 <img src={location} alt="" />
                 <span>Mohindinpur Thirana, Assandh Road, Near Thermal Power Plant, Madlauda, Panipat,</span>
              </div>
            </div>
        </div>

       <div className='inputs'>
         <form>
            <label>Your Name:</label>
            <input type="text" placeholder='Enter Your Name' required/>

            <label>Phone No:</label>
            <input type="tel"required/>

            <label>Email:</label>
            <input type="text" placeholder='xyz@gmail.com' required/>

            <label>Message:</label>
            <textarea rows={6} required></textarea>

            <button type='submit' className='butn'>Submit</button>
         </form>
       </div>
    </div>
  )
}

export default Contact