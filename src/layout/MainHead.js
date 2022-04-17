import React, { Component } from "react";

class MainHead extends Component {
  state = {
    page: "page=1",
  };

  handlePrive = () => {
    this.setState({
      page: this.props.priveBtn("page=2"),
    });
  };
  handleNext = () => {
    this.setState({
      page: this.props.priveBtn("page=1"),
    });
  };

  render() {
    const { page } = this.state;
    return (
      <main>
        <div className="main__head">
          <div className="main__title">
            <h1 className="logo">Hello Req-Res users!</h1>
          </div>
          <div className="main__info">
            <h2>Test your front-end against a real API</h2>
            <h3>A hosted REST-API ready to respond to your AJAX requests.</h3>
          </div>
          <div class="btn-group">
            <button
              type="submit"
              class="btn-dark"
              value={page}
              onClick={this.handlePrive}
            >
              PRIVE
            </button>
            <button
              type="submit"
              class="btn-info"
              value={page}
              onClick={this.handleNext}
            >
              NEXT
            </button>
          </div>
        </div>
      </main>
    );
  }
}

export default MainHead;
