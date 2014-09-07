(function(window) {
Fix_mc = function() {
	this.initialize();
}
Fix_mc._SpriteSheet = new createjs.SpriteSheet({images: ["images/ranway1/objects/fix.png"], frames: [[0,0,71,70,0,35.5,35],[71,0,71,70,0,35.5,35],[142,0,71,70,0,35.5,35],[0,70,71,70,0,35.5,35],[71,70,71,70,0,35.5,35],[142,70,71,70,0,35.5,35],[0,140,71,70,0,35.5,35],[71,140,71,70,0,35.5,35]]});
var Fix_mc_p = Fix_mc.prototype = new createjs.BitmapAnimation();
Fix_mc_p.BitmapAnimation_initialize = Fix_mc_p.initialize;
Fix_mc_p.initialize = function() {
	this.BitmapAnimation_initialize(Fix_mc._SpriteSheet);
	this.paused = false;
}
window.Fix_mc = Fix_mc;
}(window));

