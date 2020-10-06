import React, { Component } from "react";

class Greeting extends Component {
  state = {
    curDate: new Date(),
    greeting: "",
    name: "Shivansh",
  };
  disp = (date) => {
    if (date >= 1 && date < 12) {
      this.state.greeting = "Good Morning";
    } else if (date >= 12 && date < 16) {
      this.state.greeting = "Good Afternoon";
    } else if (date >= 16 && date < 20) {
      this.state.greeting = "Good Evening";
    } else {
      this.state.greeting = "Good Night";
    }
  };

  render() {
    return (
      <div>
        <h1
          className="xsmall"
          onChange={this.disp(this.state.curDate.getHours())}
        >
          Hello {this.state.name},{this.state.greeting}
        </h1>
      </div>
    );
  }
}

export default Greeting;
