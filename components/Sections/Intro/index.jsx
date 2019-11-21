/* eslint-disable react/jsx-one-expression-per-line, react/jsx-max-props-per-line */
import React from 'react';

import IconTwitter from '../../Icons/Twitter';
import IconInstagram from '../../Icons/Instagram';
import IconLinkedIn from '../../Icons/LinkedIn';

import styles from './index.css';

const Intro = () => (
  <section>
    <h3>Intro</h3>
    <h1 className={styles.title}>
      Hey there!
      <span
        aria-label="Hand-waving"
        className={styles.emoji}
        role="img"
      >
        👋
      </span>
      I’m Pedro Menezes, a Frontend Engineer with 5+ years of experience.
    </h1>
    <p className={styles.desc}>
      Born in <a href="https://goo.gl/maps/JKzFsCU6FQJB25Pa7" rel="noopener noreferrer" target="_blank">Natal, Brazil</a>. Currently based in <a href="https://goo.gl/maps/QUQAGfp2n1VfRAY89" rel="noopener noreferrer" target="_blank">Porto, Portugal</a>.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend, diam at dignissim iaculis, lectus urna viverra lacus, eget feugiat nibh risus in lorem. In accumsan tortor id viverra faucibus.
    </p>
    <ul className={styles.navList}>
      <li className={styles.navItem}>
        <a
          className={styles.navItemLink}
          href="https://twitter.com/pedrofelipee"
          rel="noopener noreferrer"
          target="_blank"
        >
          <IconTwitter className={styles.navIcon} />
        </a>
      </li>
      <li className={styles.navItem}>
        <a
          className={styles.navItemLink}
          href="https://instagram.com/pedrofelipem"
          rel="noopener noreferrer"
          target="_blank"
        >
          <IconInstagram className={styles.navIcon} />
        </a>
      </li>
      <li className={styles.navItem}>
        <a
          className={styles.navItemLink}
          href="https://www.linkedin.com/in/pedrofelipem"
          rel="noopener noreferrer"
          target="_blank"
        >
          <IconLinkedIn className={styles.navIcon} />
        </a>
      </li>
    </ul>
  </section>
);

export default Intro;
