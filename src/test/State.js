import React from 'react';

class State extends React.Component{
  constructor(props){
    super(props);
    console.log("hello, construct");
  }
  state = {
    count: 0
  };
  add = () => {
    this.setState(current => ({count: current.count +1}));
  };
  minus = () => {
    this.setState(current => ({count: current.count -1}));
  };
  componentDidMount(){
    console.log("component rendered");
  }
  componentDidUpdate(){
    console.log("I just updated");
  }

  render(){
    console.log("Im rendering");
    return <div> 
    <h1>The number is: {this.state.count}</h1>
    <button onClick={this.add}>add</button>
    <button onClick={this.minus}>minus</button>
    </div>
  };
}


export default State;
