import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './NavBar.scss';
import cx from 'classnames';


function NavBar({ user }) {
  return (
    <nav className="white">
      <div className="nav-wrapper" >
        <a href="#" className="blue-grey-text text-darken-4 brand-logo">FeduLab</a>
        <ul className="right hide-on-med-and-down">
          <li>
            <form>
              <div className="input-field">
                <input id="search" type="search" required />
                <label htmlFor="search">
                  <i className="blue-grey-text text-darken-4 material-icons">search</i>
                </label>
                <i className="material-icons">close</i>
              </div>
            </form>
          </li>
          <li>
            <a href="#" className="waves-effect waves-light blue-grey darken-4 btn">
              + Create
            </a>
          </li>
          <li className={ cx(s.padRight, 'text-darken-4', 'blue-grey-text') }>
            Browse
          </li>
          <li className={ s.padRight }>
            <img className="responsive-img circle" src={ user.image } alt="user" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  user: PropTypes.object,
};

export default withStyles(s)(NavBar);
