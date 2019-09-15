import React from 'react';

import styles from './index.css';

const Footer = () => (
  <footer className={styles.container}>
    <p className={styles.copyleft}>
      Pedro Menezes
      <span
        aria-label="Globe emoji"
        className={styles.emoji}
        role="img"
      >
        🌎
      </span>
      {`1995 - ${new Date().getFullYear()}`}
    </p>
  </footer>
);

export default Footer;
