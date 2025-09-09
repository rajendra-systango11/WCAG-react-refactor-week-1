import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export default function EventCard({ event }) {
  return (
    <article className="event-card">
      <div className="event-image">
        <img
          src={event.image}
          alt={event.title}
          width="400"
          height="250"
          loading="lazy"
            decoding="async"
        />
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

EventCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
  }).isRequired
};
