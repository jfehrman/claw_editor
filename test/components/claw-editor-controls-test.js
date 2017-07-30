import React from 'react';
import Chai from 'chai';
import ClawEditorControls from '../../src/components/claw-editor-controls';

var assert = Chai.assert;

/**
 * Test the claw editor controls object.
 * 
 * @author Joseph Fehrman
 * @since 30 July, 2017
 */
describe('ClawEditorControls', function(){
  describe('Test', function(){
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});
