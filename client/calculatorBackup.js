import React from 'react';
import Display from './display';
import Buttons from './buttons';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: 0,
      result: 0,
      accumulator: 0,
      lastOperation: null
    };

    this.recordControlInput = this.recordControlInput.bind(this);
    this.accumulateNumberString = this.accumulateNumberString.bind(this);
  }

  recordControlInput(justEntered) {
    if (justEntered === 'C') {
      this.setState(
        {
          lastOperation: justEntered,
          displayValue: 0
        }
      );
    }

    if (justEntered === "±") {
      if (this.state.displayValue.charAt(0) === '-') {
        this.setState( (prevState, props) => ({ displayValue: prevState.displayValue.slice(1) }));        
      } else if ( this.state.displayValue !== '0' ) {
        this.setState( (prevState, props) => ({ displayValue: "-" + prevState.displayValue }));                
      } 
    }

    if (justEntered === "%") { 
      this.setState( (prevState, props) => ({ 
        displayValue: prevState.displayValue.slice(0,-2) + '.' + prevState.displayValue.slice(-2)
      })); 
    }
  }

  accumulateCurrentNumber(digitValue) {
    //this.setState({displayValue: 'XXXX'})
    if (this.state.displayValue === 0) {
      this.setState(
        {
          displayValue: Number.parseInt(digitValue)
        }
      );
    } else {
      this.setState( (prevState, props) => ({ displayValue: prevState.displayValue * 10 + digitValue }));
    }
  }

  render() {
    return (     
        <div id="calculator">
          <Display onScreenValue={this.state.displayValue} />
          <Buttons getControls={this.recordControlInput} getNumbers={this.accumulateCurrentNumber} />
        </div>  
      );
  }
}