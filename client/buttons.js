import React from 'react';
import Button7 from './button7';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.takeButtonValue = this.takeButtonValue.bind(this);
  }

  takeButtonValue (bval) {
    //console.log("button pressed, value = " + bval);
    this.props.getNumbers(bval);
  }

  takeControlInput (bval) {
    //console.log("button pressed, value = " + bval);
    this.props.getControls(bval);
  }

  render () {
    return ( 
      <div id="inputs">
        <div className="controls">
          <button value="C" onClick={() => {this.takeControlInput("C")}}>C</button>
          <button value="±" onClick={() => {this.takeControlInput("±")}}>±</button>
          <button value="%" onClick={() => {this.takeControlInput("%")}}>%</button>
          <button value="/" onClick={() => {this.takeControlInput("/")}}>/</button>
        </div>
        <div className="controls">
          <button className="num" onClick={() => {this.takeButtonValue(7)}}>7</button>          
          <button className="num" onClick={() => {this.takeButtonValue(8)}}>8</button>          
          <button className="num" onClick={() => {this.takeButtonValue(9)}}>9</button>          
          <button value="x" onClick={() => {this.takeControlInput("x")}}>x</button>
        </div>
        <div className="controls">
          <button className="num" onClick={() => {this.takeButtonValue(4)}}>4</button>          
          <button className="num" onClick={() => {this.takeButtonValue(5)}}>5</button>          
          <button className="num" onClick={() => {this.takeButtonValue(6)}}>6</button>     
          <button value="-" onClick={() => {this.takeControlInput("-")}}>-</button>
        </div>
        <div className="controls">
          <button className="num" onClick={() => {this.takeButtonValue(1)}}>1</button>          
          <button className="num" onClick={() => {this.takeButtonValue(2)}}>2</button>          
          <button className="num" onClick={() => {this.takeButtonValue(3)}}>3</button>     
          <button value="+" onClick={() => {this.takeControlInput("+")}}>+</button>
        </div>
        <div className="controls">
          <button className="num" onClick={() => {this.takeButtonValue(0)}}>0</button>
          <button value="." onClick={() => {this.takeControlInput(".")}}>.</button>
          <button value="=" onClick={() => {this.takeControlInput("=")}}>&#61;</button>
        </div>
      </div>  
    );
  }
}

export default Buttons;