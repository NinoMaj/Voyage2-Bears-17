import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { signinUser } from '../../actions/userActions';
import { Form } from './style';

class Signin extends Component {
  handleFormSubmit({ email, password }) {
    this.props.signinUser({ email, password }, () => {
      // if everything OK navigate to home
      this.props.history.push('/');
    });
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Ooops. </strong>{this.props.errorMessage}
        </div>
      );
    }
    return null;
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label htmlFor="email">Email:</label>
          <Field
            name="email"
            component="input"
            type="text"
            className="form-control"
          />
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="password">Password:</label>
          <Field
            name="password"
            component="input"
            type="password"
            className="form-control"
          />
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign in</button>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.user.error };
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password'],
})(connect(mapStateToProps, { signinUser })(Signin));
