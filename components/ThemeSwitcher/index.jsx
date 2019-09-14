import React from 'react';

import styles from './index.scss';

const ThemeSwitcher = () => {
  const setDarkMode = () => document.body.setAttribute('data-theme', 'dark');

  const unsetDarkMode = () => document.body.removeAttribute('data-theme');

  const handleOnChange = (e) => {
    const {
      target: {
        checked,
      },
    } = e;

    if (checked) return setDarkMode();

    return unsetDarkMode();
  };

  return (
    <div className={styles.themeSwitcher}>
      <input
        className={styles.selected}
        id="themeSwitcher"
        onChange={handleOnChange}
        type="checkbox"
      />
      <label
        aria-hidden="true"
        className={styles.label}
        htmlFor="themeSwitcher"
      >
        On
      </label>
      <div
        aria-hidden="true"
        className={styles.marker}
      />
    </div>
  );
};

export default ThemeSwitcher;
