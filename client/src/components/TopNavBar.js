import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline
} from "mdbreact";

class TopNavBar extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  onSearchInputChange = event => {
    console.log("Search Function");
  };

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
              <MDBNavLink to={{ pathname: `/movies` }}>All Movies</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to={{ pathname: `/upcomingmovies` }}>
                Coming Soon
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to={{ pathname: `/kannadamovies`, state: { lang: "k" } }}>
                Kannada Movies
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to={{ pathname: `/englishmovies`, state: { lang: "e" } }}>
                English Movies
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to={{ pathname: `/hindimovies`, state: { lang: "h" } }}>
                Hindi Movies
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={this.onSearchInputChange}
                  />
                </div>
              </MDBFormInline>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to={{ pathname: `/add` }}>
                <i className="fa fa-plus-square fa-lg" aria-hidden="true" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to={{ pathname: `/admin` }}>
                <i className="fa fa-user-circle fa-lg" aria-hidden="true" />
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default TopNavBar;
