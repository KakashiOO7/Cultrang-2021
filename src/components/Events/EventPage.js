import React from 'react'
import { useParams } from 'react-router';
import './EventPage.css';
import events from './Data/Data';
import bottomLeft from './Event_vector/bottom_left.png';
import bottomRight from './Event_vector/bottom_right.png';
import cloud1 from './Event_vector/cloud1.png';
import cloud2 from './Event_vector/cloud2.png';

function EventPage() {
    const {id} = useParams();
    const event = events.find((e) => e.id === id);
    return (
        <div className="event">
            <div className="event-vector" style={{bottom: '0px'}}>
                <img src={bottomLeft}  />
            </div>
            <div className="event-vector" style={{bottom: '0px', right: '0px'}}>
                <img src={bottomRight}  />
            </div>
            <div className="event-vector" style={{top: '0px'}}>
                <img src={cloud2}  style={{ height: '300px', width: '100vw'}}/>
            </div>
            <div className="event-vector" style={{top: '0px',}}>
                <img src={cloud1}  style={{ height: '250px', width: '100vw'}}/>
            </div>
            <div className="event-info">
                <div className="event-poster">
                    <div className="posterClass">                           
                        <img src={event.poster} alt="hello" className="posterImg" objectFit="contain"/>                        
                    </div>
                </div>
                <div className="event-register">
                    <p  style={{ fontSize: '3em', color: 'white', fontWeight: 'bold' , margin: '10px'}}> VIDEO EDITING</p>
                    <div className="event-details">
                        <p  style={{ fontSize: '26px', padding: '15px', height: '100%'}}>{event.eventDetails}</p>
                    </div>
                    <div className="register-button" style={{margin: '10px'}}>
                        <div className="button">
                            <p style={{ fontSize: '22px', fontWeight: 'bold' }}>REGISTER</p>
                        </div>                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default EventPage