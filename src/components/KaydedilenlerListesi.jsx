import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function KaydedilenlerListesi(props) {
  const { list } = props;
  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler:</h3>
      {list.map((movie, index) => (
        <span key={index} className="saved-movie">
          {movie.title}
        </span>
      ))}
      <Link to="/">
        <div className="home-button">Anasayfa</div>
      </Link>
    </div>
  );
}
