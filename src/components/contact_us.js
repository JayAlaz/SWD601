import React from 'react'
import contactus from '../assets/contactus.jpg';
import './contact_us.css';

const Contact_us = () => {
    return (
        <div>
            <img src={contactus} className="contact-us" alt="Contact Us" />
            <h1>Please Feel Free To Contact Us If You Require Any Support Or Have Questions. Contact Details Listed Below:</h1>
            <p className="text-body"> Click <a href="https://learn.solent.ac.uk/course/view.php?id=90">HERE</a> to visit the Succeed@Solent page
            <br></br> Click <a href="https://students.solent.ac.uk/student-hub">HERE</a> to visit the Student Hub 
            <br></br> Click <a href="https://learn.solent.ac.uk/course/view.php?id=31413">HERE</a> to visit the (LT) Learning Technologies page
            
            </p>
        </div>
    )
}

export default Contact_us
