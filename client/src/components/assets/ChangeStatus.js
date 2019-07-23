import React, { Component } from "react";
import alert from '../notifications/alertMessage';
import axios from "axios";

class ChangeStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.location.state.id,
      wishList: props.location.state.wishList
    };
  }

  componentDidMount = () => {
    const id = this.state.id;
    var insertObj = {
      id: this.state.id,
      wishlist: this.state.wishList
    }
    axios
      .put(`http://localhost:8008/api/v1/movies/changestatus/${id}`, insertObj)
      .then(response => {
        if (response.data.success) {
          this.props.history.push("/movies");
          alert('success', 'Added to Wishlist');
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
export default ChangeStatus;