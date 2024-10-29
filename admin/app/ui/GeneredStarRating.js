import React from 'react';
import style from '@/app/styles/Stars.module.scss'

export default function GeneredStarRating({ rating }) {
  const maxStars = 5;
  const starRating = Math.round(rating / 20); // Utiliser la prop `rating` pour calculer correctement la note

  const generateStars = () => {
    const stars = [];
    for (let note = 1; note <= maxStars; note++) {
      stars.push(
        <span key={note} className={`${style.star} ${note <= starRating ? style.filled : ''}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className={style.stars}>
      {generateStars()}
    </div>
  );
}
