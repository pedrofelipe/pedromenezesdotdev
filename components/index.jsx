import React from 'react';

import styles from './styles/index.css';
import AppHead from './AppHead';
import Footer from './Footer';
import {
  Intro,
  Career,
} from './Sections';

import './styles/resets.css';

const App = () => (
  <>
    <AppHead />
    <div className={styles.container}>
      <Intro />
      <Career />
      <Footer />
    </div>
  </>
);

export default App;
