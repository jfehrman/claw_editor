import React from 'react';

/**
 * Claw editor controls.
 * 
 * @author Joseph Fehrman
 * @since 30 July, 2017
 */
export default class ClawEditorControls extends React.Component{

  /**
   * Default constuctor.
   */
  constructor(props){
    super(props);
    const component = this;

    this.state = {
      buttons : [
        {
          "id" : "addCircle",
          "name" : "Add Circle",
          "iconClass" : "fa fa-circle-o",
          "clickEvent" : function(){
            component.props.addShape("circle");
          }
        },
        {
          "id" : "addSquare",
          "name" : "Add Square",
          "iconClass" : "fa fa-square-o",
          "clickEvent" : function(){
            component.props.addShape("square");
          }
        },
        {
          "id" : "addTriangle",
          "name" : "Add Triangle",
          "iconClass" : "fa fa-caret-up",
          "clickEvent" : function(){
            component.props.addShape("triangle");
          }
        },
      ],
    }
  }

  /**
   * JSX based render function.
   */
  render(){
    return(
      <div className="claw-editor-controls">
        {this.state.buttons.map(function(btn){
          return <button id={btn.id} className="claw-editor-button" title={btn.name} onClick={btn.clickEvent}><i className={btn.iconClass} /></button>;
        })}
      </div>
    )
  }
}
