import React, { Component } from 'react';
import Arrow from './arrow'
import '../index.css'
class Comment extends Component{

  state = {
    points:this.props.points
    };
    handleVote = (type,id) =>
    {
        fetch(this.props.type+"vote" ,{
            method: "POST",
            headers: {                        
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({_id:id})
        }).then(res => res.json()).then(res => {
            console.log(res);
            this.setState({points:this.state.points+1});
        })
    }
  render(){
    return (
      <div className="comment" id={this.props.id}>
      <div className="vote">
        <Arrow type="up" status={this.props.vote} onClick={this.handleVote("up",this.props._id)} key={this.props.id}/>
        <Arrow type="down" status={this.props.vote}  onClick={this.handleVote("down",this.props._id)} key={this.props.id+1}/>
       </div>
        <span className="author">{this.props.author} </span>
        <span className="points">{this.state.points} points</span>
        <div className="content">{this.props.content}</div>
      </div>
    );
  }
}

export default Comment;
