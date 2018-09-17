import React, { Component } from 'react';
import Arrow from './arrow'
import '../index.css'
class Comment extends Component{

  state = {
    id:this.props.id
    };
  render(){
    return (
      <div className="comment" id={this.props.id}>
      <div className="vote">
        <Arrow type="up" status={this.props.vote}  key={this.props.id}/>
        <Arrow type="down" status={this.props.vote}  key={this.props.id+1}/>
       </div>
        <span className="author">{this.props.author} </span>
        <span className="points">{this.props.points} points</span>
        <div className="content">{this.props.content}</div>
      </div>
    );
  }
}

export default Comment;
