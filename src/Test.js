import React from 'react';
import PropTypes from 'prop-types';

function Potato({name, link}){
  return <div>
    <h1>{link}</h1>
    <h3>I like {name}</h3>
  </div>
}

const List = [{
  name:"you",
  id:"1",
  rating: 4.5/5.0
  },{
    name:"dog",
    id:"2",
    rating:4.9/5.0
  },{
    name:"cat",
    id:"3",
    rating:"4.5/5.0" //propTypes이 number이기때문에 string으로 하면 에러가 잡힌다.
  }
]

// PropTypes : 지정한 형식을 맞춰서 확인
Potato.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired  
}


//unique한지 알기위해서 id를 넣고 key를 잡아줌
function Test() {
  return (
    <div>
     <h2>Hello!!!</h2>
     {List.map(list => <Potato key={list.id} name={list.name} rating={list.rating}/>)}
     </div>
  );
}

export default Test;
