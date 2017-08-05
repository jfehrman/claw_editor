import React from 'react';
import ShapeFactory from './support/factory/ShapeFactory';

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
  constructor(props){
    super(props);

    this.state = {
      shapeFactory : new ShapeFactory()
    }
  }

  /**
   * Convert SVG shapes back to JSON representation.
   *
   * @return JSON representation of shapes in canvas.
   */
  _serializeShapes(){
    
  }

  /**
   * JSX based render function.
   */
  render(){
    var component = this;
    return(
      <div className="claw-editor-canvas">
        <svg id="shapeDraw">
          {this.props.shapes.map(function(shape){
            return component.state.shapeFactory.build(shape.type, shape.height, shape.width, shape.color);
          })}
        </svg>
      </div>
    )
  }
}
