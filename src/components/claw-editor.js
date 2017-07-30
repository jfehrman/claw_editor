import React from 'react';
import ClawEditorControls from './claw-editor-controls';
import ClawEditorCanvas from './claw-editor-canvas';
import ClawEditorProperties from './claw-editor-properties';

/**
 * Claw editor element.
 * 
 * @author Joseph Fehrman
 * @since 30 July, 2017
 */
export default class ClawEditor extends React.Component{

  /**
   * Default constructor.
   */
  constructor(){
    super();

    this.state = {
      shapes : []
    };
  }

  /**
   * JSX based render function.
   */
  render(){
    return(
      <div className="claw-editor">
        <ClawEditorControls addShape={this._addShape.bind(this)}/>
        <ClawEditorCanvas />
        <ClawEditorProperties />
      </div>
    );
  }

  /**
   * Function to add a new shape to the list of shapes.
   *
   * @param newShape New shape to add to the application state.
   */
  _addShape(newShape){
    this.setState({shapes : this.state.shapes.concat({
      "type" : newShape,
      "x" : 0,
      "y" : 0,
      "width" : 200,
      "height" : 200,
      "rotate" : 0,
    })});
  }
}
