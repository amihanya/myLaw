js.character = js.character || {};
(function(window) {

    function Part(spriteSheet,key,type) {
        this.spriteSheet = spriteSheet;
        this.key = key;
        var xml = GAME_XML.find("character");
        this.xml = xml.find("menu");
        this.type = type;
        if(type == js.character.Menu.WIDE ) this.size = "big";
        else this.size = "small";
        
        
        
        this.initialize();
    }

    
    Part.prototype = new createjs.Container();

    Part.prototype.Container_initialize = Part.prototype.initialize;
	
    
    
    Part.prototype.makeBgSize = function(sp) 
    {
       // bg_arr.push(sp);   

    }
    
    Part.prototype.initialize = function(event) 
    {
        this.Container_initialize();
        var size = this.xml.find("frame");
       
        this.cursor = "pointer";
        
       this.frame_reg = new createjs.Bitmap(size.find(this.size+"_up").text());
        this.addChild(this.frame_reg);
        
       this.frame_over = new createjs.Bitmap(size.find(this.size+"_selected").text());
        this.addChild(this.frame_over);
        this.select(false);
        
        this.part = new createjs.Sprite(this.spriteSheet);
        this.part.gotoAndStop(this.key);
       
        
        this.selected = false;
        this.addChild(this.part);
       
        
        
      }

    Part.prototype.selectMe = function(bol){
        this.selected = !this.selected;
        this.frame_over.visible = this.selected;
        
    }
    
    
   Part.prototype.select = function(bol) 
    {
       
        this.frame_reg.visible = !bol;
        this.frame_over.visible = bol;
    }
  
    
    Part.prototype.remove = function(event) 
    {
       
        this.removeAllChildren();
    }
    
    
   js.character.Part = Part;
}(window));