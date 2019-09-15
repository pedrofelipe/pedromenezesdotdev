import React from 'react';

import ThemeSwitcher from '../ThemeSwitcher';
import IconTwitter from '../Icons/Twitter';
import IconInstagram from '../Icons/Instagram';
import IconLinkedIn from '../Icons/LinkedIn';

import styles from './index.css';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <h1 className={styles.title}>Pedro Menezes</h1>
      <div className={styles.right}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a
                href="https://twitter.com/pedrofelipee"
                rel="noopener noreferrer"
                target="_blank"
              >
                <IconTwitter className={styles.navIcon} />
              </a>
            </li>
            <li className={styles.navItem}>
              <a
                href="https://instagram.com/pedrofelipem"
                rel="noopener noreferrer"
                target="_blank"
              >
                <IconInstagram className={styles.navIcon} />
              </a>
            </li>
            <li className={styles.navItem}>
              <a
                href="https://www.linkedin.com/in/pedrofelipem"
                rel="noopener noreferrer"
                target="_blank"
              >
                <IconLinkedIn className={styles.navIcon} />
              </a>
            </li>
          </ul>
        </nav>
        <ThemeSwitcher />
      </div>
    </div>
  </header>
);

export default Header;
