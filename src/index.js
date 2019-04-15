import React from "react";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Counter from "./components/counter";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  render() {
    return (
      <div className="container">
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <button onClick={this.resetter}>Rest</button>
      </div>
    );
  }

  resetter = () => {
    this.setState({
      count: 0
    });
  };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
