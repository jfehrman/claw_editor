/**
 * Represents a shape in a Geometry.
 * 
 * @author Joseph Fehrman
 * @since 26 June, 2017
 * @see Revealing Module Pattern
 */
var Shape = function(){
  var color;
  var height;
  var width;
  var type;
  var xCoordinate;
  var yCoordinate;
  var layer;
  
  /* Accessor Methods. */

  function getColor(){
    return color;
  }

  function setColor(newColor){
    color = newColor;
  }

  function getHeight(){
    return height;
  }

  function setHeight(newHeight){
    height = newHeight;
  }

  function getWidth(){
    return width;
  }

  function setWidth(newWidth){
    width = newWidth;
  }

  function getType(){
    return type;
  }

  function setType(newType){
    type = newType;
  }

  function getXCoordinate(){
    return xCoordinate;
  }

  function setXCoordinate(newXCoordinate){
    xCoordinate = newXCoordinate;
  }

  function getYCoordinate(){
    return yCoordinate;
  }

  function setYCoordinate(newYCoordinate){
    yCoordinate = newYCoordinate;
  }

  function getLayer(){
    return layer;
  }

  function setLayer(newLayer){
    layer = newLayer;
  }

  return {
    "getColor" : getColor,
    "setColor" : setColor,
    "getHeight" : getHeight,
    "setHeight" : setHeight,
    "getWidth" : getWidth,
    "setWidth" : setWidth,
    "getType" : getType,
    "setType" : setType,
    "getXCoordinate" : getXCoordinate,
    "setXCoordinate" : setXCoordinate,
    "getYCoordinate" : getYCoordinate,
    "setYCoordinate" : setYCoordinate,
    "getLayer" : getLayer,
    "setLayer" : setLayer,
  }
}
