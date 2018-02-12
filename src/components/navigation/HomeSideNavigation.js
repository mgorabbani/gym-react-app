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
class HomeSideNavigation extends React.Component {

  render() {
    const { user, logout } = this.props;

    return (
      <Navbar dark expand="sm" color="faded">

        <Nav vertical navbar>
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
          <NavItem>
            <NavLink
              tag={RouterNavLink}
              activeClassName="active"
              to="/dashboard/add-member"
            >
              <FormattedMessage id="nav.addMember" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tag={RouterNavLink}
              activeClassName="active"
              to="/dashboard/members"
            >
              <FormattedMessage
                id="nav.characters"
                defaultMessage="Find Member"
              />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tag={RouterNavLink}
              activeClassName="active"
              to="/dashboard/attendance"
            >
              <FormattedMessage
                id="nav.characters"
                defaultMessage="Attendance"
              />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tag={RouterNavLink}
              activeClassName="active"
              to="/dashboard/report"
            >
              <FormattedMessage
                id="nav.characters"
                defaultMessage="Report"
              />
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}


export default HomeSideNavigation;
