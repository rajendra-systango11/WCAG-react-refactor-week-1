import EventCard from "../components/EventCard";

const events = [
  { id: 1, title: "Tech Conference", date: "12 Sept 2025", location: "Bangalore", image: "https://picsum.photos/400/250?random=1" },
  { id: 2, title: "Music Festival", date: "20 Sept 2025", location: "Delhi", image: "https://picsum.photos/400/250?random=2" },
];

export default function Home() {
  return (
    <main className="home">
      <h1 className="title">Upcoming Events</h1>
      <div className="events">
        {events.map((event) => <EventCard key={event.id} event={event} />)}
      </div>
    </main>
  );
}
