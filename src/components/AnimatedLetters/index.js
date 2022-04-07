import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

function AnimatedLetters({ letterClass, stringArray, index }) {
  return (
    <span>
      {stringArray.map((char, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <span key={char + i} className={`${letterClass} _${i + index}`}>
          {char}
        </span>
      ))}
    </span>
  );
}

export default AnimatedLetters;

AnimatedLetters.propTypes = {
  letterClass: PropTypes.string.isRequired,
  stringArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
};
