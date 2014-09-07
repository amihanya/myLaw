js.character = js.character || {};
(function(window) {

    function Menu(name,number,x,y,type,spriteSheet) {
        this.xml = GAME_XML.find("character");
        this.name = name;
        this.number = number;
        this.x = x;
        this.y = y;
        this.type = type;
        this.spriteSheet = spriteSheet;
        
        
        this.initialize();

        
    }

    Menu.prototype = new createjs.Container();
    Menu.prototype.speed = 10;

    Menu.prototype.Container_initialize = Menu.prototype.initialize;
	
    Menu.HAIR   = "hair";
    Menu.BODY   = "body";
    Menu.LEGS   = "legs";
    Menu.HAND   = "hand";
    Menu.MOUSTACHE = "moustache";
    Menu.GLASSESS = "glasses";
    
    Menu.NARROW = "narrow";
    Menu.WIDE   = "wide";
    Menu.SMALL  = "small";
    
    Menu.prototype.makeBgSize = function(sp) 
    {
       // bg_arr.push(sp);
        
       
       

    }
    
    Menu.prototype.initialize = function(event) 
    {
        this.Container_initialize();
        this.menu = this.xml.find("menu");
        
        this.bg = new createjs.Bitmap(this.xml.find(this.type).text());
        this.bg.height = 175 ;
       // this.bg.widht = 175 ;
        var shapeWidth;
        var shapeHeight = 140;
        if(Menu.WIDE == this.type){
            shapeHeight = 190;
            this.bg.height = 223 ;
        }
        if(Menu.SMALL == this.type)
        {
            this.shapeWidth = shapeWidth = 430;//* MAIN_SCALE;
            
        }else
        {
           this.shapeWidth = shapeWidth = 573 ;//* MAIN_SCALE;
        }
        this.shapeHeight = shapeHeight;
        this.shapeWidth = shapeWidth;
        
        this.addChild(this.bg);
        
        
         var shape = this.shape = new createjs.Shape();
        shape.x = 56  ;//* MAIN_SCALE;
        shape.y = 17  ;//* MAIN_SCALE;
        
        shape.graphics.beginFill("#000000").drawRect(0, 0, shapeWidth ,shapeHeight /* MAIN_SCALE*/);
       // this.addChild(shape);
      
        
        this.imageCon =  new createjs.Container();
        this.imageCon.mask = shape;
        this.addChild(this.imageCon);
        this.imageCon.x =0;
        this.part_arr =new Array
        this.partWidth = 150;
        if(this.type == Menu.WIDE) this.partWidth = 200;
       
        this.maxOfPart = js.UserInfo[String(this.name+"_"+js.UserInfo.gender+"_MAX").toUpperCase()];
       
        for(var i=0;i < this.maxOfPart;i++){
          
          var key = "Build character "+ js.UserInfo.gender + "/"+js.UserInfo.gender+"_" + this.name + (i+1);
           
          var part = new js.character.Part(this.spriteSheet,key,this.type); 
            part.x = i * this.partWidth + shape.x+10;
            part.addEventListener("click",this.partSelect); 
            part.addEventListener("mouseover",this.partmouseover);
            part.addEventListener("mouseout",this.partmouseout); 
           
            this.part_arr.push(part);
          this.imageCon.addChild(part);
        }
        
    
       
        this.imageCon.y= 30;
        //scaleMy(this.imageCon);
        
        this.makeArrows();
        
        scaleMy(this);
        
    }
    Menu.prototype.partmouseover = function(event){
        var part = event.currentTarget;
        part.select(true);
    }
    Menu.prototype.partmouseout = function(event){
        var part = event.currentTarget;
        if(!part.selected){
        part.select(false);
        }
    }
    Menu.prototype.partSelect = function(event){
        var part = event.currentTarget;
        var bro = part.parent.children;
        bro.forEach(function(ele){
            ele.select(false);
            ele.selected = false;
        });
        part.selectMe(true);
    }
    
    
    
    
    
    
    
    
    
    
    Menu.prototype.makeArrows = function()
    {
        var shape = this.shape;
        var shapeHeight = this.shapeHeight
        var shapeWidth = this.shapeWidth
        var button = new createjs.Shape();
        button.graphics.beginFill("#ff0000").drawRect(0, 0, 40 ,72);
        button.alpha = 0.01;
        
        this.conArrowRight = new createjs.Container();
        this.conArrowRight.name = "right"; 
        this.conArrowRight.y = this.bg.height/2 + 20;
        this.conArrowRight.regY = 42;
        this.conArrowRight.x = shape.x+shapeWidth+10;
        
        
        this.arrowRight = new createjs.Bitmap(this.xml.find("arrow-right").text());
        this.conArrowRight.addChild(this.arrowRight);
        this.conArrowRight.addChild(button);
        this.addChild(this.conArrowRight);
        
        
       var  button1 = new createjs.Shape();
        button1.graphics.beginFill("#ff0000").drawRect(0, 0, 40 ,72);
        button1.alpha = 0.01;
        
        this.conArrowLeft = new createjs.Container();
        this.conArrowLeft.name = "left";
                
        this.arrowLeft = new createjs.Bitmap(this.xml.find("arrow-left").text());
        this.conArrowLeft.y = this.bg.height/2 + 20;
        this.conArrowLeft.regY = 42 ;
        this.conArrowLeft.x = 5;
        this.conArrowLeft.addChild(this.arrowLeft);
        this.conArrowLeft.addChild(button1);
        this.addChild(this.conArrowLeft);

        this.conArrowLeft.addEventListener("mouseover",this.arrowLeftOver );
        this.conArrowLeft.addEventListener("mouseout",this.arrowOut );
        this.conArrowRight.addEventListener("mouseover",this.arrowRightOver );
        this.conArrowRight.addEventListener("mouseout",this.arrowOut );
        this.conArrowLeft.cursor = "pointer";
        this.conArrowRight.cursor = "pointer";
        
    
    }
    
    Menu.prototype.arrowOut = function(event){
        parent = event.currentTarget.parent;
        parent.stopMove();
    }
    Menu.prototype.stopMove = function(){
        this.removeEventListener("tick",this.tickA);
    }
    Menu.prototype.arrowRightOver = function(event){
        parent = event.currentTarget.parent;
        parent.k = 1;
        parent.moveCon();
    }
    
      Menu.prototype.arrowLeftOver = function(event){
          parent = event.currentTarget.parent;
          parent.k = -1;
          parent.moveCon();
    }
    
   Menu.prototype.moveCon = function() 
   {
         this.addEventListener("tick", this.tickA);
   }
  
   Menu.prototype.tickA = function(event) 
    {
       var my = event.currentTarget;
       my.makeXMove();
   }
    Menu.prototype.makeXMove = function(event) 
    {
        this.imageCon.x += this.k*this.speed;
        //var stop = this.imageCon.children.length;
        
        for(var b=0;b < this.part_arr.length; b++)
        {
            var x = 66;
            
            var part = this.part_arr[b];
            // && part.x <= this.imageCon.x + this.shapeWidth
            if(part.x <= Math.abs(this.imageCon.x+50) || part.x >= Math.abs(this.imageCon.x-50) + this.shapeWidth){
                part.visible = false;
            }
            else{
                part.visible = true;
            }
       
            
        
        }
        if(this.imageCon.x>=0)
        {
            this.imageCon.x = 0;
            this.stopMove();
        }
        else if(this.imageCon.x < -this.maxOfPart * this.partWidth + this.shapeWidth ){
            this.imageCon.x = -this.maxOfPart * this.partWidth + this.shapeWidth  ;
            this.stopMove();
        }
    }
    
    Menu.prototype.remove = function(event) 
    {
       
        this.removeAllChildren();
    }
    
    
   js.character.Menu = Menu;
}(window));