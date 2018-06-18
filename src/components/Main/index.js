import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BookTagContent from '../Book/BookTagContent';
import BookTagMoreContent from '../Book/BookTagMoreContent';
import BookTypeContent from '../Book/BookTypeContent';
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
      </Switch>
    </main>
  );
}
