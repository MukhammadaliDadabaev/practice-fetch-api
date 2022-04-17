import React, { Component } from "react";

import UserPhoto from "./UserPhoto";

class CardPhotos extends Component {
  state = {};
  render() {
    const { users } = this.props;
    return <div className="card__photos">
      {users.map(user => (
        <UserPhoto key={user.id} {...user} />
      ))}
    </div>;
  }
}

export default CardPhotos;
