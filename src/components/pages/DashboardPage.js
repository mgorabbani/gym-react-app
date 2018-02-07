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
import AddMemberPage from '../pages/AddMemberPage'
import MemberListPage from '../pages/MemberListPage'
class DashboardPage extends React.Component {
  render() {
    const { isConfirmed, location } = this.props;
    console.log(location, 'see')
    return (
      <div className="container-fluid">
        <div className="row">
          <aside className="col-md-2" style={{ background: "#009688", }}>
            <HomeSideNavigation />
          </aside>
          <div className="col-md-10">
            <Route path="/dashboard/add-member" component={AddMemberPage} />
            <Route path="/dashboard/members" component={MemberListPage} />
          </div>
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
