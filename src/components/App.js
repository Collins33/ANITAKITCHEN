import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Header from './Header';
import Teachers from './Teachers';
import Courses from './Courses';

const App = () => (
  // wrap the main component inside browserRouter tags
  // exact ensures that it only renders the component when the url fully matches

  // use render() when you want to pass props to the component

  <BrowserRouter>
    <div className="container">
      <Header />
      <Route exact path="/" component={Home}/>
      <Route path="/about" render={()=> <About title="about"/>}/>
      <Route path="/courses" component={Courses}/>
      <Route path="/teachers" component={Teachers}/>
    </div> 
  </BrowserRouter>
  
);

export default App;