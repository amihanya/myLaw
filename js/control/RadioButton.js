this.js.control = this.js.control || {};
(function(window) {

    function RadioButton(reg,over,on) {
        
        this.$reg = reg;
        this.$over = over;
        this.$on = on;
        

        this.initialize();
    }

        RadioButton.REG = "--up";
        RadioButton.ON = "--down";
        RadioButton.OVER = "--over";
    RadioButton.prototype = new createjs.Container();

    RadioButton.prototype.Container_initialize = RadioButton.prototype.initialize;
	
    
    
    RadioButton.prototype.makeBgSize = function(sp) 
    {
       // bg_arr.push(sp);   

    }
    
    RadioButton.prototype.initialize = function(event) 
    {
        this.Container_initialize();
        this.cursor = "pointer";
     
        this.up = new createjs.Bitmap(this.$reg);
        this.addChild(this.up);
        
        this.over = new createjs.Bitmap(this.$over);
       this.addChild(this.over);
        this.over.visible = false;
        cl(this.$down);
        
        this.down = new createjs.Bitmap(this.$on);
        this.addChild(this.down);
        this.down.visible = false;
        
        
        /*this.statusView(RadioButton.UP);
        
        this.select(false);
        
        if(js.UserInfo.gender == this.color){
            this.select(true);
        }
        */
        
        //this.selected = false;
       
        
        
      }

    
    RadioButton.prototype.selectMe = function(bol){
        this.selected = bol;
        this.frame_over.visible = true;
        js.UserInfo.color = this.color;
    }
    
    
   RadioButton.prototype.select = function(bol) 
    {
        this.frame_reg.visible = !bol;
        this.frame_over.visible = bol;
    }
  
    
    RadioButton.prototype.remove = function(event) 
    {
       
        this.removeAllChildren();
    }
    
    
    js.control.RadioButton = RadioButton;
}(window));