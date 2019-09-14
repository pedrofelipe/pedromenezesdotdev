import React from 'react';
import classNames from 'classnames';

import AppHead from './AppHead';
import Grid from './Grid';
import Header from './Header';
import ContentBlock from './ContentBlock';
import Footer from './Footer';
import IconLocation from './Icons/Location';
import styles from './styles/components.scss';

import './styles/resets.scss';
import './styles/index.scss';

const App = () => (
  <>
    <AppHead />
    <Grid>
      <Header />
      <ContentBlock
        className={styles.section}
        content={(
          <>
            <p>
              Hey there! I’m Pedro Menezes, a Frontend Engineer from Brazil with 5+ years of experience. I’m currently living in
              {' '}
              <a
                className={styles.location}
                href="https://goo.gl/maps/bUGQRoGwVwAp49KG6"
                rel="noopener noreferrer"
                target="_blank"
              >
                <IconLocation /> Porto, Portugal
              </a>.
            </p>
            <p>
              My professional path started around 2012 with some freelance jobs. Back then,
              I used to describe myself as a full stack developer, as I mostly did HTML, CSS, PHP and some JavaScript.
              Somewhere back there I switched my focus to WordPress, which last until 2014,
              when new opportunities led me to a career focused on frontend
              technologies and its ecosystem.
            </p>
            <p>
              From freelances and marketing agencies at the beginning, then a developer consultant
              for US companies, I moved to Europe in 2018 for a position at
              {' '}
              <a
                href="https://kununu.com"
                target="_blank" /* eslint-disable-line react/jsx-no-target-blank */
              >
                kununu
              </a>
              {' '}
              (a XING company)
            </p>
            <p />
          </>
        )}
      />
      <Footer />
    </Grid>
  </>
);

export default App;
