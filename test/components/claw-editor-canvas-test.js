import React from 'react';
import Chai from 'chai';
import {shallow, mount, render} from 'enzyme';
import ClawEditorCanvas from '../../src/components/claw-editor-canvas';
import {JSDOM} from 'jsdom'

const doc = new JSDOM('<!doctype html><html><body></body></html>')
const {window} = doc;
global.document = window.document; 
global.window = window;
const assert = Chai.assert;
const expect = Chai.expect;

/**
 * Test the claw editor canvas object.
 *
 * @author Joseph Fehrman
 * @since 05 August, 2017
 */
describe('ClawEditorCanvas', () => {

  describe('DomStructure', () => {
    it('ClawEditorCanvas shall render a shape when passed a valid array of shape descriptions.', () => {
      const wrapper = mount(<ClawEditorCanvas shapes={[{
        "type" : "circle",
        "height" : 10,
        "width" : 10,
        "color" : "red",
      }]} />);
      var domElement = wrapper.find("circle");
      expect(domElement).to.not.empty;
    });
  });

  it('ClawEdtiroCanvas shall throw an error when passed an invalid array of shape descriptions.', () => {
    expect(mount.bind(window, <ClawEditorCanvas shapes={[{
      "type" : "Not a shape",
      "height" : 10,
      "width" : 10,
      "color" : "red",
    }]} />)).to.throw(Error, 'Unable to create shape because it is unknown.');
  });
});

