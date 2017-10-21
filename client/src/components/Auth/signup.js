import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { signupUser } from '../../actions/userActions';
import { Form } from './style';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <input {...input} className="form-control" placeholder={label} type={type} />
    {touched && error && <span className="text-danger">{error}</span>}
  </div>
);

class Signup extends Component {
  handleFormSubmit({ email, password }) {
    this.props.signupUser({ email, password }, () => {
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
            type="email"
            component={renderField}
            label="yourname@example.com"
          />
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="password">Password:</label>
          <Field
            name="password"
            type="password"
            component={renderField}
          />
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="password">Confirm Password:</label>
          <Field
            name="passwordConfirm"
            type="password"
            component={renderField}
          />
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary btn-block">Sign Up</button>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.user.error };
}

function validate(formProps) {
  const errors = {};

  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }

  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation';
  }

  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match';
  }

  return errors;
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate,
})(connect(mapStateToProps, { signupUser })(Signup));
