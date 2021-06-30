import React, { useState } from "react";
import "./events.css";
import like from "../assets/fav.png";
import neutral from "../assets/neutral.png"

const Single_event = (props) => {
    const [favorite, setEnvorite] = useState(true);
    let eventObj = {}
    const callSentiment = () => {
        setEnvorite(!favorite);
        eventObj = {'id':props.id,'src' : props.src, 'title':props.title,'description': props.description, 'date':props.date, 'sentiment': 'liked'}
        if(favorite === true){
            localStorage.setItem(props.id,JSON.stringify(eventObj));
        }else{
            localStorage.setItem(props.id,'');
        }
    };

    return (
        <div className="card">
            <img src={props.src} alt="" />
            <div className="card-body">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <h5>{props.date}</h5>
            {/* Toggle on the icons to add to enrolled or remove from enrolled */}
            {
                favorite ? (
                    <div className="like" onClick={callSentiment}>
                    <img className="like-icon" src={neutral}  alt="" /><br></br>
                    <label>Click to Enroll</label>
                    </div>
                ) : (
                    <div className="like" onClick={callSentiment}>
                    <img className="like-icon" src={like}  alt="" /><br></br>
                    <label>Enrolled!</label>
                    </div>
                )
            }
            </div>
        </div>
    )
}

export default Single_event
