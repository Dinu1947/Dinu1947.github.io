import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div id='contactus-section'>
      <h2>Get in Touch with our Experts!</h2>
      <div className='form-and-contact'>
        <div id='contact-form'>
        <form action="">
            <label htmlFor='fullname'>Name</label>
            <input type="text" id='fullname' />
            <label htmlFor='email'>Email</label>
            <input type="email" name="" id="email" />
            <label htmlFor='message'>Your message</label>
            <textarea name="message" id="" cols={30} rows={10} ></textarea>
            <input type="submit" value='SEND'/>
        </form>
        </div>
      
        <div id='contact-details'>
          <div id='contact-image'>
          <img className='contactus-img' src="/contact-section.png" alt="" />
          <img className='contact-img-icons' id='call-icon' src="/call-img.png" alt="" />
          <img className='contact-img-icons' id='message-icon' src="/message-img.png" alt="" />
          <img className='contact-img-icons' id='question-icon' src="question-mark.png" alt="" />
          <img className='contact-img-icons' id='settings-icon' src="settings-img.png" alt="" />
          <img src="/decoration-icon.png" id='decoration-1' alt="" />
          <img src="/decoration-icon.png" id='decoration-2' alt="" />
          <img src="/decoration-icon.png" id='decoration-3' alt="" />
          <img src="/decoration-icon.png" id='decoration-4' alt="" />
          <img src="/decoration-icon.png" id='decoration-5' alt="" />

          </div>
            <div className='contact-us'>
             <FontAwesomeIcon className='contact-icons' icon={faMapMarkerAlt} />
              <p>LOCATION: #A/4, 32nd cross, 3rd main road, 7th block, Jayanagara, Bengaluru</p>
            </div>

            <div className='contact-us'>
            <FontAwesomeIcon className='contact-icons' icon={faPhone} />
            <p> CALL US ON: +91-9779868855</p>
            </div>

            <div className='contact-us'>
            <FontAwesomeIcon className='contact-icons' icon={faEnvelope} />
            <p> EMAIL: business@picknpin.com</p> 
            </div>

        </div>
      </div>
      <div id='links-and-more'>
        <div>
        <h3>Links</h3>
        <ul>
            <li>API</li>
            <li>Blog</li>
            <li>Jobs</li>
            <li>Help</li>
        </ul>
        </div>
        <div>
        <h3>More</h3>
        <ul>
            <li>Team</li>
            <li>Terms</li>
            <li>Privacy</li>
        </ul>
        </div>
      
       
      </div>
      <footer>
        2024 PicknPin. All rights reserved.
      </footer>
    </div>
  );
}

export default Contact;
