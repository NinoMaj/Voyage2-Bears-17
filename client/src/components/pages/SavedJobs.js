import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMessage } from '../../actions/userActions';

class SavedJobs extends Component {
  componentWillMount() {
    this.props.fetchMessage();
  }

  render() {
    return (
      <div>
        Saved Jobs page
      </div>
    );
  }
}

export default connect(null, { fetchMessage })(SavedJobs);
