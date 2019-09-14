import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.scss';

const Grid = ({children}) => (
  <div className={styles.container}>
    {children}
  </div>
);

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Grid;
