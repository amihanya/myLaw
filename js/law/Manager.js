this.js.law = this.js.law || {};
(function(window) {

    function Manager() {
        this.initialize();
    }

    Manager.prototype = new createjs.Container();

    Manager.prototype.Container_initialize = Manager.prototype.initialize;
	
    Manager.prototype.initialize = function(event) 
    {
        this.Container_initialize();
        document.body.style.backgroundColor = "#fefffc";
        
        //load config xml
        js.Data.getXml(gameXmlLink);
        $(document).on("newXml", this.gameXmlReady);
        
    }
    
    Manager.prototype.gameXmlReady = function(event) 
    {
        GAME_XML = $(event.xml);
        //start the view;
        manager.loadCharacter();
       // manager.loadMap();
        //manager.loadGame();
        
        
    }
    
     Manager.prototype.loadCharacter = function() 
    {
        this.character = new js.character.Character();
        this.character.par = this;
        this.character.addEventListener("finish",this.gameFinishEvent);
        this.addChild(this.character);
        
        /*this.ui = new js.law.run.ui.Ui
        this.addChild(this.ui);
        this.map.ui = this.ui;*/
    }
     
    Manager.prototype.loadMap = function() 
    {
        this.map = new js.law.run.map.Map();
        this.map.par = this;
        this.map.addEventListener("finish",this.gameFinishEvent);
        this.addChild(this.map);
        
        this.ui = new js.law.run.ui.Ui
        this.addChild(this.ui);
        this.map.ui = this.ui;
    }
     
    Manager.prototype.loadGame = function() 
    {
        
        this.game = new js.law.run.RunGame();
        this.game.par = this;
        this.game.addEventListener("finish",this.gameFinishEvent);
        this.addChild(this.game);
        
        this.ui = new js.law.run.ui.Ui
        this.addChild(this.ui);
        this.game.ui = this.ui;
        
      
    }
    
  
    Manager.prototype.gameFinishEvent = function(event) 
    {
        event.target.removeEventListener("finish",event.target.par.candleFinish);
        event.currentTarget.par.gameFinish();
    }
    
    Manager.prototype.gameFinish = function() 
    {
        
        
        this.game.remove();
        this.removeChild(this.game);
        this.game = null;
        
        
    }
    
   
   
   js.law.Manager = Manager;
}(window));