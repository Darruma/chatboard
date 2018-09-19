import React, { Component } from "react";
import "../index.css";
class Arrow extends Component {
  state = {
    status: this.props.status
  };
  handleVote = e => {
    e.preventDefault();
    console.log("voting");
    this.props.voteMethod(this.props.type, this.props.id);
  };
  render() {
    let arrow_className = "arrow " + this.props.type;

    if (this.props.type == "up" && this.state.status == 1) {
      arrow_className = "arrow upvoted";
    }
    if (this.props.type == "down" && this.state.status == -1) {
      arrow_className = "arrow downvoted";
    }
    return (
      <div className={arrow_className} onClick={this.handleVote}>
      </div>
    );
  }
}
export default Arrow;
