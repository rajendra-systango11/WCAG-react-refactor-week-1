import { Link } from "react-router-dom";

export default function EventCard({ event }) {
  return (
    <article className="event-card">
      <div className="event-image">
        <img src={event.image} alt={event.title} />
      </div>
      <h2 className="event-title">{event.title}</h2>
      <div className="event-date">{event.date}</div>
      <div className="event-location">{event.location}</div>
      <div className="read-more">
        <Link to={`/event/${event.id}`}>View</Link>
      </div>
    </article>
  );
}
