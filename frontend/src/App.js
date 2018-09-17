import React, { Component } from 'react';
import Comment from './components/comment'
import './App.css';

class App extends Component {

  state = {data:[]};
  render() {
    console.log(this.state);
    return (
      <div className="App" >
      {this.state.data.map((element,i) =>
      {
        return (<div key={i}><Comment content={element.content} points={element.points} vote={element.vote} author={element.author} time ={element.timestamp} id={element.id} /><br/></div>)
      })}
      </div>
    );
  }
  componentDidMount()
  {
    // fetch('posts/homepage').then(res => res.json()).then(data => {
    //   console.log(data)
    // });
    console.log("mounted");
    const newState = [{content:"hello",points:5,vote:-1,author:"simon",time:"1 hour ago", id:54 },
    {content:"world",points:6,vote:1,author:"bobby",time:"2 hours ago", id:222 }];
    this.setState({data:newState});
  }
}

export default App;
