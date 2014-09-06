js.law.run.ui = js.law.run.ui || {};
(function(window) {

    function Bar() {
        this.initialize();
    }

    Bar.prototype = new createjs.Container();

    Bar.prototype.Container_initialize = Bar.prototype.initialize;
	
   
    
    Bar.prototype.initialize = function(event) 
    {
        this.Container_initialize();
    
        this.bg = new createjs.Bitmap("images/ranway1/ui/barClear.png");
        this.addChild(this.bg);
        
        this.full = new createjs.Bitmap("images/ranway1/ui/barFull.png");
        this.addChild(this.full);
        
        
        //scaleMy(this.bg); 
        //scaleMy(this.full); 

    }
    
  
    
    Bar.prototype.remove = function(event) 
    {
       
        this.removeAllChildren();
    }
    

    

   
   js.law.run.ui.Bar = Bar;
}(window));