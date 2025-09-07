import EventCard from "../components/EventCard";

const events = [
  { id: 1, title: "Tech Conference", date: "12 Sept 2025", location: "Bangalore", image: "/event1.jpg" },
  { id: 2, title: "Music Festival", date: "20 Sept 2025", location: "Delhi", image: "/event2.jpg" },
];

export default function Home() {
  return (
    <div className="home">
      <h1 className="title">Upcoming Events</h1>
      <div className="events">
        {events.map((event) => <EventCard key={event.id} event={event} />)}
      </div>
    </div>
  );
}
