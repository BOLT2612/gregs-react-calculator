import React, { Component } from 'react';

export default class Background extends Component {
  render() {
    return (
        <div id="background">
          <h2>My Background</h2>
          <p>
            I am an aspiring web developer seeking a position in the San Francisco Bay Area.  I am open to other locations on the West Coast as well.
            <br /><br />
            Skills:
          </p>
          <ul>
          <li>JavaScript</li>
          <li>Node</li>
          <li>React</li>
          <li>Redux</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>Mocha</li>
          <li>C</li>
          <li>Python</li>
          <li>bash</li>
          <li>Linux</li>
          </ul>
          <p>
            I have 10 years experience as a software engineer creating system utilities and diagnostics in C in a linux environment.
            Prior to software I worked for many years as an electronics engineer, designing digital circuits for video processing and networking systems.
            <br /><br />
            You can read more about my career path here <a href="https://gregs-brain.herokuapp.com/about">here</a>
          </p>
        </div>
      )
  }
}