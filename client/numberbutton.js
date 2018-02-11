import React from 'react';

export default class NumberButton extends React.Component {

  render () {
    return ( <div>
        <button className="num" 
        <p><input type="text" name="readout" id="readout" defaultValue={this.props.onScreenValue} /></p>
        </div>  
      );
  }
}