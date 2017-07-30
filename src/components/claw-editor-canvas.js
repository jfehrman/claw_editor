import React from 'react';

/**
 * Claw editor canvas.
 * 
 * @author Joseph Fehrman
 * @since 30 July, 2017
 */
export default class ClawEditorCanvas extends React.Component{

  /**
   * Default constuctor.
   */
  constructor(){
    super();

    this.state = {}
  }

  /**
   * JSX based render function.
   */
  render(){
    return(
      <div className="claw-editor-canvas">
      </div>
    );
  }
}
