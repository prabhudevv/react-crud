import React, { Component } from 'react';

import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
// import {Link} from 'react-router-dom'
import axios from 'axios';

class MovieDetails extends Component {
  constructor(props){
    super(props)
    console.log(props)
    this.state = {
      id:props.location.state.id
    }
  }

  componentDidMount = () => {
    const id = this.state.id;
    axios.get(`http://localhost:8008/api/v1/movies/details/`+id)
    .then(response => {
        this.setState({
            movieName:response.data.data.movieName
        })
    }).catch(err => {
        console.log(err)
    })
  }

  render() {
    console.log(this.props)

    return (
      <div className="container-fluid">
<div className="row">

        <MDBCol className="col-md-2">
      <MDBCard>
        <MDBCardImage className="img-fluid" style={{maxHeight: "250px", width: "100%"}}  waves />
        <MDBCardBody>
          <MDBCardTitle>{this.state.movieName}</MDBCardTitle>
          <MDBCardText><i className="fa fa-star" aria-hidden="true"></i>&nbsp;/10</MDBCardText>
          <MDBBtn className="btn-sm" href="#">Read More</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
        </div>
  </div>
    )
  }
}
export default MovieDetails;