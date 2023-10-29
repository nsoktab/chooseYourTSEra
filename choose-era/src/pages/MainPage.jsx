import React from "react";
import { Link } from "react-router-dom";

export default function MainPage() {
  const handleButtonClick = async (buttonId) => {
    // Fetch the current click count from Firebase
    const url = `https://taylorswiftera-default-rtdb.europe-west1.firebasedatabase.app/buttons/${buttonId}/clicks.json`;
    const response = await fetch(url);
    const currentClicks = await response.json();

    // Calculate the new click count by incrementing the current value by 1
    const newClicks = (currentClicks || 0) + 1;

    // Update the click count in Firebase
    await fetch(url, {
      method: "PUT", // Use PUT to set the new value
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newClicks),
    });
  };

  return (
    <section className="frontpage">
      <h1>WHAT IS YOUR TAYLOR SWIFT ERA?</h1>

      <div>
        <Link to="/Era1989">
          <button
            className="era1989Btn"
            onClick={() => handleButtonClick("era1989Btn")}
          >
            1989
          </button>
        </Link>

        <Link to="/reputation">
          <button
            className="reputationBtn"
            onClick={() => handleButtonClick("reputationBtn")}
          >
            reputation
          </button>
        </Link>

        <Link to="/lover">
          <button
            className="loverBtn"
            onClick={() => handleButtonClick("loverBtn")}
          >
            Lover
          </button>
        </Link>

        <Link to="/folklore">
          <button
            className="folkloreBtn"
            onClick={() => handleButtonClick("folkloreBtn")}
          >
            folklore
          </button>
        </Link>
        <Link to="/midnights">
          <button
            className="midnightsBtn"
            onClick={() => handleButtonClick("midnightsBtn")}
          >
            Midnights
          </button>
        </Link>
      </div>
    </section>
  );
}
