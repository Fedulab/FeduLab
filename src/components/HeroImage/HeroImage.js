import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './HeroImage.scss';
import cx from 'classnames';

function HeroImage({ title, image }) {
  return (
    <div className={ cx(s.heroCard, 'card') }>
      <div className="card-image">
        <img src={ image } alt="Idea" />
        <span className="valign-wrapper">
          <h1 className={ cx('card-title', 'valign', s.heroText) }>
            { title }
          </h1>
        </span>
      </div>
    </div>
  );
}

HeroImage.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default withStyles(s)(HeroImage);
