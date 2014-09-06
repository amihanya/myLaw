(function(window) {
like_mc = function() {
	this.initialize();
}
like_mc._SpriteSheet = new createjs.SpriteSheet({images: ["images/ranway1/objects/like.png"], frames: [[0,0,71,70,0,35.5,35],[71,0,71,70,0,35.5,35],[142,0,71,70,0,35.5,35],[0,70,71,70,0,35.5,35],[71,70,71,70,0,35.5,35],[142,70,71,70,0,35.5,35],[0,140,71,70,0,35.5,35],[71,140,71,70,0,35.5,35],[142,140,71,70,0,35.5,35],[0,210,71,70,0,35.5,35]]});
var like_mc_p = like_mc.prototype = new createjs.BitmapAnimation();
like_mc_p.BitmapAnimation_initialize = like_mc_p.initialize;
like_mc_p.initialize = function() {
	this.BitmapAnimation_initialize(like_mc._SpriteSheet);
	this.paused = false;
}
window.like_mc = like_mc;
}(window));

