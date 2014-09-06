js.menu = js.menu || {};
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

    Menu.prototype.Container_initialize = Menu.prototype.initialize;
	
    Menu.HAIR   = "hair";
    Menu.BODY   = "body";
    Menu.LEG    = "leg";
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
            shapeWidth = 430;//* MAIN_SCALE;
            
        }else
        {
           shapeWidth = 573 ;//* MAIN_SCALE;
        }
        this.shapeHeight = shapeHeight;
        this.shapeWidth = shapeWidth;
        
        this.addChild(this.bg);
        
        
         var shape = this.shape = new createjs.Shape();
        shape.x = 56  ;//* MAIN_SCALE;
        shape.y = 17  ;//* MAIN_SCALE;
        shape.graphics.beginFill(0).drawRect(0, 0, shapeWidth ,shapeHeight /* MAIN_SCALE*/);
        this.addChild(shape);
        
      
        
        this.imageCon =  new createjs.Container();
        this.imageCon.mask = shape;
        this.addChild(this.imageCon);
        
        for(var i=0;i<=js.UserInfo[String(this.name+"_"+js.UserInfo.gender+"_MAX").toUpperCase()];i++){
          
          var key = "Build character "+ js.UserInfo.gender + "/"+js.UserInfo.gender+"_" + this.name + (i+1);
          var part = new js.character.Part(this.spriteSheet,key,this.type);
        if(this.type == Menu.WIDE){ 
            part.x = i* 200+shape.x;
         }else{ 
            part.x = i * 150 + shape.x;
         }   
            part.addEventListener("click",this.partSelect); 
            part.addEventListener("mouseover",this.partmouseover);
             part.addEventListener("mouseout",this.partmouseout); 
            
            
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
        
        
        this.conArrowRight = new createjs.Container();
        this.conArrowRight.y = this.bg.height/2 + 20;
        this.conArrowRight.regY = 42;
        this.conArrowRight.x = shape.x+shapeWidth+10;
        
        
        this.arrowRight = new createjs.Bitmap(this.xml.find("arrow-right").text());
        this.conArrowRight.addChild(this.arrowRight);
        this.conArrowRight.addChild(button);
        this.addChild(this.conArrowRight);
        
        
       var  button1 = new createjs.Shape();
        button1.graphics.beginFill("#ff0000").drawRect(0, 0, 40 ,72);
        this.conArrowLeft = new createjs.Container();
                
        this.arrowLeft = new createjs.Bitmap(this.xml.find("arrow-left").text());
        this.conArrowLeft.y = this.bg.height/2 + 20;
        this.conArrowLeft.regY = 42 ;
        this.conArrowLeft.x = 5;
        this.conArrowLeft.addChild(this.arrowLeft);
        this.conArrowLeft.addChild(button1);
        this.addChild(this.conArrowLeft);

        this.conArrowLeft.addEventListener("click",this.arrowRightClick );
        this.conArrowRight.addEventListener("click",this.arrowRightClick );
        this.conArrowLeft.cursor = "pointer";
        this.conArrowRight.cursor = "pointer";
    }
    
    Menu.prototype.arrowRightClick = function(event){
        
        cl(event);
        
    }
  
    
    Menu.prototype.remove = function(event) 
    {
       
        this.removeAllChildren();
    }
    
    
   js.character.Menu = Menu;
}(window));