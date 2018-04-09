import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SignupForm from "../forms/SignupForm";
import { signup } from "../../actions/users";

class SignupPage extends React.Component {
  submit = data =>
    this.props.signup(data).then(() => this.props.history.push("/dashboard"));

  render() {
    return (
      <div className="" style={{ height: "100vh", }}>
        <div class="row no-gutters w-100">
          <div class="col-xl-7 col-lg-6 col-md-5">
            <img src={require('../../assets/background-hero-login.jpg')} alt="" className="img-responsive" />
          </div>
          <div class="col-xl-5 col-lg-6 col-md-7 d-flex align-items-center justify-content-center">
            <div>
              <h1 class="main-content__right--title mb-4">Good Morning</h1>
              <p class="main-content__right--text lead">Welcome, please register to make your account.</p>
              <SignupForm submit={this.submit} />

            </div>
          </div>
        </div>
      </div>

    );
  }
}

SignupPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  signup: PropTypes.func.isRequired
};

export default connect(null, { signup })(SignupPage);
