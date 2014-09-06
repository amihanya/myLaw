(function(window) {
heart_mc = function() {
	this.initialize();
}
heart_mc._SpriteSheet = new createjs.SpriteSheet({images: ["images/ranway1/ui/heart.png"], frames: [[0,0,96,24,0,0,0],[0,24,96,24,0,0,0],[0,48,96,24,0,0,0],[0,72,96,24,0,0,0]]});
var heart_mc_p = heart_mc.prototype = new createjs.Sprite();
heart_mc_p.Sprite_initialize = heart_mc_p.initialize;
heart_mc_p.initialize = function() {
	this.Sprite_initialize(heart_mc._SpriteSheet);
	this.paused = false;
}
window.heart_mc = heart_mc;
}(window));

