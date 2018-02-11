import React from 'react';

export default class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return ( <div>
        <p><input type="text" name="readout" id="readout" readOnly="true" value={this.props.onScreenValue} /></p>
        </div>  
      );
  }
}