import React, { Component } from "react";
import Comment from "./components/comment";
import CommentBox from "./components/commentbox";
import "./App.css";

class App extends Component {
  state = { data: [], textvalue: '' };
  render() {
    return (
      <div className="App">
        {this.state.data.map((element, i) => {
          return (
            <div key={i}>
              <Comment
                content={element.content}
                points={element.points}
                vote={element.vote}
                author={element.author}
                time={element.timestamp}
                id={element.id}
              />
              <br />
            </div>
          );
        })}
        <CommentBox
          value={this.state.textvalue}
          handleChange={this.handleCommentChange}
          handleSubmit={this.handleCommentSubmit}
        />
      </div>
    );
  }
  componentDidMount() {
    // fetch('posts/homepage').then(res => res.json()).then(data => {
    //   console.log(data)
    // });
    const newState = [
      {
        content: "hello",
        points: 5,
        vote: -1,
        author: "simon",
        time: "1 hour ago",
        id: 54
      },
      {
        content: "world",
        points: 6,
        vote: 1,
        author: "bobby",
        time: "2 hours ago",
        id: 222
      }
    ];
    this.setState({ data: newState });
  }
  handleCommentSubmit = (e) => {
    e.preventDefault();
  // Post comment data.
    this.setState({textvalue: '' });
  };

  handleCommentChange = (e) => {
    this.setState({ textvalue: e.target.value });
  };
}

export default App;
