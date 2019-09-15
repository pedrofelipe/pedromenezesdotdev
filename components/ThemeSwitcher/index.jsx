import React, {useState, useEffect} from 'react';

import styles from './index.css';

const ThemeSwitcher = () => {
  const [isDarkMode, setDarkMode] = useState();

  const enableDarkMode = () => {
    document.body.setAttribute('data-theme', 'dark');
    localStorage.setItem('data-theme', 'dark');
    setDarkMode(true);
  };

  const disableDarkMode = () => {
    document.body.removeAttribute('data-theme');
    localStorage.removeItem('data-theme');
    setDarkMode(false);
  };

  useEffect(() => {
    const selectedTheme = localStorage.getItem('data-theme');

    if (selectedTheme === 'dark') return enableDarkMode();

    return disableDarkMode();
  });

  const handleOnChange = (e) => {
    const {
      target: {
        checked,
      },
    } = e;

    if (checked) return enableDarkMode();

    return disableDarkMode();
  };

  return (
    <div className={styles.themeSwitcher}>
      <input
        checked={isDarkMode}
        className={styles.selected}
        id="themeSwitcher"
        onChange={handleOnChange}
        type="checkbox"
      />
      <label // eslint-disable-line jsx-a11y/label-has-associated-control
        aria-hidden="true"
        className={styles.label}
        htmlFor="themeSwitcher"
      >
        Toggle dark mode
      </label>
      <div
        aria-hidden="true"
        className={styles.marker}
      />
    </div>
  );
};

export default ThemeSwitcher;
