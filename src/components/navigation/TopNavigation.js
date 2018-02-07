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

class TopNavigation extends React.Component {
  state = {
    isOpen: false
  };

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { user, logout } = this.props;

    return (
      <Navbar dark expand="sm" color="faded" style={{
        backgroundColor: '#01af9f'
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

            <NavItem>
              <a role="button" style={{ display: 'inline-block', cursor: 'pointer' }} className="nav-link" onClick={() => this.props.setLocale("en")}>
                <img width="25" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAhFBMVEUAAADvjYbwfHSKYpnt7/GKYpp4hcrr7/HwkYnvq6WAd7Xvx8aHaqShaJDLsMOic5vykYzyj4r0Qzbs7/E/UbXvmJPybmTuxMJ7h8zBp77///+HktFvfMfb3/FLW7nz9Pu3vuNjccNsTZSrs99qeMSTndXn6fbP1O3O0+xrXKbNrr9rbbgEiDpcAAAAEnRSTlMAcMDgfuDAgbCgzI7Y2J6UPDtbvABhAAAAz0lEQVRIx+2TSxKCMBBEBQEB/zBgTEIUERS9//1UilUkMRW0KKy8Re/epqdnYjD8L+upiKUtwWpkF0ScIgn2V2QCwAelSnKYZ4cjcFFWVQn3nYR5I3uQYQRcMIwZnGMJTisjRIELRoiiLEBFdqGzMVYqtn3BV8YFfdamJhe44KKpTUFevI5K3oKgvE4l+P0L8wQLU5NFC1ORQ+HC6kRC0LYtWFivl/y5vNqLuH1+yVmshTOwbEda2APLfqqFP+ZTBYkWwZjvvLG02E4MBkMXD5MAkJrGRHOLAAAAAElFTkSuQmCC" />
              </a>
              <a role="button" className="nav-link" style={{ display: 'inline-block', cursor: 'pointer' }} onClick={() => this.props.setLocale("bn")}>
                <img width="25" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGnSURBVGhD7ZdLTsMwFEUjIdgCg85adkCH7QxoB+QjaGFA58BS+CyDz5IAAZtAzE1upUiV301iJ5HqoHekI1XNjf2a2slLpCiKoij/g9uV6ZUCFgpZAQuFrICFQlbAQiErYCEH925W5iJZmNfD2LyP5uZ3cLwWn1/Gp+tjyLBzWylgoRoXeXFfw7kx+0eVfo5m5jzPsjEaK2ChEnfyK/owTWmxVeIcnMvG9FbAQiU+ThJaoIv3k5SO6a2AhYhYNqwwH7O0g+UkYCFLbMbv4YwW5SP2ze71FZ3DWQELWV7G7a9+4bLtphawkCVui6yYJj6NYzqHswIWsvw4qL9luoqx2BzOCljI8mdwQotpIsZiczgrYCHL3v+ALpcQWg02h7MCFrJ87vsmRmPGimkiHohsDmcFLGSJB5lL81YnmrutPMjgWQf/QpIt6dheClioxCadaOHdNKNjeitgoRLREqOrZAVWieKDaKcL0VViPbNiN0Um7mLZbCpgIQexsdGY4bb4lhdavFLiM77DsWBfKbeqgIVCVsBCIStgoZAVsFDIKoqiKEr/iaI/Ix7Q+EK+im4AAAAASUVORK5CYII=" />
              </a>
            </NavItem>
            <NavItem style={{ color: '#fff', marginTop: '8px' }}>
              Howdy, {user.username}!
            </NavItem>
          </Nav>
          <Nav navbar>

            <UncontrolledDropdown nav>
              <DropdownToggle nav>
                <img
                  className="img-fluid rounded-circle"
                  src={gravatarUrl(user.email, { size: 40 })}
                  alt="Gravatar"
                />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>My Account</DropdownItem>
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
