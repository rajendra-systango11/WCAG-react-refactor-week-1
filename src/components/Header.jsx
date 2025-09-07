import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">Eventify</div>
      <div className="menu">
        <span><Link to="/">Home</Link></span>
        <span><Link to="/about">About</Link></span>
      </div>
    </div>
  );
}
