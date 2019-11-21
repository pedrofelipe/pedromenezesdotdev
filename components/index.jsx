import React from 'react';

import styles from './styles/index.css';
import AppHead from './AppHead';
import Footer from './Footer';
import {
  Career,
  Intro,
  PersonalProjects,
  WorkExperience,
} from './Sections';

const App = () => (
  <>
    <AppHead />
    <main className={styles.container}>
      <Intro />
      <Career />
      <WorkExperience />
      <PersonalProjects />
      <Footer />
    </main>
  </>
);

export default App;
