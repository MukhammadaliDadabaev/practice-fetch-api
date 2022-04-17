import React, { Component } from "react";
import MainHead from "../layout/MainHead";

import CardPhotos from "./CardPhotos";

class Main extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((result) => this.setState({ users: result.data }));
  }

  priveBtn = (page) => {
    fetch(`https://reqres.in/api/users?${page}`)
      .then((response) => response.json())
      .then((result) => this.setState({ users: result.data }));
  };

  render() {
    return (
      <div className="wrapper">
        <MainHead priveBtn={this.priveBtn} />
        <CardPhotos users={this.state.users} />
      </div>
    );
  }
}

export default Main;