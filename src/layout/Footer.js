import React, { Component } from "react";
import FormUsers from "./FormUsers";

class Footer extends Component {
  state = {
    modalForm: false,
  };

  openForm = () => {
    this.setState({
      modalForm: true,
    });
  };
  closeForm = () => {
    this.setState({
      modalForm: false,
    });
  };

  render() {
    const { modalForm } = this.state;
    return (
      <footer>
        <div className="footer">
          <div className="container-sm">
            <div className="row">
              <div className="col-sm-12">
                <button type="button" className="btns" onClick={this.openForm}>
                  <div class="arrow">
                    <div class="chevron"></div>
                    <div class="chevron"></div>
                    <div class="chevron"></div>
                  </div>
                </button>
                {modalForm ? <FormUsers closeForm={this.closeForm} /> : ""}
              </div>
            </div>
          </div>
        </div>
        <div className="footer__info">
          <ul>
            <li>
              <a href="https://t.me/Mukhammad_Ali_1950">Learn more</a>
            </li>
            <li>
              <a href="https://t.me/Mukhammad_Ali_1950">Support</a>
            </li>
            <li>
              <a href="home">
                {new Date().getDate()} , {new Date().getMonth()} ,{" "}
                {new Date().getFullYear()} year.
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
