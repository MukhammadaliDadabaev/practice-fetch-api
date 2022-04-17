import React, { Component } from 'react';

class UserPhoto extends Component {
  state = {  } 
  render() {
    const {id, email, first_name, last_name, avatar} = this.props; 
    return (
      <div key={id} className="cards">
        <div className="card__img">
          <img src={avatar} alt="user" />
        </div>
        <div className="card__info">
          <h2>
            {first_name} {last_name}
          </h2>
          <h4>
            <a href="home">{email}</a>
          </h4>
        </div>
      </div>
    );
  }
}
 
export default UserPhoto;