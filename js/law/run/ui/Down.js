js.law.run.ui = js.law.run.ui || {};
(function(window) {

    function Down() {
        this.initialize();
    }

    Down.prototype = new createjs.Container();

    Down.prototype.Container_initialize = Down.prototype.initialize;
	
   
    
    Down.prototype.initialize = function(event) 
    {
        this.Container_initialize();
        
        this.nowXml = GAME_XML.find("ui").find("down");
        
        this.bg = new createjs.Bitmap(this.nowXml.find("bg").text());
        this.bg.x = 0;
        this.bg.y = 3;
        
        this.addChild(this.bg);
        
        
        this.stars_txt = new createjs.Text("123","40px Alef Hebrew", "#FFFFFF");
        this.stars_txt.x = 1095;
        this.stars_txt.textAlign = "right";
        this.addChild(this.stars_txt);
       
        this.level_txt = new createjs.Text("1 "+this.nowXml.find("levelText").text(),"35px Alef Hebrew", "#FFFFFF");
        this.level_txt.x = 1236;
        this.level_txt.y = 2;
        this.level_txt.textAlign = "right";
        this.addChild(this.level_txt);
        
        this.bar = new js.law.run.ui.Bar
        this.bar.x = 485;
        this.bar.y = 16;
        this.addChild(this.bar);
        
        this.info_btn = new js.control.Button(this.nowXml.find("info_btn").find("up").text(),
                                             this.nowXml.find("info_btn").find("over").text(),
                                             this.nowXml.find("info_btn").find("down").text(),
                                              this.nowXml.find("info_btn").find("text").text()
                                            );            
        this.info_btn.x = 294;
        this.info_btn.y = 7;
        this.addChild(this.info_btn);
        
        this.law_btn = new js.control.Button(this.nowXml.find("law_btn").find("up").text(),
                                             this.nowXml.find("law_btn").find("over").text(),
                                             this.nowXml.find("law_btn").find("down").text(),
                                             this.nowXml.find("law_btn").find("text").text()
                                            );
        this.law_btn.x = 86;
        this.law_btn.y = 7;
        this.addChild(this.law_btn);
        
        
        
        
        this.sound_btn = new js.control.Button(this.nowXml.find("sound_btn").find("up").text(),
                                             this.nowXml.find("sound_btn").find("over").text(),
                                             this.nowXml.find("sound_btn").find("down").text()
                                               
                                            );
        this.sound_btn.x = 21;
        this.sound_btn.y = 5;
        this.addChild(this.sound_btn);
        
      
       /* scaleMy(this.info_btn);
        scaleMy(this.sound_btn);
        scaleMy(this.law_btn);
        scaleMy(this.bar);*/
        
       // scaleMy(this.bg);
        var shape = new createjs.Shape();
        shape.graphics.beginFill("#ff0000").drawRect(0, 0, 100, 100);
        this.regX = 1250;
        this.regY = 50;
        //this.addChild(shape);
        
        this.scaleX = this.scaleY = 0.7;
        //scaleMy(this);
        _layouter.updateLayout();
        
    }
    
  
    
    Down.prototype.remove = function(event) 
    {
       
        this.removeAllChildren();
    }
    

    

   
   js.law.run.ui.Down = Down;
}(window));