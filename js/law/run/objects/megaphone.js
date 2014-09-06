(function(window) {
megaphone_mc = function() {
	this.initialize();
}
megaphone_mc._SpriteSheet = new createjs.SpriteSheet({images: ["images/ranway1/objects/megaphone.png"], frames: [[0,0,71,70,0,35.5,35],[71,0,71,70,0,35.5,35],[142,0,71,70,0,35.5,35],[0,70,71,70,0,35.5,35],[71,70,71,70,0,35.5,35],[142,70,71,70,0,35.5,35],[0,140,71,70,0,35.5,35],[71,140,71,70,0,35.5,35]]});
var megaphone_mc_p = megaphone_mc.prototype = new createjs.BitmapAnimation();
megaphone_mc_p.BitmapAnimation_initialize = megaphone_mc_p.initialize;
megaphone_mc_p.initialize = function() {
	this.BitmapAnimation_initialize(megaphone_mc._SpriteSheet);
	this.paused = false;
}
window.megaphone_mc = megaphone_mc;
}(window));

