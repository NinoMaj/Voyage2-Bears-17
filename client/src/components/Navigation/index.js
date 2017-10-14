import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  Navigation,
  NavUl,
  NavLi,
} from './style';

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <NavLi className="nav-item">
          <Link className="nav-link" to="/signout">Sign out</Link>
        </NavLi>
      );
    }
    return [
      <NavLi className="nav-item" key={1}>
        <Link className="nav-link" to="/signin">Sign In</Link>
      </NavLi>,
      <NavLi className="nav-item" key={2}>
        <Link className="nav-link" to="/signup">Sign Up</Link>
      </NavLi>,
    ];
  }

  render() {
    return (
      <Navigation>
        <nav className="navbar navbar-light">
          <Link to="/" className="navbar-brand">Home page</Link>
          <NavUl className="navbar-nav">
            {this.renderLinks()}
          </NavUl>
        </nav>
      </Navigation>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.user.isLoggedIn,
  };
}

export default connect(mapStateToProps)(Header);
