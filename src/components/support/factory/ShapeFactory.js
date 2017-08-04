import React from 'react';

/**
 * Creates SVG shapes.
 * 
 * @author 1r0nm@n
 * @since 04 August, 2017
 */
export default class ShapeFactory{
  
  /**
   * Default constuctor.
   */
  constructor(){
  }

  /**
   * Build the appropriate shape based on the type, height, width, and color.
   *
   * @return SVG representation of the shape.
   */
  build(shape, height, width, color){
    switch(shape.toLowerCase()){
      case 'circle':
        var x = width/2, y=height/2;
        return <circle cx={x} cy={y} fill={color} />
        break;
      case 'square':
        return <rect width={width} height={height} fill={color} />
        break;
      case 'triangle':
        return <rect width={width} height={height} fill={color} />
        break;
      default:
        throw new Error("Unable to create shpae because it is unknown.");
    }
  }
}
