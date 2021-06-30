import React from "react";
import "./events.css";
import Envevent from "./enrolledEvents";

const Enrolled = () => {
    const eventObj = [];
    const emptySpace = [];
    for(let i = 0;i < 20;i++){
        (localStorage.getItem(i) != null )? eventObj.push(localStorage.getItem(i)!== ''?JSON.parse(localStorage.getItem(i)):emptySpace.push(0)) : emptySpace.push(0);
    }
    
    const enrolledEvents = eventObj.map((event) => 
    event.id?
        <Envevent
        id = {event.id}
        src = {event.src}
        title= {event.title}
        description = {event.description}
        date= {event.date}
      />:
      <div>
         
      </div>
    );
    return (
       <div>{enrolledEvents}</div>
    )
}

export default Enrolled
