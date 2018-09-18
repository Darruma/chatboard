import React, { Component } from 'react';
import '../index.css'
class Arrow extends Component {
	state = { 
		status:this.props.status,
	}
	render() { 
        let arrow_className = "arrow " + this.props.type;
        
		if(this.props.type == "up" && this.state.status == 1 )
		{
			arrow_className = "arrow upvoted"
		}
		 if(this.props.type == "down" && this.state.status == -1 )
		{
			arrow_className = "arrow downvoted"
		}
		return ( <div className={arrow_className}> </div> );
	}
 }
export default Arrow;
