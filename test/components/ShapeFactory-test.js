import React from 'react';
import Chai from 'chai';
import {shallow, mount, render} from 'enzyme';
import ShapeFactory from '../../src/components/support/factory/ShapeFactory';
import {JSDOM} from 'jsdom'

const doc = new JSDOM('<!doctype html><html><body></body></html>')
const {window} = doc;
global.document = window.document; 
global.window = window;
const assert = Chai.assert;
const expect = Chai.expect;

/**
 * Test the ShapeFactory class.
 * 
 * @author Joseph Fehrman
 * @since 04 August, 2017
 */
describe('ShapeFactory', () => {

  /**
   * Test the build function of ShapeFactory.
   */
  describe('#build()', () => {
    it('ShapeFactory shall be able to build a cirlce when the build function is passed a circle description.', () => {
      var shapeFactory = new ShapeFactory();
      var results = shapeFactory.build('circle', 10, 10, 'red');
      var expectedResults = {
        'cx' : 5,
        'cy' : 5,
        'fill' : 'red',
        'type' : 'circle',
      };
      assert.equal(expectedResults.cx, results.props.cx);
      assert.equal(expectedResults.cy, results.props.cy);
      assert.equal(expectedResults.fill, results.props.fill);
      assert.equal(expectedResults.type, results.type);
    });

    it('ShapeFactory shall be able to build a square when the build function is passed a square description.', () => {
      var shapeFactory = new ShapeFactory();
      var results = shapeFactory.build('square', 10, 10, 'red');
      var expectedResults = {
        'height' : 10,
        'width' : 10,
        'fill' : 'red',
        'type' : 'rect',
      };
      assert.equal(expectedResults.height, results.props.height);
      assert.equal(expectedResults.width, results.props.width);
      assert.equal(expectedResults.fill, results.props.fill);
      assert.equal(expectedResults.type, results.type);
    });

    it('ShapeFactory shall be able to build a triangle when the build function is passed triangle description.', () => {
      var shapeFactory = new ShapeFactory();
      var results = shapeFactory.build('triangle', 10, 10, 'red');
      var expectedResults = {
        'points' : "0,0 10,0 0,10",
        'type' : 'polygon',
        'fill' : 'red',
      }
      assert.equal(expectedResults.type, results.type);
      assert.equal(expectedResults.fill, results.props.fill);
      assert.equal(expectedResults.points, results.props.points);
    });

    it('ShapeFacory shall fail and throw an error when passed an invalid shape.', () => {
      var shapeFactory = new ShapeFactory();
      expect(shapeFactory.build.bind(shapeFactory, 'Not a shape', 10, 10, 'red')).to.throw(Error, 'Unable to create shape because it is unknown.');
    });
  });
});
