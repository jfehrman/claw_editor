import React from 'react';
import Chai from 'chai';
import {shallow, mount, render} from 'enzyme';
import ClawEditorControls from '../../src/components/claw-editor-controls';
import {JSDOM} from 'jsdom'

const doc = new JSDOM('<!doctype html><html><body></body></html>')
const {window} = doc;
global.document = window.document; 
global.window = window;
const assert = Chai.assert;

/**
 * Test the claw editor controls object.
 * 
 * @author Joseph Fehrman
 * @since 30 July, 2017
 */
describe('ClawEditorControls', function(){
  var tempType;

  /**
   * Runs before each test.
   */
  beforeEach(function(){
    tempType = undefined;
  });

  /**
   * Small test function that allows us to see the results of addShape.
   *
   * @param shape Shape to be added.
   */
  function testFunction(shape){
    tempType = shape;
  }

  describe('#addShape()', function(){
    it('ClawEditorControls shall be able to be passed a custom addShape function.', () => {
      const wrapper = mount(<ClawEditorControls addShape={testFunction} />);
      wrapper.prop("addShape")("circle");
      assert.equal("circle", tempType);
    });
  });
});
