import React from "react";

import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import { NavLink as RouterNavLink } from "react-router-dom";

import { FormattedMessage } from "react-intl";
class HomeSideNavigation extends React.Component {

  render() {
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
          {/* <NavItem>
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
          </NavItem> */}
        </Nav>
      </Navbar>
    );
  }
}


export default HomeSideNavigation;
