import React, { Component } from "react";
import axios from "axios";

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      id: props.location.state.id
    };
  }

  componentDidMount = () => {
    const id = this.state.id;
    axios
      .delete(`http://localhost:8008/api/v1/movies/` + id)
      .then(response => {
        if (response.data.success) {
          this.props.history.push("/movies");
        } else {
          this.setState({
            color: "danger",
            res_msg: response.data.msg,
            isOpen: !this.state.isOpen
          });
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.props);
    return <div className="container-fluid" />;
  }
}
export default MovieDetails;