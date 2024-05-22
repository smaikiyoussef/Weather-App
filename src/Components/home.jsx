import React from "react";
import Navbar from "./navbar";
import Weather from "./weather";

export default function Home() {
  return (
    <div className="home">
      <Navbar />

      <div className="container">
        <Weather />
      </div>
    </div>
  );
}
