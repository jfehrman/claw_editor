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
  constructor(){
    super();

    this.state = {
      buttons : [
        {
          "name" : "Add Circle",
          "iconClass" : "fa fa-circle-o",
          "clickEvent" : function(){
            this.props._addShape("circle");
          }
        },
        {
          "name" : "Add Square",
          "iconClass" : "fa fa-square-o",
          "clickEvent" : function(){
            this.props._addShape("square");
          }
        },
        {
          "name" : "Add Triangle",
          "iconClass" : "fa fa-caret-up",
          "clickEvent" : function(){
            this.props._addShape("triangle");
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
          return <button className="claw-editor-button" title={btn.name} onclick={btn.clickEvent}><i className={btn.iconClass} /></button>;
        })}
      </div>
    )
  }
}
