import React from 'react';
import './Events.css';
import bottomLeft from './Event_vector/bottom_left.png';
import bottomRight from './Event_vector/bottom_right.png';
import cloud1 from './Event_vector/cloud1.png';
import cloud2 from './Event_vector/cloud2.png';
import { Link } from 'react-router-dom';
import events from './Data/Data';

function Events() {

    
    const Card = ({id,eventName,poster}) => {
        return(
            <div className="card" >                
                <div className="card-content">
                    <div className="poster">
                        <Link to= {`/event/${id}`}>
                            <img src={poster} alt={eventName} className="poster-img" objectFit="contain"/>
                        </Link>
                        <div className="event-name">
                            <p  style={{ color: 'grey', fontSize: '12px', margin: '0px', fontWeight: 'bold' }}>{eventName}</p>
                        </div>  
                    </div>                                      
                </div>                 
            </div>
        );
    }
    return (
        <div className="events" >
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
            <div className="event-vector" style={{bottom: '0px', left: '40vw'}}>
                <p style={{ color: 'white', fontSize: '4vw'}}>E V E N TS</p>
            </div>
            <div className="events-content">
                <div className="row-1">
                    {events.map((event , index) => {
                        if(index < 6){
                            return <Card id ={event.id} eventName={event.eventName} poster={event.poster} />
                        }
                    })}
                </div>
                <div className="row-2">
                    {events.map((event , index) => {
                        if(index >= 6){
                            return <Card id ={event.id} eventName={event.eventName} poster={event.poster} />
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default Events
