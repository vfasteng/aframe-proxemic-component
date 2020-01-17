/* global AFRAME */

if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}
console.log('A-Frame Proxemic Components Version: 0.0.13 (Date 2020-01-17, Commit #00a58bf)');

require("./src/proximity-sensor.js")
require( "./src/compass-sensor.js")