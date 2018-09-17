import React, { Component } from 'react';
import '../index.css'
class Arrow extends Component {
	state = { 
		type:this.props.type,
		status:this.props.status,
		id:this.props.id 
	}
	render() { 
		var arrow_className = "arrow " + this.state.type;
		if(this.state.type == "up" && this.state.status ==1 )
		{
			arrow_className = "arrow upvoted"
		}
		 if(this.state.type == "down" && this.state.status == -1 )
		{
			arrow_className = "arrow downvoted"
		}
		return ( <div className={arrow_className}> </div> );
	}
componentDidMount()
  {
   // fetch('posts/score/' + this.state.id).then(res => res.json()).then(data => this.setState({data}));
  }
}
export default Arrow;