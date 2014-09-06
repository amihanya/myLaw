(function(window) {
research_mc = function() {
	this.initialize();
}
research_mc._SpriteSheet = new createjs.SpriteSheet({images: ["images/ranway1/objects/research.png"], frames: [[0,0,71,70,0,35.5,35],[71,0,71,70,0,35.5,35],[142,0,71,70,0,35.5,35],[0,70,71,70,0,35.5,35],[71,70,71,70,0,35.5,35],[142,70,71,70,0,35.5,35],[0,140,71,70,0,35.5,35],[71,140,71,70,0,35.5,35]]});
var research_mc_p = research_mc.prototype = new createjs.BitmapAnimation();
research_mc_p.BitmapAnimation_initialize = research_mc_p.initialize;
research_mc_p.initialize = function() {
	this.BitmapAnimation_initialize(research_mc._SpriteSheet);
	this.paused = false;
}
window.research_mc = research_mc;
}(window));

