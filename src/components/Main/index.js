import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BookTagContent from '../Book/BookTagContent';
import BookTagMoreContent from '../Book/BookTagMoreContent';
import BookTypeContent from '../Book/BookTypeContent';
import MovieTypeContent from '../Movie/MovieTypeContent';
import MovieTagContent from '../Movie/MovieTagContent';
import MusicTagContent from '../Music/MusicTagContent';
import CityActivity from '../City/CityActivity';
import styles from './main.scss';

export default function Main() {
  return (
    <main className={styles['main-content']}>
      <Switch>
        <Route exact path="/" component={BookTagContent} />
        <Route exact path="/book-tag" component={BookTagContent} />
        <Route
          exact
          path="/book-tag-more-info"
          component={BookTagMoreContent}
        />
        <Route exact path="/book-type" component={BookTypeContent} />
        <Route exact path="/movie-show-time" component={MovieTypeContent} />
        <Route exact path="/movie-tag" component={MovieTagContent} />
        <Route exact path="/music-tag" component={MusicTagContent} />
        <Route exact path="/city" component={CityActivity} />
      </Switch>
    </main>
  );
}
