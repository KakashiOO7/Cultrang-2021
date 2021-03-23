import hiphop from "../poster/hiphop.svg";
import music from "../poster/music.svg";
import theatre from "../poster/theatre.svg";

const events = [
  {
    id: "1",
    eventName: "Theatre Workshop by Mr. Pradeep Bajpai",
    ticket:
      "Want to learn the art of theaters? Get in the play with Mr. Pradeep Bajpai in this very exciting workshop.",
    eventDetails:
      " Want to be the next big theatre artist? Join our virtual workshop on xyz April to learn the skill of acting with actor and director , Mr. Pradeep Bajpai. The workshop is open to all, so put on your acting faces and join other artists like yourself to learn something new and fun.",
    deadline: "Register for the Workshop here:",
    poster: hiphop,
  },
  {
    id: "2",
    eventName: "Vivid Forms of Music, A Talk by Mr. Adil Rashid",
    ticket:
      "How India’s one of the greatest guitarist expresses himself through music. Learn from Adil Rashid, the lead guitarist of Underground Authority. ",
    eventDetails:
      "Good music never fails to stir our deepest emotions be it love, joy, sorrow or dissent. Join Mr. Adil Rashid, the lead guitarist of Underground Authority to learn how to express yourself in music, and how music induces different spectrum of emotions in one's heart, from joyful peace to dissentful agony. The workshop is open to all along followed by an open QnA, so join us for an sensational evening with Adil Rashid.",
    deadline: "Register for the Workshop here:",
    poster: music,
  },
  {
    id: "3",
    eventName: "Hip Hop Workshop by Kunal Srivastava ",
    eventDetails:
      "Yearning to learn and have fun with street dance styles? Join our virtual workshop on 3rd April to learn Hip Hop from Dancer and Choreographer, Kunal Srivastava. The workshop is open to all, so put on your dancing shoes and join other dancers like yourself to learn something new and fun. No prerequisites, because Anybody Can Dance!",
    deadline: "Register for the Workshop here:",
    poster: theatre,
  },
];
export default events;
