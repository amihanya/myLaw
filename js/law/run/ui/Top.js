js.law.run.ui = js.law.run.ui || {};
(function(window) {

    function Top(view) {
        
        if(view == undefined)
        {
            this.screenView = js.law.run.ui.Top.FULL;
        }else{
            this.screenView = view;
        }
        this.initialize();
    }

    Top.prototype = new createjs.Container();

    Top.prototype.Container_initialize = Top.prototype.initialize;
	
    Top.FULL = "--full";
    Top.MEDIUM = "--medium";
    Top.SMALL = "--small";
    
    Top.prototype.initialize = function(event) 
    {
        this.Container_initialize();
        
        this.nowXml = GAME_XML.find("ui").find("top");
        //cl(this.screenView = Top.MEDIUM);
        this.widthForRegX = 0; 
        if(this.screenView == Top.FULL)
        {
            this.bgImage = this.nowXml.find("fullView").text();
            this.bgImageX = 227;
            this.widthForRegX = 685;
        }else if(this.screenView == Top.MEDIUM)
        {
           this.bgImage = this.nowXml.find("mediumView").text();
           this.bgImageX = 348;
           this.widthForRegX = 561;
        }else if(this.screenView ==  Top.SMALL)
        {
           this.bgImage = this.nowXml.find("smallView").text();
            this.bgImageX = 718;
            this.widthForRegX = 190;
        }
        this.regX = this.widthForRegX;
        this.regY = 0;
        
        this.bg = new createjs.Bitmap(this.bgImage);
        this.bg.x = 0;;
        this.addChild(this.bg);
        
        this.userNameBg = new createjs.Bitmap(this.nowXml.find("userNameBg").text());
        this.userNameBg.x = 735-this.bgImageX;
        this.userNameBg.y = 7;
        this.addChild(this.userNameBg);
        
        this.userName_txt = new createjs.Text("0","bold 20px Alef Hebrew", "#FFFFFF");
        this.userName_txt.x = 800-this.bgImageX;
        this.userName_txt.y = 14;
        this.userName_txt.text = "עופר ברויידא";
        this.userName_txt.textAlign = "center";
        this.addChild(this.userName_txt);
        
        
        this.info_txt = new createjs.Text("99","bold 30px Alef Hebrew", "#FFFFFF");
        this.info_txt.x = 635-this.bgImageX;
        this.info_txt.y = 5;
        this.info_txt.visible = this.screenView == Top.MEDIUM || this.screenView == Top.FULL;
        this.info_txt.textAlign = "left";
        this.addChild(this.info_txt);
        
        this.like_txt = new createjs.Text("99","bold 30px Alef Hebrew", "#FFFFFF");
        this.like_txt.x = 517-this.bgImageX;
        this.like_txt.y = 5;
        this.like_txt.visible = this.screenView == Top.MEDIUM || this.screenView == Top.FULL;
        this.like_txt.textAlign = "left";
        this.addChild(this.like_txt);
        
        
        
        
        this.diamond_txt = new createjs.Text("0/3","25px Alef Hebrew", "#CCCCCC");
        this.diamond_txt.x = 540-this.bgImageX;
        this.diamond_txt.y = 2;
        this.diamond_txt.textAlign = "left";
        this.diamond_txt.visible = this.screenView == Top.SMALL || this.screenView == Top.MEDIUM;
        this.addChild(this.diamond_txt);/**/
        
        this.heart = new heart_mc
        this.addChild(this.heart);
        this.heart.x = 247-this.bgImageX;
        this.heart.y = 19;
        this.heart.visible = this.screenView == Top.MEDIUM || this.screenView == Top.FULL;
        this.heart.stop();
        this.heart.gotoAndStop(2);
        
        
        /*this.diamond_small = new createjs.Bitmap(this.nowXml.find("diamond_small").text());
        this.diamond_small.x = 575;
        this.diamond_small.y = 5;
        this.diamond_small.visible = this.screenView == Top.MEDIUM || this.screenView == Top.FULL;
        this.addChild(this.diamond_small);*/
        
        
        this.diamond_small_megaphone = new createjs.Bitmap(this.nowXml.find("diamond_small_megaphone").text());
        this.diamond_small_megaphone.x = 438-this.bgImageX;
        this.diamond_small_megaphone.y = 7;
        this.diamond_small_megaphone.visible = this.screenView == Top.MEDIUM || this.screenView == Top.FULL;
        this.addChild(this.diamond_small_megaphone);
        
        this.diamond_small_research = new createjs.Bitmap(this.nowXml.find("diamond_small_research").text());
        this.diamond_small_research.x = 375-this.bgImageX;
        this.diamond_small_research.y = 7;
        this.diamond_small_research.visible = this.screenView == Top.MEDIUM || this.screenView == Top.FULL;
        this.addChild(this.diamond_small_research);
        
       
       
        this.scaleX = this.scaleY = 0.6;
       
    }
    
  
    
    Top.prototype.remove = function(event) 
    {
       
        this.removeAllChildren();
    }
    

    

   
   js.law.run.ui.Top = Top;
}(window));