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
UBDC.Ruler = function() {

  /** PUBLIC VARIABLES **/
  this.base = 32;

  /** PUBLIC FUNCTIONS **/
  this.toFraction = function(inches) {

    var fraction = Math.floor(inches),
        numerator = Math.round( (inches % 1) * this.base ),
        denominator = this.base;

    while(numerator % 2 == 0 && numerator > 0) {

      numerator /= 2;
      denominator /= 2;

    }

    if (numerator > 0) {

      if(fraction != 0)
        fraction += ' ';
      else
        fraction = '';

      fraction += numerator + '/' + denominator;

    }

    return fraction;

  };

  this.toCentimeters =  function(inches) {

    return inches * 2.54;

  };

  this.toInches = function(cm) {

    return cm / 2.54;

  };

};

