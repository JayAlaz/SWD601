import React from 'react';
import SingleEvent from "./single_event.js";
import english from "../assets/english.jpg";
import clay from "../assets/clay.jpg";
import reference from "../assets/reference.jpg";
import presentation from "../assets/presentation.jpg";
import meditate from "../assets/meditate.jpg";
import time from "../assets/time.jpg";
import tech from "../assets/tech.jpg";
const Events = () => {
    return (
      <div>
          <SingleEvent
            id = {1}
            src = {english}
            title="English Language Support for International Students"
            description = "Once you have enrolled, you will receive a confirmation e-mail with further details from the Succeed@Solent Team"
            date="22/03/21 @ Mountbatten Library"
          />
           <SingleEvent 
            id = {2}
            src = {clay}
            title="Destress with Clay"
            description = "Once you have enrolled, you will receive a confirmation e-mail with further details from the Student Achievement Team"
            date="18/02/21 East Park Terrace"
          />
           <SingleEvent 
            id = {3}
            src = {reference}
            title="Referencing Support Workshop"
            description = "Once you have enrolled, you will receive a confirmation e-mail with further details from the Succeed@Solent Team"
            date="04/05/21 @ Mountbatten Library"
          />
           <SingleEvent 
            id = {4}
            src = {presentation}
            title="How to Plan and Deliver Presentations"
            description = "Once you have enrolled, you will receive a confirmation e-mail with further details from the Student Achievement Team"
            date="29/01/21 @ Jane Austen Lecture Theatre"
          />
           <SingleEvent 
            id = {5}
            src = {meditate}
            title="Meditation and Yoga Session"
            description = "Once you have enrolled, you will receive a confirmation e-mail with further details from the Student Achievement Team"
            date="13/06/21 @ East Park Terrace"
          />
           <SingleEvent 
            id = {6}
            src = {time}
            title="Time Management Workshop"
            description = "Once you have enrolled, you will receive a confirmation e-mail with further details from the Succeed@Solent Team"
            date="07/05/21 @ Itchen Lecture Theatre"
          />
          <SingleEvent 
            id = {7}
            src = {tech}
            title="Technology Support Workshop"
            description = "Once you have enrolled, you will receive a confirmation e-mail with further details from the (LT) Learning Technologies Team"
            date="26/02/21 @ Mountbatten Library"
          />
      </div>
    )
}

export default Events
