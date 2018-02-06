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
import gravatarUrl from "gravatar-url";
import { FormattedMessage } from "react-intl";
import * as actions from "../../actions/auth";
import { setLocale } from "../../actions/locale";

class HomeSideNavigation extends React.Component {

  render() {
    const { user, logout } = this.props;

    return (
      <Navbar light expand="sm" color="faded">

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
              <FormattedMessage
                id="nav.characters"
                defaultMessage="Add Member"
              />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tag={RouterNavLink}
              activeClassName="active"
              to="/dashboard/find-member"
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
