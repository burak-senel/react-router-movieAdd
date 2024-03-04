import React, { useState } from 'react';

import KaydedilenlerListesi from './components/KaydedilenlerListesi';
import Film from './components/Film';
import { movies } from './sahteVeri';
import { Route, Switch } from 'react-router-dom';
import FilmListesi from './components/FilmListesi';

export default function App() {
  const [kaydedilmisFilmler, setKaydedilmisFilmler] = useState([]);
  const [filmler, setFilmler] = useState(movies);
  const KaydedilenlerListesineEkle = (movie) => {
    if (kaydedilmisFilmler.find((savedMovie) => savedMovie.id === movie.id)) {
      return;
    }
    setKaydedilmisFilmler([...kaydedilmisFilmler, movie]);
  };

  return (
    <div>
      <KaydedilenlerListesi list={kaydedilmisFilmler} />
      {
        <Switch>
          <Route exact path="/">
            <FilmListesi movies={filmler} />
          </Route>
          <Route path="/filmler/:id">
            <Film KaydedilenlerListesineEkle={KaydedilenlerListesineEkle} />
          </Route>
        </Switch>
      }
    </div>
  );
}
