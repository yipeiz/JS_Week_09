
// Setting up our map

// var map = L.Mapzen.map('map', {
//   center: [47.61033,-122.31801],
//   zoom: 16,
//   scene: L.Mapzen.BasemapStyles.BubbleWrap
// });

var map = L.map('map', {
  center: [0, 0],
  zoom: 2,
});

var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);
