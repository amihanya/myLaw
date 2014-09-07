(function(window) {
shild_mc = function() {
	this.initialize();
}
shild_mc._SpriteSheet = new createjs.SpriteSheet({images: ["images/ranway1/objects/shild.png"], frames: [[0,0,71,70,0,35.5,35],[71,0,71,70,0,35.5,35],[142,0,71,70,0,35.5,35],[0,70,71,70,0,35.5,35],[71,70,71,70,0,35.5,35],[142,70,71,70,0,35.5,35],[0,140,71,70,0,35.5,35],[71,140,71,70,0,35.5,35]]});
var shild_mc_p = shild_mc.prototype = new createjs.BitmapAnimation();
shild_mc_p.BitmapAnimation_initialize = shild_mc_p.initialize;
shild_mc_p.initialize = function() {
	this.BitmapAnimation_initialize(shild_mc._SpriteSheet);
	this.paused = false;
}
window.shild_mc = shild_mc;
}(window));

