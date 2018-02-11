import React from 'react';

class Button7 extends React.Component {
  constructor(props) {
    super(props);
    this.takeButtonValue = this.takeButtonValue.bind(this);
  }

  takeButtonValue (bval) {
    alert("button pressed, value = " + bval);
  }

  render () {
    return (
      <button className="num" value="7" onClick={() => {this.takeButtonValue(this.value)}}>7</button>
    );
  }

}

export default Button7;