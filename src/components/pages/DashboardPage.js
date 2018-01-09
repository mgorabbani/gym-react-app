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
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: '/bubblegum',
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>
  },
  {
    path: '/shoelaces',
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  }
]
class DashboardPage extends React.Component {
  render() {
    const { isConfirmed, location } = this.props;
    console.log(location, 'see')
    return (
      <div>
        <NavLink
          tag={RouterNavLink}
          activeClassName="active"
          to="/dashboard/help"> Helpp </NavLink>
        <Router>
          <div style={{ display: 'flex' }}>
            <div style={{
              padding: '10px',
              width: '40%',
              background: '#f0f0f0'
            }}>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/bubblegum">Bubblegum</Link></li>
                <li><Link to="/shoelaces">Shoelaces</Link></li>
              </ul>

              {routes.map((route, index) => (
                // You can render a <Route> in as many places
                // as you want in your app. It will render along
                // with any other <Route>s that also match the URL.
                // So, a sidebar or breadcrumbs or anything else
                // that requires you to render multiple things
                // in multiple places at the same URL is nothing
                // more than multiple <Route>s.
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.sidebar}
                />
              ))}
            </div>

            <div style={{ flex: 1, padding: '10px' }}>
              {routes.map((route, index) => (
                // Render more <Route>s with the same paths as
                // above, but different components this time.
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))}
            </div>
          </div>
        </Router>
      </div>
    );
  }
}
const Hi = () => (<p>Hi!</p>);
DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed
  };
}

export default connect(mapStateToProps)(DashboardPage);
