this.js.law.run = this.js.law.run || {};
(function(window) {

    function RunGame() {
        this.initialize();
    }

    RunGame.prototype = new createjs.Container();

    RunGame.prototype.Container_initialize = RunGame.prototype.initialize;
	
   
    
    RunGame.prototype.initialize = function(event) 
    {
        this.Container_initialize();
        
        this.maskCon = new createjs.Shape();
        this.maskCon.graphics.beginFill("#ff0000").drawRect(0,0,orginalWidth,orginalHeight);
        this.addChild(this.maskCon);
       
        
        this.nowXml = GAME_XML.find("ranway1");
        
        this.bg = new js.law.run.Bg(this.nowXml.find("bg"));
        this.addChild(this.bg);
        
        this.player = new js.law.run.Player(this.nowXml.find("people"));
        
       
        this.player.x = 700;
        this.player.y = 250;
        
        this.addChild(this.player);
        //console.log(this.nowXml.find("bg").attr("folder"));
        this.addEventListener("mousedown",this.mousedown);
        nowScreen = this;
        
        nowScreen.setScale(this);
        this.regX =  orginalWidth;
        this.regY =  orginalHeight/2;
        //_layouter.addLayoutObject(this, "TL", "-0.2", 0, false, "heightFollow");    
        
         window.addEventListener("resize", this.setScaleResize, false);
    }
    
    RunGame.prototype.setScaleResize = function(event) 
    {
        cl(nowScreen);
        nowScreen.setScale(nowScreen);
     }
    
    RunGame.prototype.setScale = function(sp) 
    {
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
        
          sp.x = gameWidth;
          sp.y = orginalHeight*this.scaleY/2;
        //cl("sp.x="+sp.x+" scaleToFitY="+scaleToFitY);
    
    }
    
    RunGame.prototype.checkHit = function(obj) 
    { 
        
        if(obj.x > this.player.x+50 && (this.player.isJump && obj.top || !this.player.isJump && !obj.top))
        {
            obj.state = 1;
        }
    }
    
 
    
    RunGame.prototype.mousedown = function(evt) 
    {
        evt.currentTarget.jump();
    }
    
    RunGame.prototype.jump = function() 
    {
        this.player.jump();
    }
    
    
    
    RunGame.prototype.remove = function(event) 
    {
       
        this.removeAllChildren();
    }
    

    

   
   js.law.run.RunGame = RunGame;
}(window));



    