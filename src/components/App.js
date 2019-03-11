import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home';
const App = () => (
  // wrap the main component inside browserRouter tags
  <BrowserRouter>
    <div className="container">
      <Route path="/" component={Home}/>
    </div> 
  </BrowserRouter>
  
);

export default App;