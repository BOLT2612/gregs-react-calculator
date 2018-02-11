import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CalculatorApp from './calculator-app';

// ReactDOM.render(
//     <h3>React Component for TYPING-WARS</h3>
//     , document.getElementById('put_me_here')
//   );

class App extends React.Component {
  render () {
    return ( 
      <BrowserRouter>
        <CalculatorApp />
      </BrowserRouter>
    );
  }
}

ReactDOM.render((<App />), document.getElementById('put_me_here'));