import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCol } from 'mdbreact';
import ReactPlayer from 'react-player'
import axios from 'axios';

class MovieDetails extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      id: props.location.state.id
    }
  }

  componentDidMount = () => {
    const id = this.state.id;
    axios.get(`http://localhost:8008/api/v1/movies/details/` + id)
      .then(response => {
        this.setState({
          movieName: response.data.data.movieName,
          moviePoster: response.data.data.moviePoster,
          directorName: response.data.data.directorName,
          actorName: response.data.data.actorName,
          musicDirectorName: response.data.data.musicDirectorName,
          releaseDate: response.data.data.releaseDate,
          producerName: response.data.data.producerName,
          movieDescription: response.data.data.movieDescription,
          videoLink: response.data.data.videoLink,
          movieRating: response.data.data.movieRating,
          movieLanguage: response.data.data.movieLanguage
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
          <MDBCol className="col-md-3">
            <MDBCardImage className="img-fluid" style={{ maxHeight: "550px", width: "auto", float: "right" }} src={this.state.moviePoster} waves />
          </MDBCol>
          <MDBCol className="col-md-3">
            <MDBCard>
              <MDBCardImage className="img-fluid" style={{ maxHeight: "250px", width: "100%" }} waves />
              <MDBCardBody>
                <h3>{this.state.movieName}</h3>
                <MDBCardText>Director: {this.state.directorName}</MDBCardText>
                <MDBCardText>Actors: {this.state.actorName}</MDBCardText>
                <MDBCardText>Music Director: {this.state.musicDirectorName}</MDBCardText>
                <MDBCardText>Year of Release: {this.state.releaseDate}</MDBCardText>
                <MDBCardText>Producer: {this.state.producerName}</MDBCardText>
                <MDBCardText>Language: {this.state.movieLanguage}</MDBCardText>
                <MDBCardText>{this.state.movieDescription}</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol className="col-md-6">
            <ReactPlayer url={this.state.videoLink} />
          </MDBCol>
        </div>
      </div>
    )
  }
}
export default MovieDetails;