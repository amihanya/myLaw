this.js = this.js||{};

var stage;
var canvas;
var scaleX;
var scaleY;
var orginalWidth = 910;
var orginalHeight = 520;
var renderW = 910; 
var renderH = 520;
var gameXmlLink = "xml/game.xml";
var bg_arr = new Array;
var GAME_XML;
var MAIN_SCALE = 0.5; 
var nowScreen 
var manager
      // renderW = 640; renderH = 480;
      // scaleX = renderW / orgW
      // scaleY = renderH / orgH
//Create a stage by getting a reference to the canvas
$(document).ready(function() {init()});
                  
function init() {
    canvas = document.getElementById("canvas")  ;
    canvas.width = renderW;
    canvas.height = renderH;
  	stage = new createjs.Stage("canvas");
  	stage.enableMouseOver();
  	createjs.Ticker.fps = 30;
    createjs.Ticker.addEventListener("tick", stage);
  	createjs.Touch.enable(stage);
    OnResizeCalled();
    
    
  	
    
    _layouter = createjs.LiquidLayouter.getInstance();
    _layouter.initialize(stage);

    resize();
    OnResizeCalled();
    
    manager = new js.law.Manager();
  	stage.addChild(manager);
    
    /*_bottomRight = createContainer(orginalWidth, orginalHeight, -15, -15, "BOTTOM_RIGHT");
    _layouter.addLayoutObject(_bottomRight, "BR");
    _layouter.updateLayout();*/
}


function createContainer(x, y, localX, localY, label) {
	var container = new createjs.Container();
	container.x = x;
	container.y = y;
	stage.addChild(container);
	var shape = new createjs.Shape();
	shape.graphics.beginFill("#0066cc").drawRect(0, 0, 30, 30).endFill();
	shape.x = localX;
	shape.y = localY;
	container.addChild(shape);
	var text = new createjs.Text(label, "13px Consolas", "#ffffff");
	text.textAlign = "center";
	text.textBaseline = "middle";
	text.x = localX + (30 >> 1);
	text.y = localY + (30 >> 1);
	container.addChild(text);
	return container;
}
//resize the canvas event
function resize()
{
    window.addEventListener("resize", OnResizeCalled, false);
}

function OnResizeCalled() {

 /* var gameWidth = window.innerWidth;
  var gameHeight = window.innerHeight;
  canvas.style.width = gameWidth + "px";
  canvas.style.height = gameHeight + "px";
  /*scaleX = renderW / orginalWidth;
  scaleY = renderH / orginalHeight;

  var gameWidth = window.innerWidth;
  var gameHeight = window.innerHeight;
  var scaleToFitX = gameWidth / renderW;
  var scaleToFitY = gameHeight / renderH;

  var currentScreenRatio = gameWidth / gameHeight;
  var optimalRatio = Math.min(scaleToFitX, scaleToFitY);

   canvas.style.width = gameWidth + "px";
   canvas.style.height = gameHeight + "px";
   /* if (currentScreenRatio >= 1.77 && currentScreenRatio <= 1.79) {
        canvas.style.width = gameWidth + "px";
        canvas.style.height = gameHeight + "px";
    }
    else {
        canvas.style.width = renderW * optimalRatio + "px";
        canvas.style.height = renderH * optimalRatio + "px";
    }*/
   // resizeBg();

}

function setScale(sp) {

  /*  alert("ASD"+sp);
  var gameWidth = window.innerWidth;
  var gameHeight = window.innerHeight;
  scaleX = renderW / orginalWidth;
  scaleY = renderH / orginalHeight;

  var gameWidth = window.innerWidth;
  var gameHeight = window.innerHeight;
  var scaleToFitX = gameWidth / renderW;
  var scaleToFitY = gameHeight / renderH;

  var currentScreenRatio = gameWidth / gameHeight;
  var optimalRatio = Math.min(scaleToFitX, scaleToFitY);

  sp.scaleX = sp.scaleY = scaleToFitY;
    
}

function resizeBg()
{
     alert("ASDresizeBg");
    var gameWidth = window.innerWidth;
    var gameHeight = window.innerHeight;

    var scaleToFitX = gameWidth / renderW;
    var scaleToFitY = gameHeight / renderH;

    var currentScreenRatio = gameWidth / orginalHeight;
    var optimalRatio = Math.min(scaleToFitX, scaleToFitY);
    
    for(var i = 0;i<bg_arr.length;i++)
    {
        var sp = bg_arr[i];
        console.log(optimalRatio);
        
        //sp.scaleX = optimalRatio/1;
        
        sp.scaleY = 1/scaleToFitX;
        console.log(sp.scaleX,sp.scaleY);
    }/**/
}

function scaleMy(my)
{
    my.scaleX = my.scaleY = MAIN_SCALE;
}

function cl(obj){
    console.log(obj);
}
