"use client"
import { useState } from 'react';

export default function RatingSystem() {
  const [selectedRating, setSelectedRating] = useState(0);

  const handleStarClick = (value) => {
    setSelectedRating(value);
  };

  return (
    <div>
      <div className="stars">
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            className={`star ${value <= selectedRating ? 'selected' : ''}`}
            onClick={() => handleStarClick(value)}
          >
            ★
          </span>
        ))}
      </div>
      <div className="result">
        <span className="text">
          {selectedRating > 0 ? `Votre note est de ${selectedRating}` : ''}
        </span>
      </div>

      <style jsx>{`
        .stars {
          display: inline-flex;
        }
        .star {
          font-size: 2rem;
          cursor: pointer;
          color: lightgray;
          transition: color 0.2s;
        }
        .star.selected {
          color: gold;
        }
      `}</style>
    </div>
  );
}
