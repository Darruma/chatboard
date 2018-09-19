import React, { Component } from 'react';
import Arrow from './arrow';
import '../index.css';
class Comment extends Component {
	state = {
		points: this.props.points,
		vote: this.props.vote
	};

	render() {
		return (
			<div className="comment" id={this.props.id}>
				<div className="vote">
					<Arrow type="up" status={this.state.vote} voteMethod={this.vote} id={this.props.id} />
					<Arrow type="down" status={this.state.vote} voteMethod={this.vote} id={this.props.id} />
				</div>
				<span className="author">{this.props.author} </span>
				<span className="points">{this.state.points} points</span>
				<div className="content">{this.props.content}</div>
			</div>
		);
	}
	vote = (type, id) => {
		console.log(type, id);
		fetch(type + 'vote', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			},
			body: JSON.stringify({ _id: id })
		})
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				this.setState({ points: this.state.points + 1 });
				fetch('posts/status/' + this.props.id).then((res) => res.json()).then((data) => {
					const newState = this.state;
					newState.status = data.status;
				});
			});
	};
}

export default Comment;
