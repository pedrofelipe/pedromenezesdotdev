import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({className}) => (
  <svg
    className={className}
    height={12}
    viewBox="0 0 9 12"
    width={9}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.215 0A4.21 4.21 0 0 1 8.43 4.21c0 2.188-2.176 4.85-3.341 6.868-.713 1.235-1.041 1.223-1.746.002C2.178 9.062 0 6.398 0 4.21A4.21 4.21 0 0 1 4.215 0zM4.21 2.261a1.948 1.948 0 1 1 0 3.897 1.948 1.948 0 0 1 0-3.897z"
      fillRule="evenodd"
    />
  </svg>
);

Icon.propTypes = {
  className: PropTypes.string,
};

Icon.defaultProps = {
  className: undefined,
};

export default Icon;
