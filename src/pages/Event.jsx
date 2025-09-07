import { useParams } from "react-router-dom";

const eventData = {
  1: { title: "Tech Conference", date: "12 Sept 2025", location: "Bangalore", description: "A full-day conference on emerging tech trends.", image: "/event1.jpg" },
  2: { title: "Music Festival", date: "20 Sept 2025", location: "Delhi", description: "A weekend of music, fun, and food.", image: "/event2.jpg" },
};

export default function Event() {
  const { id } = useParams();
  const event = eventData[id];

  return (
    <div className="event">
      <div className="event-title">{event.title}</div>
      <div>
        <img src={event.image} />
      </div>
      <div className="event-date">{event.date}</div>
      <div className="event-location">{event.location}</div>
      <div className="event-description">{event.description}</div>
      <div className="register-btn">Register Now</div>
    </div>
  );
}
