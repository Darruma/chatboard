import React, { Component } from 'react';

class CommentBox extends Component {
	render() {
		return (
			<form onSubmit={this.props.handleSubmit}>
				<textarea value={this.props.value} onChange={this.props.handleChange} rows={5}   />
				<br/>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}
export default CommentBox;
