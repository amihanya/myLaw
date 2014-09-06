js.law.run = js.law.run || {};
js.law.run.map = js.law.run.map || {};
(function(window) {

    function Map() {
        this.initialize();

        
    }

    Map.prototype = new createjs.Container();

    Map.prototype.Container_initialize = Map.prototype.initialize;
	
    Map.prototype.makeBgSize = function(sp) 
    {
       // bg_arr.push(sp);
        
       
       

    }
    
    Map.prototype.initialize = function(event) 
    {
         this.Container_initialize();
        
        this.nowXml = GAME_XML.find("map");
        
        this.bg = new createjs.Bitmap(this.nowXml.find("bg").text());
        //this.makeBgSize(this.bg);
         _layouter.addLayoutObject(this.bg, "TL", NaN, NaN, false, "None");
        _layouter.updateLayout();
        this.addChild(this.bg);
        
       /* this.ui = new js.law.run.ui.Ui(js.law.run.ui.Top.SMALL,true);
        this.addChild(this.ui);*/
        
        
        
        
        this.levelCon = new createjs.Container();
        this.levelCon.x = 10;
        this.levelCon.y = 110;
        this.addChild(this.levelCon);
        
        _layouter.addLayoutObject(this.levelCon, "T",NaN,window.innerHeight/2-50);
        _layouter.updateLayout();
        
        var stars_arr = [js.law.run.map.LevelBox.ONE_STARTS,js.law.run.map.LevelBox.TWO_STARTS,js.law.run.map.LevelBox.THREE_STARTS,js.law.run.map.LevelBox.LOCK_STARTS,js.law.run.map.LevelBox.LOCK_STARTS,js.law.run.map.LevelBox.LOCK_STARTS];
        for(var i = 1;i<6;i++)
        {
            var levelBox = new js.law.run.map.LevelBox(i,stars_arr[i-1]);
            levelBox.x = 720-(i-1)*180;
            levelBox.id = i;
            levelBox.addEventListener(js.law.run.map.LevelBox.SHOW_INFO,this.showInfoEvent);
            levelBox.addEventListener(js.law.run.map.LevelBox.MAKE_LEVEL,this.makeLevelEvent);
            this.levelCon.addChild(levelBox);
        }
        
        this.children.forEach(function(element){
            scaleMy(element);
        });

    }
   
    Map.prototype.makeLevelEvent = function(event) 
    {
        
       event.currentTarget.parent.parent.makeLevel(event.currentTarget.id);
    } 

    Map.prototype.showInfoEvent = function(event) 
    {
        
       event.currentTarget.parent.parent.showInfo(event.currentTarget.id);
    } 
    
     Map.prototype.removeInfoEvent = function(event) 
    {
     
       event.currentTarget.parent.removeInfo();
    } 
  
     Map.prototype.makeLevel = function(id) 
    {
        console.log(id);
       /* this.showInfoCon = new js.law.run.map.LevelInfo(id);
        this.showInfoCon.addEventListener(js.law.run.map.LevelInfo.CLOSE_INFO,this.removeInfoEvent);
        this.addChild(this.showInfoCon);*/
    }
       
    Map.prototype.showInfo = function(id) 
    {
        console.log(id);
        this.showInfoCon = new js.law.run.map.LevelInfo(id);
        this.showInfoCon.addEventListener(js.law.run.map.LevelInfo.CLOSE_INFO,this.removeInfoEvent);
        this.addChild(this.showInfoCon);
    }
    
      Map.prototype.removeInfo = function() 
    {
        this.showInfoCon.remove();
        this.showInfoCon.removeEventListener(js.law.run.map.LevelInfo.CLOSE_INFO,this.removeInfoEvent);
        this.removeChild(this.showInfoCon);
        this.showInfoCon = null;
    }
   
  
    
    Map.prototype.remove = function(event) 
    {
       
        this.removeAllChildren();
    }
    

    

   
   js.law.run.map.Map = Map;
}(window));