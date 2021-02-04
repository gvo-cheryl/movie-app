import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from './routes/Home';
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
  <HashRouter>
    {/* 네비게이션은 HashRouter안에서만 작동함 */}
    <Navigation/> 
    <Route path="/" exact={true} component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/movie:id" component={Detail}/>
  </HashRouter>
  // footer는 밖에 쓸 수 있음 
  );
}

export default App;