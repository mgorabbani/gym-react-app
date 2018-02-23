import React from "react";
import PropTypes from "prop-types";
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
import { connect } from "react-redux";
import { NavLink as RouterNavLink } from "react-router-dom";

import { FormattedMessage } from "react-intl";
import * as actions from "../../actions/auth";
import { setLocale } from "../../actions/locale";

class TopNavigation extends React.Component {
  state = {
    isOpen: false
  };

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { user, logout } = this.props;

    return (
      <Navbar dark expand="sm" color="faded" style={{
        backgroundColor: '#3A64A1'
      }}>
        <NavbarBrand tag={RouterNavLink} activeClassName="active" to="/">
          <img src={require('../../assets/gym-management-logo.png')} alt="" />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav navbar className="ml-auto">
            <NavItem>
              <NavLink
                tag={RouterNavLink}
                activeClassName="active"
                to="/dashboard"
              >
                <FormattedMessage
                  id="nav.dashboard"
                  defaultMessage="Dashboard"
                />
              </NavLink>
            </NavItem>


            <NavItem style={{ color: '#fff', marginTop: '8px' }}>
              Howdy, {user.username}!
            </NavItem>
          </Nav>
          <Nav navbar>

            <UncontrolledDropdown nav>
              <DropdownToggle nav>
                drop
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink style={{ color: "#000" }}
                    tag={RouterNavLink}
                    activeClassName="active"
                    to="/dashboard/setting"
                  >My Account
                  </NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={() => logout()}>Logout</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </ Navbar >
    );
  }
}

TopNavigation.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired
  }).isRequired,
  logout: PropTypes.func.isRequired,
  setLocale: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(
  mapStateToProps,
  { logout: actions.logout, setLocale },
  null,
  {
    pure: false
  }
)(TopNavigation);
