import React, { Component } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCol
} from "mdbreact";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Admin extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount = () => {
    axios
      .get("http://localhost:8008/api/v1/movies")
      .then(response => {
        this.setState({
          data: response.data.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    let result = this.state.data;
    return (
      <div className="container-fluid">
        <div className="row">
          {result.map(movie => (
            <MDBCol key={movie._id} className="col-md-2">
              <MDBCard>
                <MDBCardImage
                  className="img-fluid"
                  style={{ maxHeight: "250px", width: "100%" }}
                  src={movie.moviePoster}
                  waves
                />
                <MDBCardBody>
                  <MDBCardTitle>{movie.movieName}</MDBCardTitle>
                  <div className="row">
                    <Link to={{ pathname: `/admin/edit`, state: { id: movie._id } }}>
                      <MDBBtn color="primary" className="btn btn-sm">
                        Edit
                      </MDBBtn>
                    </Link>
                    <Link to={{ pathname: `/admin/delete`, state: { id: movie._id } }}>
                      <MDBBtn color="primary" className="btn btn-sm">
                        Delete
                      </MDBBtn>
                    </Link>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </div>
      </div>
    );
  }
}
