import React, { Component } from 'react';
import { MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AddMovie extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            movieName: "",
            moviePoster: "",
            directorName: "",
            actorName: "",
            musicDirectorName: "",
            releaseDate: "",
            producerName: "",
            movieDescription: "",
            videoLink: "",
            movieLanguage: "",
            movieRating: "",
            id: ""
        }
    }

    changeHandler = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    componentDidMount = () => {
        axios.get(`http://localhost:8008/api/v1/movies/details/`)
        .then(response => {
            // console.log(response)
            this.setState({
                data:response.data.data,
            })
        }).catch(err => {
            console.log(err)
        })
    }

    formSubmit = (e) => {
        e.preventDefault();
        var insertObj = {
            movieName: this.state.movieName,
            directorName: this.state.directorName,
            actorName: this.state.actorName,
            musicDirectorName: this.state.musicDirectorName,
            releaseDate: this.state.releaseDate,
            producerName: this.state.producerName,
            moviePoster: this.state.moviePoster,
            movieRating: this.state.movieRating,
            movieLanguage: this.state.movieLanguage,
            videoLink: this.state.videoLink
        }
        console.log(insertObj)
        axios.post(`http://localhost:8008/api/v1/movies`, insertObj)
            .then(response => {
                if (response.data.success) {
                    this.props.history.push('/movies')
                } else {
                    this.setState({
                        color: 'danger',
                        res_msg: response.data.msg,
                        isOpen: !this.state.isOpen
                    })
                }
            }).catch(err => console.log(err))
    }

    render() {
        console.log(this.state.movieLanguage)
        return (
            <form onSubmit={this.formSubmit} >
                <div className="container-fluid" style={{ padding: "0rem 2rem" }}>
                    <div className="row">
                        <MDBCol className="col-md-4">
                            <MDBInput type="text" label="Movie Name" name="movieName" value={this.state.movieName}  onChange={this.changeHandler} ></MDBInput>
                        </MDBCol>
                        <MDBCol className="col-md-4">
                            <MDBInput type="text" label="Director Name" name="directorName" value={this.state.directorName}  onChange={this.changeHandler} ></MDBInput>
                        </MDBCol>
                        <MDBCol className="col-md-4">
                            <MDBInput type="text" label="Actor Name" name="actorName" value={this.state.actorName}  onChange={this.changeHandler} ></MDBInput>
                        </MDBCol>
                    </div>
                    <div className="row">
                        <MDBCol className="col-md-4">
                            <MDBInput type="text" label="Music Director Name" name="musicDirectorName" value={this.state.musicDirectorName}  onChange={this.changeHandler} ></MDBInput>
                        </MDBCol>
                        <MDBCol className="col-md-4">
                            <MDBInput type="text" className="datepicker" label="Release Date" name="releaseDate" value={this.state.releaseDate}  onChange={this.changeHandler} ></MDBInput>
                        </MDBCol>
                        <MDBCol className="col-md-4">
                            <MDBInput type="text" label="Producer Name" name="producerName" value={this.state.producerName}  onChange={this.changeHandler} ></MDBInput>
                        </MDBCol>
                    </div>
                    <div className="row">
                        <MDBCol className="col-md-4">
                            <MDBInput type="text" label="Poster Link" name="moviePoster" value={this.state.moviePoster}  onChange={this.changeHandler} ></MDBInput>
                        </MDBCol>
                        <MDBCol className="col-md-4">
                            <MDBInput type="text" label="Movie Rating" name="movieRating" value={this.state.movieRating}  onChange={this.changeHandler} ></MDBInput>
                        </MDBCol>
                        <MDBCol className="col-md-4">
                            <label htmlFor="formGroupExampleInput">Select Language</label>
                            <select className="browser-default custom-select" name="movieLanguage" value={this.state.movieLanguage}  onChange={this.changeHandler} >
                                <option value="K">Kannada</option>
                                <option value="E">English</option>
                                <option value="H">Hindi</option>
                            </select>
                        </MDBCol>
                    </div>
                    <div className="row">
                        <MDBCol className="col-md-4">
                            <MDBInput type="text" label="Video Link" name="videoLink" value={this.state.videoLink}  onChange={this.changeHandler} ></MDBInput>
                        </MDBCol>
                    </div>
                    <div className="row">
                        <MDBCol className="col-md-7 offset-md-5">
                            <MDBBtn type="submit" color="primary" className="btn btn-sm">Update</MDBBtn>
                            <Link to={{ pathname: `/admin` }} color="primary">
                                <MDBBtn color="primary" className="btn btn-sm">
                                    Cancel</MDBBtn>
                            </Link>
                        </MDBCol>
                    </div>
                </div>
            </form>
        )
    }
}
export default AddMovie;