js.law.run = js.law.run || {};
js.law.run.map = js.law.run.map || {};
(function(window) {

    function LevelInfo(level) {
        
        this.level = level;
        
        this.initialize();

        
    }

    LevelInfo.prototype = new createjs.Container();

    LevelInfo.prototype.Container_initialize = LevelInfo.prototype.initialize;
	

    
    LevelInfo.CLOSE_INFO = "closeInfoEvent";
    
    LevelInfo.prototype.initialize = function(event) 
    {
        this.Container_initialize();
        
        this.bg = new createjs.Shape();
        this.bg.alpha = 0.8;
        this.bg.graphics.beginFill("#000000").drawRect(0, 0, orginalWidth, orginalHeight);
        this.addChild(this.bg);
        
        this.nowXml = GAME_XML.find("map").find("levelBox").find("level"+this.level);
        
        this.levelBg = new createjs.Bitmap(this.nowXml.find("info").text());
        this.addChild(this.levelBg);
        
        this.levelBg.x = orginalWidth/2-201;
        this.levelBg.y = orginalHeight/2-100;
        
        this.info_btn_xml = GAME_XML.find("map").find("levelBox").find("info_btn");
        
         this.close_btn = new js.control.Button( GAME_XML.find("map").find("continue").find("up").text(),
                                             GAME_XML.find("map").find("continue").find("over").text(),
                                             GAME_XML.find("map").find("continue").find("down").text()
                                           );
        this.addChild(this.close_btn);
        this.close_btn.x = this.levelBg.x+30;
        this.close_btn.y = this.levelBg.y+152;
        this.addChild(this.close_btn);
        
        this.close_btn.addEventListener("mousedown",this.makeInfo);
       

    }
   
    LevelInfo.prototype.makeInfo = function(event) 
    {
        event.currentTarget.parent.dispatchEvent(LevelInfo.CLOSE_INFO);
    }
     
   
  
    
    LevelInfo.prototype.remove = function() 
    {
       this.close_btn.removeEventListener("mousedown",this.makeInfo);
        this.close_btn.remove();
        console.log(this);
        this.removeAllChildren();
    }
    

    

   
   js.law.run.map.LevelInfo = LevelInfo;
}(window));