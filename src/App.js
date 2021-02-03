import React from 'react';

function Potato({name, link}){
  return <div>
    <h1>{link}</h1>
    <h3>I like {name}</h3>
  </div>
}

const List = [{
  name:"you",
  add:"1"},
  {
    name:"dog",
    add:"2"
  },{
    name:"cat",
    add:"3"
  }
]

function App() {
  return (
    <div>
     <h2>Hello!!!</h2>
     {List.map(list => <Potato name={list.name} link={list.add}/>)}
     </div>
  );
}

export default App;
