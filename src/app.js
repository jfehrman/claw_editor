import React from 'react';
import ReactDOM from 'react-dom';
import ClawEditor from './components/claw-editor';

// Render the root component of the application.
ReactDOM.render(
  (<ClawEditor />),
  document.querySelector("#content-anchor");
);
