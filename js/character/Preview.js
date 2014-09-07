js.character = js.character || {};
(function(window) {

    function Preview() {
        this.xml = GAME_XML.find("character");
        this.initialize();

        
    }

    Preview.prototype = new createjs.Container();

    Preview.prototype.Container_initialize = Preview.prototype.initialize;
	
    Preview.prototype.makeBgSize = function(sp) 
    {
       // bg_arr.push(sp);
        

    }
    
    Preview.prototype.initialize = function(event) 
    {
        this.Container_initialize();
        
    }
  
    Preview.prototype.spritesheetLoad = function()
    {
        var data = this.queue.getResult("spritesheet_json");
        data.images = ["images/Preview/"+js.UserInfo.gender+"_spritesheet/0.png"];
       this.spriteSheet = new createjs.SpriteSheet(data);
       /* var   player = new createjs.Sprite(spriteSheet,"run");
        player.gotoAndStop("Build Preview boy/boy_hair10_CDa");
            this.addChild(player);*/
        
        this.startMakeMenus();
    
    }
    
    
     
    Preview.prototype.remove = function(event) 
    {
       
        this.removeAllChildren();
    }
    

    

   
   js.character.Preview = Preview;
}(window));