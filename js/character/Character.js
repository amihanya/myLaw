js.character = js.character || {};
(function(window) {

    function Character() {
        this.xml = GAME_XML.find("character");
        this.initialize();

        
    }

    Character.prototype = new createjs.Container();

    Character.prototype.Container_initialize = Character.prototype.initialize;
	
    Character.prototype.makeBgSize = function(sp) 
    {
       // bg_arr.push(sp);
        

    }
    
    Character.prototype.initialize = function(event) 
    {
        this.Container_initialize();
        
        this.bg = new createjs.Bitmap(this.xml.find("bg").text());
        scaleMy(this.bg);
        this.addChild(this.bg);
        
        
        //-------------------header----------------
        this.headerBg = new createjs.Bitmap(this.xml.find("header_bg").text());
        scaleMy(this.headerBg);
        this.addChild(this.headerBg);
        
        this.headline = new createjs.Bitmap(this.xml.find("headline").text());
        scaleMy(this.headline);
        this.headline.x = orginalWidth/2;
        this.headline.regX = 154;
        this.addChild(this.headline);
        
        this.title = new createjs.Text("0","15px Alef Hebrew", "#FFFFFF");
        this.title.x = orginalWidth/2;;
        this.title.y = 8;
        this.title.text = "בניית הדמות"
        this.title.textAlign = "center";
        this.addChild(this.title);
        
        this.explanation = new createjs.Text("0","15px Alef Hebrew", "#FFFFFF");
        this.explanation.x = orginalWidth/2;;
        this.explanation.y = 38.5;
        this.explanation.text = "עצבו את הדמות שלכם";
        this.explanation.textAlign = "center";
        this.addChild(this.explanation);
        
        this.topMenu = new js.character.TopMenu();
        this.addChild(this.topMenu);
        
        this.queue = new createjs.LoadQueue();
        this.queue.loadFile({id: "spritesheet_json" ,src: "images/character/"+js.UserInfo.gender+"_spritesheet/0.json" } );
        this.queue.loadFile({id: "spritesheet_img" ,src: "images/character/"+js.UserInfo.gender+"_spritesheet/0.png" } );
        this.queue.on("complete", this.spritesheetLoad, this);
        
        
        
        

    }
  
    Character.prototype.spritesheetLoad = function()
    {
        var data = this.queue.getResult("spritesheet_json");
        data.images = ["images/character/"+js.UserInfo.gender+"_spritesheet/0.png"];
       this.spriteSheet = new createjs.SpriteSheet(data);
        
        this.startMakeMenus();
    
    }
    
     Character.prototype.startMakeMenus = function()
    {
         this.menu = new js.character.Menu(js.character.Menu.HAIR,4,10,85,js.character.Menu.NARROW,this.spriteSheet);
        this.addChild(this.menu);
        
        this.menu = new js.character.Menu(js.character.Menu.MOUSTACHE,4,10,185,js.character.Menu.NARROW,this.spriteSheet);
        this.addChild(this.menu);
        
        this.menu = new js.character.Menu(js.character.Menu.BODY,3,10,285,js.character.Menu.WIDE,this.spriteSheet);
        this.addChild(this.menu);
        
        this.menu = new js.character.Menu(js.character.Menu.LEGS,3,10,400,js.character.Menu.WIDE,this.spriteSheet);
         this.addChild(this.menu);
        
        this.menu = new js.character.Menu(js.character.Menu.GLASSESS,3,370,85,js.character.Menu.SMALL,this.spriteSheet);
        this.addChild(this.menu);
        
        this.menu = new js.character.Menu(js.character.Menu.HAND,3,370,185,js.character.Menu.SMALL,this.spriteSheet);
        this.addChild(this.menu);
     }
     
    Character.prototype.remove = function(event) 
    {
       
        this.removeAllChildren();
    }
    

    

   
   js.character.Character = Character;
}(window));