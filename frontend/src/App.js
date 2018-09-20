import React, { Component } from 'react';
import Comment from './components/comment';
import CommentBox from './components/commentbox';
import './App.css';

class App extends Component {
	state = { data: [], textvalue: '', commentsVisible: true};
	render() {
		const comments =
			this.state.data.length && this.state.commentsVisible
				? this.state.data.map((element, i) => {
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
					}) 
				: '';
		return (
			<div className="App">
				<div className="comments">{comments}</div>
				<CommentBox
							value={this.state.textvalue}
							handleChange={this.handleCommentChange}
							handleSubmit={this.handleCommentSubmit}
						/>
			</div>
		);
	}
	componentDidMount() {
		fetch('posts/homepage').then((res) => res.json()).then((data) => {
			console.log(data);
			this.setState({ data: data.message });
		});
	}
	handleCommentSubmit = (e) => {
		e.preventDefault();	
		post_data('/post', { content: this.state.textvalue }).then((res) => res.json()).then((res) => {
			const newState = this.state;
			if (res.success) {
				const newComment = {
					content: this.state.textvalue,
					points: res.message.score,
					vote: res.message.vote,
					author: res.message.author,
					time: res.message.timestamp,
					id: res.message.id
				};
				newState.data.push(newComment);
				newState.textvalue = '';
				this.setState({ newState });
			}
		});
	};
	handleCommentChange = (e) => {
		this.setState({ textvalue: e.target.value });
	};
}
function post_data(url, data) {
	return fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json; charset=utf-8'
		},
		body: JSON.stringify(data)
	});
}
export default App;

