(function(window) {
Man_mc = function() {
	this.initialize();
}
Man_mc._SpriteSheet = new createjs.SpriteSheet({images: ["images/ranway1/objects/man.png"], frames: [[0,0,151,201,0,0,0]]});
var Man_mc_p = Man_mc.prototype = new createjs.BitmapAnimation();
Man_mc_p.BitmapAnimation_initialize = Man_mc_p.initialize;
Man_mc_p.initialize = function() {
	this.BitmapAnimation_initialize(Man_mc._SpriteSheet);
	this.paused = false;
}
window.Man_mc = Man_mc;
}(window));

