js.character = js.character || {};
(function(window) {

    function SkinColor(color) {
        this.color = color;
        var xml = GAME_XML.find("character");
        xml = xml.find("top-menu");
        
        this.xml = xml.find("color-skin");

        this.initialize();
    }

    
    SkinColor.prototype = new createjs.Container();

    SkinColor.prototype.Container_initialize = SkinColor.prototype.initialize;
	
    
    
    SkinColor.prototype.makeBgSize = function(sp) 
    {
       // bg_arr.push(sp);   

    }
    
    SkinColor.prototype.initialize = function(event) 
    {
         this.Container_initialize();
        this.cursor = "pointer";
     
        this.name = this.color;
        var currntColor = this.xml.find(this.color); 
        this.frame_reg = new createjs.Bitmap(currntColor.find("up").text());

        this.addChild(this.frame_reg);
        
       this.frame_over = new createjs.Bitmap(currntColor.find("on").text());
        this.addChild(this.frame_over);
        this.select(false);
        
        if(js.UserInfo.color == this.color){
            this.select(true);
        }
        
        /*this.SkinColor = new createjs.Sprite(this.spriteSheet);
        this.SkinColor.gotoAndStop(this.key);
       */
        
        //this.selected = false;
        this.addChild(this);
       
        
        
      }

    SkinColor.prototype.selectMe = function(bol){
        this.selected = bol;
        this.frame_over.visible = true;
        js.UserInfo.color = this.color;
    }
    
    
   SkinColor.prototype.select = function(bol) 
    {
       
        this.frame_reg.visible = !bol;
        this.frame_over.visible = bol;
    }
  
    
    SkinColor.prototype.remove = function(event) 
    {
       
        this.removeAllChildren();
    }
    
    
   js.character.SkinColor = SkinColor;
}(window));