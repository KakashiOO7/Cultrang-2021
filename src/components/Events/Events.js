import React from 'react';
import './Events.css';
import cardCorner from './Event_vector/card_corner.png';
import bottomLeft from './Event_vector/bottom_left.png';
import bottomRight from './Event_vector/bottom_right.png';
import cloud1 from './Event_vector/cloud1.png';
import cloud2 from './Event_vector/cloud2.png';
function Events() {

    const Card = ({eventName, eventDetails, deadline}) => {
        return(
            <div className="card" >                
                <div className="card-content">
                    <div className="event-details">
                        <p style={{ color: 'white', fontSize: '13px', }}>{eventDetails}</p>
                        <p style={{ color: 'white', fontSize: '11px'}}>Deadline for submission of entries: {deadline}</p>
                    </div>
                    <div className="event-name">
                        <p  style={{ color: 'grey', fontSize: '12px', margin: '0px', fontWeight: 'bold' }}>{eventName}</p>
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
                    <Card  
                        eventName= "SOLO/DUET DANCE" 
                        eventDetails = " Here’s something that’ll make you tap your feet. No, literally, tap your feet. If you’re into solo or duet, would you like to move it, move it?"
                        deadline = "1st April, 2021"
                    />
                    <Card  
                        eventName= "Solo/Duet Vocals" 
                        eventDetails = " If you’ve got the voice, we’ve got the mic! Here’s a competition to bring out your inner virtuoso, and perhaps blow the roof off the place."
                        deadline = " 1st April, 2021"
                    />
                    <Card  
                        eventName= "Solo Instrumental " 
                        eventDetails = "If you’re anything like us, you’ve probably tried to impersonate Beethoven or Slash a million times. While wearing retro outfits and growing your hair way too long isn’t what we expect, we wouldn’t mind a great solo!"
                        deadline = " 1st April, 2021"
                    />
                    <Card  
                        eventName= "DEBATE" 
                        eventDetails = "There’s no point in having an opinion if you can’t voice it. If you have a way of bringing conviction to your points, we have the perfect competition for you!"
                        deadline = " 1st April, 2021"
                    />
                    <Card  
                        eventName= "Video Editing " 
                        eventDetails = "While great acting is required to make a good movie, the lack of proper editing can even make Captain America look like a clown. So, be there and make sure you clip it the right way!                        "
                        deadline = " 1st April, 2021"
                    />
                    <Card  
                        eventName= "Painting" 
                        eventDetails = "This is the perfect event for you, if you have a way of making things alive with the stroke of a brush. Vicente van Go make it happen! "
                        deadline = " 1st April, 2021"
                    />
                </div>
                <div className="row-2">
                    <Card  
                            eventName= "SKETCHING" 
                            eventDetails = "If you like to bring things to life by no brush but just pencils, we’ve got you covered with our sketching event. Bring those pencils, show us the magic of that one stroke "
                            deadline = " 1st April, 2021"
                    />
                    <Card  
                        eventName= "QUIZZING COMPETITION-" 
                        eventDetails = "Get your antennae raised for we got you a chance to prove your genius."
                        deadline = " 1st April, 2021"
                    />
                    <Card  
                        eventName= "POETRY COMPETITION " 
                        eventDetails = " Showcase your inner Wordsworth. Spill that ink, let those words flow as we wait for your poetry to leave us spellbound"
                        deadline = " 1st April, 2021"
                    />
                    <Card  
                        eventName= " Photography" 
                        eventDetails = "Photography is an art of observation, it’s about finding something interesting in an ordinary place. If the picture clicked by you can communicate a visual narrative, come along and let the pictures tell us their story."
                        deadline = " 1st April, 2021"
                    />
                    <Card  
                        eventName= "Treasure Hunt-" 
                        eventDetails = "Treasure Hunt takes you on a cryptic, interactive journey into the secret nooks and crannies and on an adventure like no other. The event is crammed with activities and puzzles, which means that all team members will have the opportunity to use their particular skills and emerge victorious as a team"
                        deadline = " 1st April, 2021"
                    />
                    <Card  
                        eventName= "Painting" 
                        eventDetails = "This is the perfect event for you, if you have a way of making things alive with the stroke of a brush. Vicente van Go make it happen! "
                        deadline = " 1st April, 2021"
                    />
                </div>
            </div>
        </div>
    )
}

export default Events
