import React from 'react';
import Display from './display';
import Buttons from './buttons';

function isInt(n) {
   return n % 1 === 0;
}

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: 0,
      operand2: 0,
      accumulator: 0,
      decimalValue: null,
      lastOperation: null,
      startNewNumber: true
    };

    this.recordControlInput = this.recordControlInput.bind(this);
    this.accumulateCurrentNumber = this.accumulateCurrentNumber.bind(this);
  }

  recordControlInput(justEntered) {
    var newValue = null;
    if (justEntered === 'C') {
      this.setState(
        {
          displayValue: 0,
          operand2: 0,
          accumulator: 0,
          decimalValue: null,
          lastOperation: null,
          startNewNumber: true
        }
      );
    } else if (justEntered === "±") {
      this.setState(function(prevState, props) {
        newValue = prevState.operand2 * -1;
        return { 
          displayValue: newValue,
          operand2: newValue
        }
      });        
    } else if (justEntered === "%") { 
      this.setState( (prevState, props) => ({ 
          lastOperation: null,
          displayValue: prevState.operand2/100,
          operand2: prevState.operand2/100
        })
      ); 
    } else if (justEntered === ".") { 
      if (this.state.decimalValue === null) {
        this.setState( { 
          //lastOperation: null,
          decimalValue: 1,
          startNewNumber: false

        }); 
      }
    } else if (justEntered === "=") { 
      //console.log("justEntered = ",justEntered, "displayValue = ", this.state.displayValue);
      //console.log("    accumulator = ", this.state.accumulator, " operand2 = ", this.state.operand2);
      //console.log("    lastOperation = ", this.state.lastOperation, "startNewNumber = ", this.state.startNewNumber);

      if (!this.state.lastOperation) {
        this.setState( (prevState, props) => ({ 
          startNewNumber: true,
          accumulator: prevState.operand2,
          displayValue: prevState.operand2
        })); 
      } else if (this.state.lastOperation === '+') {
        this.setState( (prevState, props) => ({ 
          startNewNumber: true,
          lastOperation: null,
          accumulator: prevState.accumulator + prevState.operand2,
          displayValue: prevState.accumulator + prevState.operand2
        })); 
      } else if (this.state.lastOperation === '-') {
        this.setState( (prevState, props) => ({ 
          startNewNumber: true,
          lastOperation: null,
          accumulator: prevState.accumulator - prevState.operand2,
          displayValue: prevState.accumulator - prevState.operand2
        })); 
      } else if (this.state.lastOperation === 'x') {
        this.setState( (prevState, props) => ({ 
          startNewNumber: true,
          lastOperation: null,
          accumulator: prevState.accumulator * prevState.operand2,
          displayValue: prevState.accumulator * prevState.operand2
        })); 
      } else if (this.state.lastOperation === '/') {
        this.setState( (prevState, props) => ({ 
          startNewNumber: true,
          lastOperation: null,
          accumulator: prevState.accumulator / prevState.operand2,
          displayValue: prevState.accumulator / prevState.operand2
        })); 
      }
      console.log( "isInt(displayValue) = ", isInt(this.state.displayValue) );
    } else {    
      //******************* handle all cases of + - * / *************************
      if (!this.state.lastOperation) {
        this.setState( (prevState, props) => ({ 
          lastOperation: justEntered,
          startNewNumber: true,
          decimalValue: null,
          accumulator: prevState.operand2
        })); 
      } else if (this.state.lastOperation === '+') {
        this.setState( (prevState, props) => ({ 
          lastOperation: justEntered,
          startNewNumber: true,
          decimalValue: null,
          accumulator: prevState.accumulator + prevState.operand2
        })); 
      } else if (this.state.lastOperation === '-') {
        this.setState( (prevState, props) => ({ 
          lastOperation: justEntered,
          startNewNumber: true,
          decimalValue: null,
          accumulator: prevState.accumulator - prevState.operand2
        })); 
      } else if (this.state.lastOperation === 'x') {
        this.setState( (prevState, props) => ({ 
          lastOperation: justEntered,
          startNewNumber: true,
          decimalValue: null,
          accumulator: prevState.accumulator * prevState.operand2
        })); 
      } else if (this.state.lastOperation === '/') {
        this.setState( (prevState, props) => ({ 
          lastOperation: justEntered,
          startNewNumber: true,
          decimalValue: null,
          accumulator: prevState.accumulator / prevState.operand2
        })); 
      }
    }
  }

  accumulateCurrentNumber(digitValue) {
    //console.log("digitValue = ",digitValue, "displayValue = ", this.state.displayValue);
    //console.log("    accumulator = ", this.state.accumulator, " operand2 = ", this.state.operand2);
    //console.log("    lastOperation = ", this.state.lastOperation, "startNewNumber = ", this.state.startNewNumber);
    var newValue = null;
    if (this.state.startNewNumber) {
      this.setState({ 
        displayValue: digitValue,
        operand2:  digitValue,
        startNewNumber: false
      });
    } else if (this.state.decimalValue) {
      this.setState( function(prevState, props) { 
        newValue = prevState.operand2 + (digitValue/Math.pow(10,prevState.decimalValue));
        return {
          displayValue: newValue,
          operand2: newValue,
          decimalValue: prevState.decimalValue + 1
        };
      });
    } else {
      this.setState( function(prevState, props) {
        var newValue = digitValue + (prevState.operand2 * 10);
        return { 
          displayValue: newValue, 
          operand2: newValue 
        };
      });
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