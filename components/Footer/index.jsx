import React from 'react';

import styles from './index.scss';

const Footer = () => (
  <footer className={styles.container}>
    <p className={styles.content}>
      <span
        aria-label="Globe emoji"
        className={styles.emoji}
        role="img"
      >
        🌎
      </span>
      1995-{new Date().getFullYear()}
    </p>
  </footer>
);

export default Footer;
