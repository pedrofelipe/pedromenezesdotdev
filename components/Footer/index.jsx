import React from 'react';

import styles from './index.css';

const Footer = () => (
  <footer className={styles.footer}>
    Pedro Menezes
    <span
      aria-label="Globe emoji"
      className={styles.emoji}
      role="img"
    >
        🌎
    </span>
    {new Date().getFullYear()}
  </footer>
);

export default Footer;
