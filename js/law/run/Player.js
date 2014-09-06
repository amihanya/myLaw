this.js.law.run = this.js.law.run || {};
(function(window) {
 
    function Player($peopleXml) {
        this.xml = $peopleXml;
        this.initialize();
    }

    Player.prototype = new createjs.Container();

    Player.prototype.Container_initialize = Player.prototype.initialize;
	
   
    
    Player.prototype.initialize = function(event) 
    {
        this.Container_initialize();
        
        this.playerStartY = -60;
        
        this.player = new js.law.run.people.People(this.xml);
        this.player.y = this.playerStartY
        this.addChild(this.player);
        this.isJump = false;
        
        
        var shadow = this.shadow =  new createjs.Bitmap("images/ranway1/people/girl/shadow.png");
        
        shadow.regX = 200;
        shadow.regY = 320;
        shadow.x = this.player.x+shadow.regX/2+30;
        shadow.y = this.player.y+shadow.regY/2-this.playerStartY+8;
        shadow.scaleX = shadow.scaleY = MAIN_SCALE;
        this.addChild(shadow);
        this.smallShadow =  MAIN_SCALE-0.1;
       
    }
    
    Player.prototype.jump = function() 
    {
        if(!this.isJump)
        {
            this.isJump = true;
            this.player.pause();
            createjs.Tween.get(this.player).to({y:-250}, 350, Ease.cubicIn  ).wait(500).to({y:this.playerStartY}, 200, Ease.cubicIמ).call(this.aniComplete,[],this);
            createjs.Tween.get(this.shadow).to({scaleX:this.smallShadow,scaleY: this.smallShadow}, 350, Ease.cubicIn  ).wait(500).to({scaleX: MAIN_SCALE,scaleY: MAIN_SCALE}, 200, Ease.cubicOut);
        }
    }
   
    Player.prototype.aniComplete = function() 
    {
        this.isJump = false;
        this.player.resume();
       //this.removeAllChildren();
    }
    
    Player.prototype.remove = function(event) 
    {
       
        this.removeAllChildren();
    }
    

    

   
   js.law.run.Player = Player;
}(window));