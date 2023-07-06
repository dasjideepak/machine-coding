// Star Rating Challenge

// - Render 5 stars.
// - When a user hovers on a star, fill that star.
// - When a star is filled, make sure that all the stars before it are also filled.

import React, { useState } from "react";

export default function StarRating({
  totalStar = 5,
  starStyle = {
    fontSize: "4rem",
    margin: "0 8px",
    color: "#FFD700",
  },
}) {
  const [rating, setRating] = useState(0);
  return (
    <div>
      <h1>Star Rating</h1>
      {[...Array(totalStar)]?.map((_, index) => (
        <span
          key={index}
          className={`fa ${rating > index ? "fa-star" : "fa-star-o"}`}
          style={{ ...starStyle }}
          onClick={() => setRating(index + 1)}
        />
      ))}
    </div>
  );
}
