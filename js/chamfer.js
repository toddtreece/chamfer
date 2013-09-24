// namespace
var UBDC =  UBDC || {};

/**
 *
 * Union Bridge Drum Company Chamfer Calculator
 * Copyright 2013 Todd Treece
 * todd@unionbridge.org
 *
 * This file is part of the Union Bridge Drum Company Chamfer Calculator.
 *
 * The Union Bridge Drum Company Chamfer Calculator is free software:
 * you can redistribute it and/or modify it under the terms of
 * the GNU General Public License as published by the Free
 * Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * The Union Bridge Drum Company Chamfer Calculator is distributed
 * in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General
 * Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with The Union Bridge Drum Company Chamfer Calculator.  If not,
 * see <http://www.gnu.org/licenses/>.
 *
 */
UBDC.Chamfer = function() {

  /** PRIVATE VARIABLES  **/
  var bevel_angle = 9, // stave bevel angle
      thickness = 0.75; // inches

  /** PUBLIC FUNCTIONS  **/
  this.solve = function() {

    var tri = new UBDC.Triangle();

    tri.angle.a = this.toRadians(90 - bevel_angle);
    tri.angle.b = this.toRadians(180 - (90 - bevel_angle));
    tri.angle.c = this.toRadians(90);

    tri.side.a = thickness;
    tri.side.b = tri.side.a / Math.tan(tri.angle.a);
    tri.side.c = Math.sqrt(this.squared(tri.side.a) + this.squared(tri.side.b));

    return tri;

  };

  /** GETTER & SETTERS  **/
  this.angle = function(input_angle) {

    if(typeof input_angle == 'undefined')
      return bevel_angle;

    input_angle = parseInt(input_angle);

    if(isNaN(input_angle))
      throw "Invalid angle number";

    if(input_angle > 45 || input_angle <= 0)
      throw "You must provide a bevel angle between 45&deg; and 0&deg;";

    bevel_angle = input_angle;

    return bevel_angle;

  };

  this.thickness = function(input_thickness) {

    if(typeof input_thickness == 'undefined')
      return thickness;

    input_thickness = parseFloat(input_thickness);

    if(isNaN(input_thickness))
      throw "Invalid thickness number";

    thickness = input_thickness;

    return thickness;

  };

  /** UTILITY FUNCTIONS **/
  this.toRadians = function(deg) {

    return deg * (Math.PI / 180);

  };

  this.toDegrees = function(rad) {

    return rad * (180 / Math.PI);

  };

  this.squared = function(input) {

    return input * input;

  };

};

