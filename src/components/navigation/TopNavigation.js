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

            {
              user.username && <NavItem style={{ color: '#fff', marginTop: '8px' }}>
                Howdy, {user.username}!
              </NavItem>
            }

          </Nav>
          <Nav navbar>

            <UncontrolledDropdown nav>
              <DropdownToggle nav>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJOSURBVEhL5ZbbThNRFIYLT6LyBp5voZ3Sdk9bp50ppaaNF+iNVuMTNDGUUqC0RY4xAUkw0QujL4AXorcKBX0AOTyC0wN2u/9hwQxQhjIQbviSnTSdf/3T2Xutf+q6mrhZ5IY7EH0pBbVFFnm4jIXPHqa+wDWSOcfjU+4zJfFdGPJHT9L6+MQsX3z3wViF8kwz9Tit4xo0PUy9S2Xtk8lkOr0hLS/JWnO4MLG7tb3DT2Jza4fnRsu70ErBWA61ZGMPhP5w/HMolqpVNn6T3emsrf/iYS1Z9z2IfxI2HXtuNkiyOhyOpep2T3ESqMEP9MjaENm1RgpE72ELzvIkR/m5ts7h4fFHb5PtcXCoOBOqcczQaKkRUBIrZHuYbl9fFzoIh7vPX13nI8VJ/ipXsF3QQLsPPOAlBdXrZG+COUELk9agWqvxt0vv+ZuFJdsFDbRWUgPPdOH5nOxNvHJsAbNBunMzVppqSkybJ3sTpvR/wSBaqVarfGpunhdfz9ouaKC1Ai8WSSyTvcml3ejStg7NgOwincF5miE58FQ0g5ome5OLbO8/m9tGe/f29l0j+8MElP5vIiAbpHdMNl/EwH4l2+O4ZeUO4mO1skElZ+fHagVP88/LtFtk2xqJqTkEo5NQxbajViTCINnZ0oGoR+Qj+tsFYRpSk3XxivkIjz2rU8A7CVGPbcyOlBrWBjkKDn4wP94wXnyymhXl7d3ECqLer8RX0EHIrrHydBODiIU5QQvjGpK6R1ZuUplzkMIISAzgwZ8T8dn4rlVCXwFcrv/mJtP4PKP7MAAAAABJRU5ErkJggg==" />
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
