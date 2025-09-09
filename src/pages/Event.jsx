import { useParams } from "react-router-dom";
import "./event.css";
const eventData = {
  1: {
    title: "Tech Conference",
    date: "12 Sept 2025",
    location: "Bangalore",
    description: "A full-day conference on emerging tech trends.",
    image: "https://picsum.photos/400/250?random=1",
  },
  2: {
    title: "Music Festival",
    date: "20 Sept 2025",
    location: "Delhi",
    description: "A weekend of music, fun, and food.",
    image: "https://picsum.photos/400/250?random=2",
  },
};

export default function Event() {
  const { id } = useParams();
  const event = eventData[id];

  if (!event) {
    return (
      <main className="event">
        <h1>Event not found</h1>
        <p>The event you are looking for does not exist.</p>
      </main>
    );
  }

  return (
    <main className="event" role="main">
      <article aria-labelledby="event-title">
        <header>
          <h1 id="event-title" className="event-title">
            {event.title}
          </h1>
          <p className="event-date">
            <time dateTime="2025-09-12">{event.date}</time>
          </p>
          <p className="event-location">
            <span aria-hidden="true">📍</span> {event.location}
          </p>
        </header>

        <figure>
          <img
            src={event.image}
            alt={`${event.title} promotional banner`}
            width="400"
            height="250"
            loading="lazy"
            decoding="async"
          />

          <figcaption>{event.title}</figcaption>
        </figure>

        <section className="event-description">
          <h2>About this event</h2>
          <p>{event.description}</p>
        </section>

        <section className="event-registration">
          <h2>Register</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <button
              type="submit"
              className="register-btn"
              aria-label={`Register for ${event.title}`}
            >
              Register Now
            </button>
          </form>
        </section>
      </article>
    </main>
  );
}
