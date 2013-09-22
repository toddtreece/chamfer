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
UBDC.Triangle = function() {

  /** PUBLIC VARIABLES **/
  this.canvas_size = 600;
  this.ratio = 0;
  this.padding = 0;
  this.max = 0;

  this.angle = {
    a: 0,
    b: 0,
    c: 0
  };

  this.side = {
    a: 0,
    b: 0,
    c: 0
  };

  /** PUBLIC FUNCTIONS **/
  this.draw = function(canvas) {

    paper.setup(canvas);

    this.ratio = this.side.b / this.side.a,
    this.padding = this.canvas_size * 0.10,
    this.max = this.canvas_size - (this.padding * 2);

    this.drawTriangle();
    this.drawDimensions();
    this.drawRabbet();
    this.drawPlane();

    paper.view.draw();

  };

  this.drawTriangle = function() {

    var path = new paper.Path({
      strokeColor: '#000000',
      fillColor: '#D2D1A7',
      strokeWidth: 2
    });

    path.add(
      (this.canvas_size / 2) - ((this.ratio * this.max) / 2),
      this.padding
    );

    path.lineBy(0, this.max);
    path.lineBy(this.ratio * this.max, 0);

    path.closed = true;

  };

  this.drawDimensions = function() {

    var path = new paper.Path({
      strokeColor: '#000000',
      strokeWidth: 0.5,
      dashArray: [3, 1]
    });

    path.add(
      (this.canvas_size / 2) - ((this.ratio * this.max) / 2),
      this.padding
    );

    path.lineBy(-(this.padding / 3), 0);
    path.lineBy(0, this.max);
    path.lineBy(this.padding / 3, 0);

    path.lineBy(0, this.padding / 3);
    path.lineBy(this.max * this.ratio, 0);
    path.lineBy(0, -(this.padding / 3));

  };

  this.drawRabbet = function() {

    var path = new paper.Path({
      strokeColor: '#000000',
      fillColor: '#C7D2CD',
      strokeWidth: 1
    });

    path.add(
      (this.canvas_size / 2) - ((this.ratio * this.max) / 2),
      this.padding
    );

    path.lineBy((this.max * this.ratio) / 2, 0);
    path.lineBy(0, this.max / 2);

    path.lineBy((this.max * this.ratio) / 2, 0);
    path.lineBy(0, this.max / 2);

    path.closed = true;

  };

  this.drawPlane = function() {

    var path = new paper.Path({
      strokeColor: '#000000',
      strokeWidth: 1,
      dashArray: [2, 1]
    });

    path.add(
      (this.canvas_size / 2) - ((this.ratio * this.max) / 2),
      this.padding - (this.max / 2)
    );

    path.lineBy((this.max * this.ratio) * 1.5, this.max * 1.5);

  };

};
