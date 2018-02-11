import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
        <div id="about">
          <h2>About My React-Calculator</h2>
          <p>
            I wanted a web-site that would quickly show that I am adept in creating 
            react components, passing state down to child components, and calling
            functions in the parent components from child events.  
            <br /><br />
            Imitating the functionality of an old-school hand held calculator seemed 
            to fit the need.  Everyone knows how to work them, and the interaction of
            the buttons and display has enough complexity to demonstrate a basic understaning
            of react.
            <br /><br />
            I used this picture of a Texas Instruments DataMath calculator 
            as inspiration for the colors, style, and the cool 7 segment numbers
            in the display.
          </p>
          <img src="Datamath.jpg" alt="Picture of old Texas Instruments Calculator" width='595' />
        </div>
      )
  }
}