import React from "react";

import CountCom from "./countCom";
class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  counterInc = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  counterDec = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      });
    }
  };

  render() {
    return (
      <div>
        <CountCom
          count={this.state.count}
          counterInc={this.counterInc}
          counterDec={this.counterDec}
        />
      </div>
    );
  }
}

export default Counter;
