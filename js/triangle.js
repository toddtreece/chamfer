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
  this.drawing = false;

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
  this.setup = function(canvas) {

    paper.setup(canvas);

    this.drawing = new paper.Group();

  };

  this.draw = function() {

    paper.view.viewSize = new paper.Size(this.canvas_size, this.canvas_size);

    this.ratio = this.side.b / this.side.a,
    this.padding = this.canvas_size * 0.10,
    this.max = this.canvas_size - (this.padding * 2);

    this.drawing.removeChildren();

    this.drawTriangle();
    this.drawRabbet();
    this.drawPlane();
    this.drawText();

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

    this.drawing.addChild(path);

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

    this.drawing.addChild(path);

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

    this.drawing.addChild(path);

  };

  this.drawText = function() {

    var ruler = new UBDC.Ruler();

    /** SIDE A **/
    var side_a = new paper.PointText({
      point: [
        (this.canvas_size / 2) - ((this.ratio * this.max) / 2) - (this.padding / 2),
        (this.padding + (this.max / 2))
      ],
      justification: 'center',
      content: ruler.toFraction(this.side.a) + '"',
      fillColor: '#000000',
      fontSize: this.max / 18
    });

    side_a.rotate(90);

    this.drawing.addChild(side_a);

    /** SIDE B **/
    var side_b = new paper.PointText({
      point: [
        (this.canvas_size / 2),
        this.padding + this.max + (this.padding / 2)
      ],
      justification: 'center',
      content: ruler.toFraction(this.side.b) + '"',
      fillColor: '#000000',
      fontSize: this.max / 18
    });

    this.drawing.addChild(side_b);

    /** RABBET HEIGHT **/
    var rabbet_height = new paper.PointText({
      point: [
        (this.canvas_size / 2) + (this.padding / 5),
        (this.padding + (this.max / 4))
      ],
      justification: 'center',
      content: ruler.toFraction(this.side.a / 2) + '"',
      fillColor: '#000000',
      fontSize: this.max / 22
    });

    rabbet_height.rotate(90);

    this.drawing.addChild(rabbet_height);

    /** RABBET WIDTH **/
    var rabbet_width = new paper.PointText({
      point: [
        (this.canvas_size / 2) +  ((this.ratio * this.max) / 4),
        this.padding + (this.max / 2) - (this.padding / 10)
      ],
      justification: 'center',
      content: ruler.toFraction(this.side.b / 2) + '"',
      fillColor: '#000000',
      fontSize: this.max / 22
    });

    this.drawing.addChild(rabbet_width);

  };

};
