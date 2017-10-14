import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signoutUser } from '../../actions/userActions';

class SignOut extends Component {
  componentWillMount() {
    this.props.signoutUser();
  }

  render() {
    return (
      <div>Goodbye and see you soon. Right?</div>
    );
  }
}

export default connect(null, { signoutUser })(SignOut);
