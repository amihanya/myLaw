js.character = js.character || {};
(function(window) {

    function TopMenu() {
        var xml = GAME_XML.find("character");
        this.xml = xml.find("top-menu");
        this.initialize();
    }

    
    TopMenu.prototype = new createjs.Container();

    TopMenu.prototype.Container_initialize = TopMenu.prototype.initialize;
	
    
    
    TopMenu.prototype.makeBgSize = function(sp) 
    {
       // bg_arr.push(sp);   

    }
    
    TopMenu.prototype.initialize = function(event) 
    {
        this.Container_initialize();
        var my = this;
        // var size = this.xml.find("frame");

        this.leftCon = new createjs.Container();
        this.title = new createjs.Text("0","15px Alef Hebrew", "#000000");
        this.title.x = orginalWidth/4;
        this.title.y = 20;
        this.title.text = "גוון עור"; 
        this.title.textAlign = "center";
        this.addChild(this.title);
        /*-------------------------color skin---------------------------------*/

        this.skinColorMenu = new createjs.Container();
        colorSkinXml = this.xml.find("color-skin");
        this.arr_colorSkin =["black","brown","white"];
        var color;
        for(var i = 0 ; i < this.arr_colorSkin.length; i++){
            color = new js.character.SkinColor(this.arr_colorSkin[i]);
            color.x = i * 60;

            color.addEventListener("click",this.colorSelect); 
            color.addEventListener("mouseover",this.colormouseover);
            color.addEventListener("mouseout",this.colormouseout); 
            this.skinColorMenu.addChild(color);
        }
        scaleMy(this.skinColorMenu);
        this.skinColorMenu.x = orginalWidth/4;
        this.skinColorMenu.regX =90;
        this.skinColorMenu.y = 54 * MAIN_SCALE + 12;
        this.addChild(this.skinColorMenu);
        
        
        /*---------------------------------gender button------------------------*/
        var buttonStatus = this.xml.find("radio-button");
        var buttonReg = buttonStatus.find("reg").text();
        var buttonOn = buttonStatus.find("over").text();
        var buttonOver = buttonStatus.find("on").text();
        
        var radioBoy = new js.control.RadioButton(buttonReg,buttonOver,buttonOn);
        var radiogirl = new js.control.RadioButton(buttonReg,buttonOver,buttonOn);
        radiogirl.x =50;
        this.addChild(radioBoy);
        this.addChild(radiogirl);
    }
   
    TopMenu.prototype.colormouseover = function(event){
        var part = event.currentTarget;
        part.select(true);
    }
    TopMenu.prototype.colormouseout = function(event){
        var part = event.currentTarget;
        if(!part.selected){
        part.select(false);
        }
    }
    TopMenu.prototype.colorSelect = function(event){
        var part = event.currentTarget;
        var bro = part.parent.children;
        bro.forEach(function(ele){
            ele.select(false);
            ele.selected = false;
        });
        part.selectMe(true);
    }
    
   TopMenu.prototype.select = function(bol) 
    {
       
        this.frame_reg.visible = !bol;
        this.frame_over.visible = bol;
    }
  
    
    TopMenu.prototype.remove = function(event) 
    {
       
        this.removeAllChildren();
    }
    
    
   js.character.TopMenu = TopMenu;
}(window));