import { Link } from "react-router-dom";

export default function EventCard({ event }) {
  return (
    <div className="event-card">
      <div className="event-image">
        <img src={event.image} />
      </div>
      <div className="event-title">{event.title}</div>
      <div className="event-date">{event.date}</div>
      <div className="event-location">{event.location}</div>
      <div className="read-more">
        <Link to={`/event/${event.id}`}>View</Link>
      </div>
    </div>
  );
}
