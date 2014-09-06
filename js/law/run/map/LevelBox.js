js.law.run = js.law.run || {};
js.law.run.map = js.law.run.map || {};
(function(window) {

    function LevelBox(level,rank) {
        
        this.rank = rank;
        this.level = level;
        
        this.initialize();

        
    }

    LevelBox.prototype = new createjs.Container();

    LevelBox.prototype.Container_initialize = LevelBox.prototype.initialize;
	
    LevelBox.ONE_STARTS = "a";
    LevelBox.TWO_STARTS = "b";
    LevelBox.THREE_STARTS = "c";
    LevelBox.LOCK_STARTS = "lock";
    
    LevelBox.SHOW_INFO = "showInfoEvent";
    LevelBox.MAKE_LEVEL = "makeLevelEvent";
    
    LevelBox.prototype.initialize = function(event) 
    {
        this.Container_initialize();
        
        this.nowXml = GAME_XML.find("map").find("levelBox").find("level"+this.level);
        
        this.levelBg = new createjs.Bitmap(this.nowXml.find(this.rank).text());
        this.addChild(this.levelBg);
        
        this.bgCon = new createjs.Container();
        this.addChild(this.bgCon);
        
        this.levelBg.cursor = "pointer";
         this.levelBg.addEventListener("mousedown",this.makeLevel);
        
        this.info_btn_xml = GAME_XML.find("map").find("levelBox").find("info_btn");
        
         this.info_btn = new js.control.Button(this.info_btn_xml.find("up").text(),
                                            this.info_btn_xml.find("over").text(),
                                            this.info_btn_xml.find("down").text()
                                           );
        this.info_btn.x = 14;
        this.info_btn.y = 72;
        this.addChild(this.info_btn);
        
        this.info_btn.addEventListener("mousedown",this.makeInfo);
       

    }
   
    LevelBox.prototype.makeInfo = function(event) 
    {
        event.currentTarget.parent.dispatchEvent(LevelBox.SHOW_INFO);
    }
    
    LevelBox.prototype.makeLevel = function(event) 
    {
        event.currentTarget.parent.dispatchEvent(LevelBox.MAKE_LEVEL);
    }
     
   
  
    
    LevelBox.prototype.remove = function(event) 
    {
       
        this.removeAllChildren();
    }
    

    

   
   js.law.run.map.LevelBox = LevelBox;
}(window));