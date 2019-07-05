import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
} from "mdbreact";

class TopNavBar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">IMDB</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink to={{ pathname: `/movies` }}>Movies</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to={{ pathname: `/upcomingmovies` }}>Coming Soon</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink to={{ pathname: `/kannadamovies` }}>Kannada Movies</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink to={{ pathname: `/englishmovies` }}>English Movies</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink to={{ pathname: `/hindimovies` }}>Hindi Movies</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default TopNavBar;