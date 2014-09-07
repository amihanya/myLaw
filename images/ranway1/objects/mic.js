(function(window) {
mic_mc = function() {
	this.initialize();
}
mic_mc._SpriteSheet = new createjs.SpriteSheet({images: ["images/ranway1/objects/mic.png"], frames: [[0,0,71,70,0,35.5,35],[71,0,71,70,0,35.5,35],[142,0,71,70,0,35.5,35],[0,70,71,70,0,35.5,35],[71,70,71,70,0,35.5,35],[142,70,71,70,0,35.5,35],[0,140,71,70,0,35.5,35],[71,140,71,70,0,35.5,35]]});
var mic_mc_p = mic_mc.prototype = new createjs.BitmapAnimation();
mic_mc_p.BitmapAnimation_initialize = mic_mc_p.initialize;
mic_mc_p.initialize = function() {
	this.BitmapAnimation_initialize(mic_mc._SpriteSheet);
	this.paused = false;
}
window.mic_mc = mic_mc;
}(window));

