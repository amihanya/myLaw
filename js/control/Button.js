this.js.control = this.js.control || {};
(function(window) {

    function Button(up,over,down,text) {
        
        this.$up = up;
        this.$down = down;
        this.$over = over;
        this.$text = text;
        
        this.initialize();
       
        
    }

    Button.prototype = new createjs.Container();

    Button.prototype.Container_initialize = Button.prototype.initialize;
	
    Button.UP = "--up";
    Button.DOWN = "--down";
    Button.OVER = "--over";
    
    
    Button.prototype.initialize = function(event) 
    {
        
         this.Container_initialize();
        
        this.cursor = "pointer";
        
        this.up = new createjs.Bitmap(this.$up);
        this.addChild(this.up);
        
        this.over = new createjs.Bitmap(this.$over);
        this.addChild(this.over);
       
        this.down = new createjs.Bitmap(this.$down);
        this.addChild(this.down);
        this.statusView(Button.UP);
        
        if(this.$text!=undefined)
        {
            this.stars_txt = new createjs.Text(this.$text,"bold 20px Alef Hebrew", "#FFFFFF");
            this.stars_txt.x = 108;
             this.stars_txt.bold = true;
            this.stars_txt.y = 5;
            this.stars_txt.textAlign = "right";
            this.addChild(this.stars_txt);
        }
        this.addEventListener("mousedown",this.mousedown);
        this.addEventListener("mouseover",this.mouseover);
        this.addEventListener("mouseout",this.mouseup);

    }
   
     Button.prototype.mouseup = function(event) 
    {
       event.currentTarget.statusView(Button.UP);
        
    }
     
     Button.prototype.mouseover = function(event) 
    {
       event.currentTarget.statusView(Button.OVER);
        
    }
     
    Button.prototype.mousedown = function(event) 
    {
       event.currentTarget.statusView(Button.DOWN);
        
    }
    
     Button.prototype.statusView = function(s) 
    {
       if(s == Button.UP)
       {
           this.up.visible = true;
           this.over.visible = false;
           this.down.visible = false;
       }else if(s == Button.OVER)
       {
            this.up.visible = false;
           this.over.visible = true;
           this.down.visible = false;
       }
         else if(s == Button.DOWN)
       {
            this.up.visible = false;
           this.over.visible = false;
           this.down.visible = true;
       }
        
    }
  
    
    Button.prototype.remove = function(event) 
    {
       this.removeEventListener("mousedown",this.mousedown);
        this.removeEventListener("mouseover",this.mouseover);
        this.removeEventListener("mouseout",this.mouseup);
        this.removeAllChildren();
    }
    

    

   
    js.control.Button = Button;
}(window));