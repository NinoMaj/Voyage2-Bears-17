import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Navigation, NavUl, NavLi, HideTabOnXS, HideTabOnXSActive, Nav } from './style';
import logo from '../../briefcase.svg';

class Header extends Component {
  constructor() {
    super();

    this.state = { isJobsActive: false };
  }

  handleJobPageClick = e => this.setState({ isJobsActive: true });
  handleNonJobPageClick = e => this.setState({ isJobsActive: false });

  renderLinks() {
    if (this.props.authenticated) {
      return (
        <NavLi
          className="nav-item"
          onClick={this.handleNonJobPageClick}
        >
          <Link className="nav-link" to="/signout">
            SIGN OUT
          </Link>
        </NavLi>
      );
    }
    return [
      <NavLi
        className="nav-item"
        key={1}
        onClick={this.handleNonJobPageClick}
      >
        <Link className="nav-link" to="/signin">
          SIGN IN
        </Link>
      </NavLi>,
      <NavLi
        className="nav-item"
        key={2}
        onClick={this.handleNonJobPageClick}
      >
        <Link className="nav-link" to="/signup">
          SIGN UP
        </Link>
      </NavLi>,
    ];
  }

  render() {
    return (
      <Navigation>
        <Nav className="navbar navbar-inverse fixed-top">
          <NavUl className="navbar-nav">
            <NavLi className="nav-item">
              <Link
                to="/"
                className="nav-link"
                onClick={this.handleNonJobPageClick}
              >
                <img src={logo} style={{ height: 35 }} alt="logo" />
              </Link>
            </NavLi>
            { this.state.isJobsActive ?
              <HideTabOnXSActive
                className="nav-item"
              >
                <Link className="nav-link" to="/jobs">
                  EXPLORE JOBS
                </Link>
              </HideTabOnXSActive>
              :
              <HideTabOnXS
                className="nav-item"
                onClick={this.handleJobPageClick}
              >
                <Link className="nav-link" to="/jobs">
                  EXPLORE JOBS
                </Link>
              </HideTabOnXS>
            }
          </NavUl>

          <NavUl className="nav navbar-nav navbar-right nav-auth">
            {this.renderLinks()}
          </NavUl>
        </Nav>
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
