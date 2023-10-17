import React from "react";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <section className="frontpage">
      <h1>WHAT IS YOUR TAYLOR SWIFT ERA?</h1>

      <div>
        <Link to="/Era1989">
          <button className="era1989Btn">1989</button>
        </Link>

        <Link to="/reputation">
          <button className="reputationBtn">reputation</button>
        </Link>

        <Link to="/lover">
          <button className="loverBtn">Lover</button>
        </Link>

        <Link to="/folklore">
          <button className="folkloreBtn">folklore</button>
        </Link>
        <Link to="/midnights">
          <button className="midnightsBtn">Midnights</button>
        </Link>
      </div>
    </section>
  );
}
