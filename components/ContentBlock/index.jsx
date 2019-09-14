/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

const ContentBlock = ({
  className,
  content,
  icon,
  iconAriaLabel,
  title,
}) => (
  <section className={className}>
    {title && (
      <h2>
        <span
          aria-label={iconAriaLabel}
          role="img"
        >
          {icon}
        </span>
        {' '}
        {title}
      </h2>
    )}
    {content}
  </section>
);

ContentBlock.propTypes = {
  className: PropTypes.string,
  content: PropTypes.node,
  icon: PropTypes.node,
  iconAriaLabel: PropTypes.string,
  title: PropTypes.string,
};

ContentBlock.defaultProps = {
  className: undefined,
  content: undefined,
  icon: undefined,
  iconAriaLabel: undefined,
  title: undefined,
};

export default ContentBlock;
