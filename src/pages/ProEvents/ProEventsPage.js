import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProEventsPage.css";
import events from "./Data/Data";
import bottomLeft from "./Event_vector/bottom_left.png";
import bottomRight from "./Event_vector/bottom_right.png";
import mobileBottom from "./Event_vector/mobile-bottom.png";

import cloud1 from "./Event_vector/cloud1.png";
import cloud2 from "./Event_vector/cloud2.png";
import eventTop from "./Event_vector/cloud.svg";
import eventBottom from "./Event_vector/bottom.svg";
import bigcardCorner from "./Event_vector/bigcard_corner.png";
import smallCardCorner from "./Event_vector/card_corner.png";

function ProEventPage() {
  const { id } = useParams();
  const event = events.find((e) => e.id === id);
  const mediaMatch = window.matchMedia("(max-width: 720px)");
  const [mobile, setMobile] = useState(mediaMatch.matches);
  useEffect(() => {
    const handler = (e) => setMobile(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });
  return (
    <div className="proevent">
      <div className="event-vector" style={{ bottom: "0px", width: "100vw" }}>
        <img src={eventBottom} />
      </div>

      <div className="event-vector" style={{ top: "0px", width: "100vw" }}>
        <img src={eventTop} />
      </div>
      <img
        src={cloud1}
        className="mobileEventVector"
        style={{ top: "0px", left: "0px", width: "100vw" }}
      />
      <img
        src={cloud2}
        className="mobileEventVector"
        style={{ top: "0px", right: "0px", width: "100vw" }}
      />
      <img
        src={mobileBottom}
        className="mobileEventVector"
        style={{ bottom: "0px", width: "100vw" }}
      />
      {!mobile && (
        <div className="event-info">
          <div className="event-poster">
            <img src={bigcardCorner} className="bigcard-corner" />
            <div className="posterClass">
              <img src={event.poster} alt="hello" className="posterImg" />
            </div>
          </div>
          <div style={{ height: "100vh", width: "6vw" }}></div>
          <div className="event-register">
            <p className="eventName"> {event.eventName}</p>
            <div className="event-details">
              <p className="eventDetailText">{event.eventDetails}</p>
              {/* <p className="eventDeadlineText">Deadline: {event.deadline}</p> */}
            </div>
            <div className="register-button">
              <Link to={`/registeration/${id}`}>
                <p className="register-text">REGISTER</p>
              </Link>
            </div>
          </div>
        </div>
      )}

      {mobile && (
        <div className="mobile-event-info">
          <div className="mobile-event-register">
            <p
              style={{
                fontSize: "2em",
                color: "white",
                fontWeight: "bold",
                margin: "0px",
                textShadow: " 4px 4px #000000",
              }}
            >
              {" "}
              {event.eventName.toUpperCase()}
            </p>
            <div className="mobile-event-poster">
              <img src={smallCardCorner} className="smallCard-corner" />
              <div className="mobile-posterClass">
                <img
                  src={event.poster}
                  alt={event.eventNickName}
                  className="mobile-posterImg"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="mobile-event-details">
              <div className="mobile-event-details-content-box">
                <p className="mobileEvent-details-text">{event.eventDetails}</p>
                <p className="mobileEvent-deadline-text">
                  Deadline: {event.deadline}
                </p>
              </div>
            </div>
            <div className="register-button">
              <Link to={`/registeration/${id}`}>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    margin: "0px",
                  }}
                >
                  REGISTER
                </p>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProEventPage;
