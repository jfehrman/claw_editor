/**
 * Collection of shapes.
 * 
 * @author Joseph Fehrman
 * @since 26 June, 2017
 * @see Singleton, Revealing Module Pattern
 */
var Geometry = (function(){
  var instance;

  /**
   * Get singleton instance of object.
   */
  function getInstance(){
    if(!instance){

      // Actual object implementation.
      instance = (function(){
        var shapes = [];
        var renderElement;

        function getShapes(){
          return shapes;
        }

        function setShapes(newShapes){
          shapes = newShapes;
        }

        function getRenderElement(){
          return renderElement;
        }

        function setRenderElement(newRenderElement){
          renderElement = newRenderElement;
        }

        /**
         * Add a new shape to the collection of shapes.
         */
        function addShape(newShape){
          newShape.setLayer(shapes.length + 1); // Set the shape to be the highest layer.
          shapes.add(newShape);
        }

        /**
         * Render the shapes to the screen.
         */
        function render(){
          // TODO implement drawing the shapes.
        }
  
        return {
          "getShapes" : getShapes,
          "setShapes" : setShapes,
          "addShape" : addShape,
          "getRenderElement" : getRenderElement,
          "setRenderElement" : setRenderElement,
          "render" : render,
        };
      })();
    }
    return instance;
  }
})();
