import React, { useState } from "react";
import "./events.css";
import like from "../assets/fav.png";
import neutral from "../assets/neutral.png";

const Env_event = (props) => {
    const [favorite, setEnvorite] = useState(false);
    const callSentiment = () => {
        setEnvorite(!favorite);
            localStorage.setItem(props.id,'');
    };
    return (
        <div className="card">
            <img src={props.src} alt="" />
            <div className="card-body">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <h5>{props.date}</h5>
            {
                favorite ? (
                    <div className="like" onClick={callSentiment}>
                    <img className="like-icon" src={neutral}  alt="" /><br></br>
                    <label>Disenrolled from Event</label>
                    </div>
                ) : (
                    <div className="like" onClick={callSentiment}>
                    <img className="like-icon" src={like}  alt="" /><br></br>
                    <label>Click to Disenroll from Event</label>
                    </div>
                )
            }
            </div>
        </div>
    )
}

export default Env_event
