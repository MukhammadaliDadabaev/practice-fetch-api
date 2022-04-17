import React, { Component } from "react";

class FormUsers extends Component {
  state = {
    email: "",
    pswd: "",
    isAgree: false,
  };

  handleValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleChecked = (e) => {
    this.setState({
      isAgree: e.target.checked,
    });
  };

  submitValue = () => {
    const redValue =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
    const isValids = redValue.test(this.state.email, this.state.pswd);

    const validAgree = this.state.isAgree;

    if (!isValids) {
      alert("Please, enter valid email! ❌");
      return;
    }
    if (!validAgree) {
      alert("👉 Please, agree with terms");
      return;
    }

    this.setState({
      email: "",
      pswd: "",
      isAgree: false,
    });
    alert("😎 Hello Gays  👏");
  };

  canselForm = () => {
    this.props.closeForm()
  }

  render() {
    const { email, pswd, isAgree } = this.state;
    return (
      <div className="card p-5">
        <h2 className="text-center">CONTACT Us</h2>
        <form action="#">
          <div className="form-group">
            <label for="email">Email:</label>
            <input
              type="email"
              className="form-control form-control-lg"
              id="email"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={this.handleValue}
            />
          </div>
          <div className="form-group">
            <label for="pwd">Password:</label>
            <input
              type="password"
              className="form-control form-control-lg"
              id="pwd"
              placeholder="Enter password"
              name="pswd"
              value={pswd}
              onChange={this.handleValue}
            />
          </div>
          <div className="form-group form-check">
            <label className="form-check-label">
              <input
                className="form-check-input form-control-lg"
                type="checkbox"
                name="remember"
                checked={isAgree}
                onChange={this.handleChecked}
              />
              Terms &amp; Conditions
            </label>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.submitValue}
          >
            SUBMIT
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={this.canselForm}
          >
            SUBMIT
          </button>
        </form>
      </div>
    );
  }
}

export default FormUsers;
