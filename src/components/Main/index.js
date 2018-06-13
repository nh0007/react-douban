import React from 'react';
import BookTagContent from '../Book/BookTagContent';
import styles from './main.scss';

export default function Main() {
  return (
    <main className={styles['main-content']}>
      <BookTagContent />
    </main>
  );
}
