import { useParams } from "react-router-dom";

const eventData = {
  1: { title: "Tech Conference", date: "12 Sept 2025", location: "Bangalore", description: "A full-day conference on emerging tech trends.", image: "https://picsum.photos/400/250?random=1" },
  2: { title: "Music Festival", date: "20 Sept 2025", location: "Delhi", description: "A weekend of music, fun, and food.", image: "https://picsum.photos/400/250?random=2" },
};

export default function Event() {
  const { id } = useParams();
  const event = eventData[id];

  return (
    <main className="event">
      <h1 className="event-title">{event.title}</h1>
      <div>
        <img src={event.image} alt={event.title} />
      </div>
      <h2 className="event-date">{event.date}</h2>
      <div className="event-location">{event.location}</div>
      <div className="event-description">{event.description}</div>
      <button type="button" className="register-btn" aria-label={`Register for ${event.title}`}>Register Now</button>
    </main>
  );
}
