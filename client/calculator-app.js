import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './about.js';
import Background from './background.js';
import Contact from './contact.js';
import Header from './header.js';
import Calculator from './calculator';

class CalculatorApp extends React.Component{
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Calculator}/>
          <Route path='/about' component={About}/>
          <Route path='/background' component={Background}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
      </div>
    )
  }
}


export default CalculatorApp;