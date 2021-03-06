/* ================================
Week 6 Assignment: Slide Model
================================ */

/** Here's a simple 'model' of a slide.
 *  It tracks the slide's index and the title we want in our HTML
 */
var slide1 = {
  slideNumber: 1,
  title: "Minnesota",
  filter: function(geojsonFeature) { return true; }
};

var slide2 = {
  slideNumber: 1,
  title: "Hennepin County",
  filter: function(geojsonFeature) { return true; }
};

var slide3 = {
  slideNumber: 1,
  title: "Low EBLLs in Hennepin County",
  filter: function(geojsonFeature) { return true; }
};

var slide4 = {
  slideNumber: 1,
  title: "Median EBLLs in Hennepin County",
  filter: function(geojsonFeature) { return true; }
};

var slide5 = {
  slideNumber: 1,
  title: "High EBLLs in Hennepin County",
  filter: function(geojsonFeature) { return true; }
};

/** Here's the simplest implementation I could come up with for
 * representing a deck of slides (nothing exotic is necessary!)
 */
var slideDeck = [slide1, slide2, slide3, slide4, slide5]
