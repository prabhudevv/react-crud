import React, { Component } from "react";
import alert from '../notifications/alertMessage';
import axios from "axios";

class MovieDetails extends Component {
  constructor(props) {
    super(props);
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
          alert('success', 'Successfully Deleted');
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
    return <div className="container-fluid" />;
  }
}
export default MovieDetails;