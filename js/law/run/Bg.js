this.js.law.run = this.js.law.run || {};
(function(window) {

    function Bg($bgXml) {
        this.xml = $bgXml;
        this.initialize();
        
    }

    Bg.prototype = new createjs.Container();

    Bg.prototype.Container_initialize = Bg.prototype.initialize;
	
    Bg.prototype.speed = 10;
    Bg.prototype.makeObjectTimeing = 20;
    
   
    
    Bg.prototype.initialize = function(event) 
    {
        this.Container_initialize();
        
        this.maskCon = new createjs.Shape();
        this.maskCon.graphics.beginFill("#ffFF00").drawRect(0,0,orginalWidth,orginalHeight);
        this.addChild(this.maskCon);
       
        this.bgFolder = this.xml.attr("folder");
        
        this.length = this.xml.find("image").length;
        this.num = 0;
        this.objectTemp = 0;
        this.obj_arr = new Array
        
        this.image_arr = new Array;
        for(var i = 0;i<this.length;i++)
        {
            var image1 = $(this.xml.find("image")[i]).text();
            this.bgImage = new createjs.Bitmap(this.bgFolder+image1);
            this.bgImage.x = -3641*i+orginalWidth-3641;
           // this.bgImage.visible = false;
            this.addChild(this.bgImage);
            this.image_arr.push({image:this.bgImage,x:this.bgImage.x,xabs:Math.abs(this.bgImage.x)-3641,xabsOw:Math.abs(this.bgImage.x-orginalWidth)});
        }
        
        
        
        // this.aniComplete();
        
        createjs.Ticker.on("tick", this.handleTick, this);
    }
    
    Bg.prototype.handleTick = function(evt) 
    {
        
        this.x += this.speed; 
        
        this.objectTemp++;
        if(this.objectTemp>this.makeObjectTimeing)
        {
            if(Math.random()>.2)
            {
                this.objectTemp = 0;
                this.makeRandomObject();
            }
        }
        for(var i = 0;i<this.image_arr.length;i++)
        {
             if(this.image_arr[i].xabsOw>this.x && this.image_arr[i].xabs<this.x)
            {
                this.image_arr[i].image.visible = true;
            }else{
              // this.image_arr[i].image.visible = false; 
            }
        }
        for(i = 0;i<this.obj_arr.length;i++)
        {
            if(this.obj_arr[i]!=null)
            {
                if(this.obj_arr[i].state == 0)
                {
                    this.obj_arr[i].x+=this.speed;
                    this.parent.checkHit(this.obj_arr[i]);
                    if(this.obj_arr[i].x>orginalWidth)
                    {

                        this.parent.removeChild(this.obj_arr[i]);
                        this.obj_arr[i] = null;
                    }
                }else if(this.obj_arr[i].state == 1){
                    this.obj_arr[i].state = 2;
                    createjs.Tween.get(this.obj_arr[i]).to({alpha:0,y:this.obj_arr[i].y-150},200).call(this.objAnimaionComplete, [i], this);
                }
                    
            }
        }
         
    }
    
    Bg.prototype.objAnimaionComplete = function(i) 
    {
        this.parent.removeChild(this.obj_arr[i]);
        this.obj_arr[i] = null;
             
    }
   
    
    Bg.prototype.makeRandomObject = function(event) 
    {
         var rand = Math.floor(Math.random()*8);
         
        var obj
        if(rand==1)
        {
            obj = new BigLike_mc  
        }else if(rand==2){
            obj = new Fix_mc 
        }
        else if(rand==3){
            obj = new info_mc 
        }
        else if(rand==4){
            obj = new like_mc 
        }
        else if(rand==5){
            obj = new megaphone_mc  
        }
        else if(rand==6){
            obj = new mic_mc  
        }
        else if(rand==7){
            obj = new research_mc  
        }
        else if(rand==8){
            obj = new shild_mc 
        }
            
        if(obj!=undefined)
        {
            if(Math.random()>.5)
            {
                obj.top = false;
                obj.y = 310;
            }else{ 
                obj.top = true;
                obj.y = 150;
            }
            obj.state = 0;
            obj.x = 0;
            this.obj_arr.push(obj);
            this.parent.addChild(obj);
        }
      
     }
     
    Bg.prototype.remove = function(event) 
    {
       
        this.removeAllChildren();
    }
    

    

   
   js.law.run.Bg = Bg;
}(window));