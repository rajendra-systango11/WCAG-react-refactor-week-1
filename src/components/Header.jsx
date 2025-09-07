import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">Eventify</div>
      <nav className="menu" aria-label="Main navigation">
        <span><Link to="/">Home</Link></span>
        <span><Link to="/about">About</Link></span>
      </nav>
    </header>
  );
}
