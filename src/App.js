import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Loader from "react-loader";
import { IntlProvider } from "react-intl";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/DashboardPage";
import SignupPage from "./components/pages/SignupPage";
import ConfirmationPage from "./components/pages/ConfirmationPage";
import ForgotPasswordPage from "./components/pages/ForgotPasswordPage";
import ResetPasswordPage from "./components/pages/ResetPasswordPage";
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";
import TopNavigation from "./components/navigation/TopNavigation";
import CharactersPage from "./components/pages/CharactersPage";
import NewCharacterPage from "./components/pages/NewCharacterPage";
import { fetchCurrentUser } from "./actions/users";
import messages from "./messages";
import {
  Route
} from 'react-router-dom'

class App extends React.Component {
  componentDidMount() {
    if (this.props.isAuthenticated) this.props.fetchCurrentUser();

  }

  render() {
    const { location, isAuthenticated, loaded, lang } = this.props;
    console.log(isAuthenticated, 'fffff')
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>

        <div>

          <Loader loaded={loaded}>
            <TopNavigation />

            <GuestRoute location={location} path="/" exact component={HomePage} />
            <Route
              location={location}
              path="/confirmation/:token"
              exact
              component={ConfirmationPage}
            />
            <GuestRoute
              location={location}
              path="/login"
              exact
              component={LoginPage}
            />
            <GuestRoute
              location={location}
              path="/signup"
              exact
              component={SignupPage}
            />
            <GuestRoute

              location={location}
              path="/forgot_password"
              exact
              component={ForgotPasswordPage}
            />
            <GuestRoute
              location={location}
              path="/reset_password/:token"
              exact
              component={ResetPasswordPage}
            />
            <UserRoute
              location={location}
              path="/dashboard"
              component={DashboardPage}
            />
            <UserRoute
              location={location}
              path="/characters"
              exact
              component={CharactersPage}
            />
            <UserRoute
              location={location}
              path="/characters/new"
              exact
              component={NewCharacterPage}
            />

          </Loader>
        </div>
      </IntlProvider>
    );
  }
}
App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  fetchCurrentUser: PropTypes.func.isRequired,
  loaded: PropTypes.bool.isRequired,
  lang: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.email,
    loaded: state.user.loaded,
    lang: state.locale.lang
  };
}

export default connect(mapStateToProps, { fetchCurrentUser })(App);
