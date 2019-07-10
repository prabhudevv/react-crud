import React, { Component } from "react";
import axios from "axios";

class ChangeStatus extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      id: props.location.state.id,
      wishList: props.location.state.wishList
    };
  }

  componentDidMount = () => {
    const id = this.state.id;
    var insertObj = {
        id : this.state.id,
        wishList : this.state.wishList
    }
    axios
      .put(`http://localhost:8008/api/v1/movies/changestatus/${id}`, insertObj)
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
export default ChangeStatus;