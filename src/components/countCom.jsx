import React from "react";

class CountCom extends React.Component {
  render() {
    return (
      <div>
        <span
          class={
            this.props.count == 0 ? "p-2 m-2 bg-warning" : "p-2 m-2 bg-success"
          }
        >
          {this.props.count == 0 ? "zero" : this.props.count}
        </span>
        <button
          type="button"
          value="Increment"
          class="btn btn-success m-2"
          onClick={this.props.counterInc}
        >
          +
        </button>

        <button
          type="button"
          value="Increment"
          class="btn btn-danger m-2"
          onClick={this.props.counterDec}
        >
          -
        </button>
      </div>
    );
  }
}

export default CountCom;
