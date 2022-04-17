import React, { Component } from 'react';

class Header extends Component {
  state = {  } 
  render() { 
    return (
      <header id='home'>
        <div className="navbar">
          <div className='nav__images'>
          <div className="logo">
            <img
              src="https://www.hf-group.com/images/cm/hf-group/logos_2020/HF_GROUP_Logo_farbig.png"
              alt="logo"
            />
          </div>
          <h1>REQ | RES</h1>
          <div className="logo">
            <img
            src="https://ubgcompany.com/wp-content/uploads/2021/03/ubg_logo_color.png"
            alt="logo"
          />
          </div>
          </div>
        </div>
      </header>
    );
  }
}
 
export default Header;