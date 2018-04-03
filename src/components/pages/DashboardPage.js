import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";
import UserRoute from "../../components/routes/UserRoute";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink as RouterNavLink,
  Redirect,
  Switch
} from 'react-router-dom'
import HomeSideNavigation from '../navigation/HomeSideNavigation'
import AddMemberPage from './AddMemberPage'
import MemberListPage from './MemberListPage'
import SettingPage from './SettingPage'
import MainDashboardPage from './MainDashboardPage'
import AttendancePage from './AttendancePage'
class DashboardPage extends React.Component {
  render() {
    const { isConfirmed, location } = this.props;
    console.log(location, 'see')
    return (
      <div className="container-fluid">
        <div className="row">
          <aside className="col-md-2" style={{ background: "#81ADD7", }}>
            <HomeSideNavigation />
          </aside>
          <div className="col-md-10">
            <Switch>
              <Route exact path="/dashboard/" component={MainDashboardPage} />
              <Route path="/dashboard/add-member" component={AddMemberPage} />
              <Route path="/dashboard/members" component={MemberListPage} />
              <Route path="/dashboard/setting" component={SettingPage} />
              <Route path="/dashboard/attendance" component={AttendancePage} />
            </Switch>
          </div>
          <footer style={{ bottom: 0, margin: '20px auto' }}>
            <p>&copy; 2018, All rights are reserved. Made with ❤️ by Golam Rabani.🚀🚀🚀</p>
          </footer>
        </div>

      </div>
    );
  }
}
DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed
  };
}

export default connect(mapStateToProps)(DashboardPage);
