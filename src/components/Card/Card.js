import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import s from './Card.scss';

function Card({ idea }) {
  return (
    <div className={ cx('col', 's12', 'm4', 'l3', s.noPadding) } >
      <div className="card" >
        <div className="card-image">
          <img src="https://placehold.it/400x350" alt="Idea" />
          <span className="card-title">Idea Title: { idea.title }
            <br />
            <span className={ cx('white-text', s.smallText, s.bottomLeft) } >idea description</span>
          </span>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  idea: PropTypes.object.isRequired,
};

export default withStyles(s)(Card);
