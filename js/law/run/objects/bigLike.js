(function(window) {
BigLike_mc = function() {
	this.initialize();
}
BigLike_mc._SpriteSheet = new createjs.SpriteSheet({images: ["images/ranway1/objects/bigLike.png"], frames: [[0,0,71,70,0,35.5,35],[71,0,71,70,0,35.5,35],[142,0,71,70,0,35.5,35],[0,70,71,70,0,35.5,35],[71,70,71,70,0,35.5,35],[142,70,71,70,0,35.5,35],[0,140,71,70,0,35.5,35],[71,140,71,70,0,35.5,35]]});
var BigLike_mc_p = BigLike_mc.prototype = new createjs.BitmapAnimation();
BigLike_mc_p.BitmapAnimation_initialize = BigLike_mc_p.initialize;
BigLike_mc_p.initialize = function() {
	this.BitmapAnimation_initialize(BigLike_mc._SpriteSheet);
	this.paused = false;
}
window.BigLike_mc = BigLike_mc;
}(window));

