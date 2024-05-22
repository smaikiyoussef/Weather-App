import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="navtitle">
        <Link to="/">
          <img src="/logo512.png" alt="Logo" />
          <h1>Weather App</h1>
        </Link>
      </div>
    </nav>
  );
}
