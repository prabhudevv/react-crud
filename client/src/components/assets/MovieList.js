import React, { Component } from 'react';

import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class MovieList extends Component {
  constructor(){
    super()
    this.state = {
      data:[]
    }
  }

  componentDidMount = () => {
    axios.get('http://localhost:8008/api/v1/movies')
    .then(response => {
        console.log(response)
        this.setState({
            data:response.data.data,
        })
    }).catch(err => {
        console.log(err)
    })
  }


  render() {
    let result = this.state.data
    console.log(result)
    return (
      <div className="container-fluid">
          <div className="row">
{
    result.map(movie =>
        <MDBCol key={movie._id} className="col-md-2">
      <MDBCard>
        <MDBCardImage className="img-fluid" style={{maxHeight: "250px", width: "100%"}} src={movie.moviePoster} waves />
        <MDBCardBody>
          <MDBCardTitle>{movie.movieName}</MDBCardTitle>
          <MDBCardText><i className="fa fa-star" aria-hidden="true"></i>&nbsp;{movie.movieRating}/10</MDBCardText>
          <Link to={{ pathname: `/movies/details`, state:{id:movie._id}}} color="primary"><MDBBtn className="btn-sm">
                                    Read more
                                </MDBBtn></Link>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
          )
        }
        </div>
      </div>
    )
  }
}
