js.law.run.ui = js.law.run.ui || {};
(function(window) {

    function Ui(topView,showDown) {
        
        if(topView == undefined)
        {
            this.topView = js.law.run.ui.Top.FULL;
        }else{
            this.topView = topView;
        }
        
         if(showDown == undefined)
        {
            this.showDown = true;
        }else{
            this.showDown = showDown;
        }
        
        
        this.initialize();
    }

    Ui.prototype = new createjs.Container();

    Ui.prototype.Container_initialize = Ui.prototype.initialize;
	
   
    
    Ui.prototype.initialize = function(event) 
    {
        this.Container_initialize();
    

        this.down = new js.law.run.ui.Down
        this.down.x = orginalWidth;
        this.down.y = orginalHeight;
        
        this.down.visible =  this.showDown;
        this.addChild(this.down);
        
        _layouter.addLayoutObject(this.down, "BR", NaN, NaN, false,createjs.SizeFollowRule.WIDTH_FOLLOW);
        _layouter.updateLayout();
        
       // this.down.scaleX = this.down.scaleY = 1.5;
        
        this.top = new js.law.run.ui.Top(this.topView);
        this.addChild(this.top);
        
        _layouter.addLayoutObject(this.top, "TR", "1", "0", false,createjs.SizeFollowRule.WIDTH_FOLLOW);
        _layouter.updateLayout();
        
         this.logo = new createjs.Bitmap(this.top.nowXml.find("logo").text());
        
        
        
        this.logo.x = 20;
        this.logo.y = 10;
        this.addChild(this.logo);
        scaleMy(this.logo);
        
        _layouter.addLayoutObject(this.logo, "TL", NaN, NaN, true,createjs.SizeFollowRule.AUTO);
        _layouter.updateLayout();
        //this.logo.scaleX = this.logo.scaleY = 0.6;
        /*this.children.forEach(function(element){
            element.scaleX =element.scaleY = 1;
        });*/
        console.log(this.children);

    }
    
  
    
    Ui.prototype.remove = function(event) 
    {
       
        this.removeAllChildren();
    }
    

    

   
   js.law.run.ui.Ui = Ui;
}(window));