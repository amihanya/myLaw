this.js.law.run.people = this.js.law.run.people || {};
(function(window) {

    function People($xml) {
        
        this.xml = $xml;
       // console.log("---",this.xml.text());
            this.x = -40;
        this.initialize();
       
        
    }

    People.prototype = new createjs.Container();

    People.prototype.Container_initialize = People.prototype.initialize;
	

    
    
    People.prototype.initialize = function(event) 
    {
        var spriteSheet;
        var player;
        
        var gender  = js.UserInfo.gender;
        var color   = js.UserInfo.color;
         
         var my = this;
        
        this.ani_arr = new Array();
        this.spriteWidth = 401;
        this.spriteHeight = 341;
        if(gender == js.UserInfo.GIRL)
        {
            this.spriteWidth = 400;
            this.spriteHeight = 340;
        }
       var bodyParts =[ 
           leg = {
               images: ["images/ranway1/people/" + gender + "/legs_"+ js.UserInfo.leg+".png"],
               frames: {width:  this.spriteWidth, height: this.spriteHeight, regX: 0, regY: 0},
               name:"leg",
               animations: {    
                run: [0, 11, true , 0.6]
                }
            },
            hand = {
               images: ["images/ranway1/people/" + gender + "/hand_" + color +"_" + js.UserInfo.hand +".png"],
               frames: {width: this.spriteWidth, height: this.spriteHeight, regX: 0, regY: 0},
               animations: {    
                run: [0, 11, true , 0.6]
                }
            },
           body = {
               images: ["images/ranway1/people/" + gender + "/body_"+ color+"_"+ js.UserInfo.body+".png"],
               frames: {width: this.spriteWidth, height: this.spriteHeight, regX: 0, regY: 0},
               animations: {    
                   run: [0, 11, true , 0.6]
               }
           },
       
            head = {
               images: ["images/ranway1/people/" + gender + "/head_" + color +".png"],
               frames: {width: this.spriteWidth, height: this.spriteHeight, regX: 0, regY: 0},
               animations: {    
                run: [0, 11, true , 0.6]
                }
            },
            hair = {
               images: ["images/ranway1/people/" + gender + "/hair_" +  js.UserInfo.hair +".png"],
               frames: {width: this.spriteWidth, height: this.spriteHeight, regX: 0, regY: 0},
               animations: {    
                run: [0, 11, true , 0.6]
                }
            },  
        ];
        if(js.UserInfo.moustache){
           moustache = {
               images: ["images/ranway1/people/" + gender + "/moustache_" +  js.UserInfo.moustache +".png"],
               frames: {width: this.spriteWidth, height: this.spriteHeight, regX: 0, regY: 0},
               animations: {    
                run: [0, 11, true , 0.6]
                }
            }
            bodyParts.push(moustache);    
        }
        if(js.UserInfo.glasses){
           glasses = {
               images: ["images/ranway1/people/" + gender + "/glasses_" +  js.UserInfo.glasses +".png"],
               frames: {width: this.spriteWidth, height: this.spriteHeight, regX: 0, regY: 0},
               animations: {    
                run: [0, 11, true , 0.6]
                }
            }
            bodyParts.push(glasses);
            
        }
        if(js.UserInfo.flower){
           glasses = {
               images: ["images/ranway1/people/" + gender + "/flower_" +  js.UserInfo.flower +".png"],
               frames: {width: this.spriteWidth, height: this.spriteHeight, regX: 0, regY: 0},
               animations: {    
                run: [0, 11, true , 0.6]
                }
            }
            bodyParts.push(glasses);
            
        };
        if(js.UserInfo.necklace){
           glasses = {
               images: ["images/ranway1/people/" + gender + "/necklace_" +  js.UserInfo.necklace +".png"],
               frames: {width: this.spriteWidth, height: this.spriteHeight, regX: 0, regY: 0},
               animations: {    
                run: [0, 11, true , 0.6]
                }
            }
            bodyParts.push(glasses);
            
        }
        
       
       bodyParts.forEach(function(part,index){
            
           spriteSheet = new createjs.SpriteSheet(part);
           player = new createjs.Sprite(spriteSheet,"run");
           player.name = part.name;
           my.ani_arr.push(player);
            my.addChild(player);
           
       });

         console.log(my.getChildByName("leg"));
        this.scaleX = this.scaleY =0.7; //MAIN_SCALE
       /*  for(var i = 0; i < this.bodyParts.length; i++){
            var part = this.queue.getResult(this.bodyParts[i].part,false);
           part.images[0] = "images/ranway1/people/"+part.images;
           part.animations["run"] = [0,3,true,0.3];
           spriteSheet = new createjs.SpriteSheet(part);
           playerPart = new createjs.Sprite(spriteSheet,"run");
           playerPart.y = this.bodyParts[i].y;
           
           playerPart.x = this.bodyParts[i].x;
           this.addChild(playerPart);
       };*/
       
        //var body = this.queue.getResult("body",false);   
        
        //body.animations["run"] = [0,10,true,1];
        //body.images[0] = "images/ranway1/people/"+body.images;

        /*this.bodyParts = [/*{part:"head" , x:-10, y:8},*//*{part:"hands" , x:-40 ,y:90} ,{part:"leg",x:-10,y:140},         
                          {part:"moustache",x:0,y:0}];
        this.Container_initialize();
        var imgName = this.xml.find("body").text();
        this.queue = new createjs.LoadQueue();
        
        this.queue.loadFile({id: "body" ,src: "images/ranway1/people/"+ imgName +".json" } );
        this.queue.loadFile({id: "head" ,src: "images/ranway1/people/0head.json" } );
        for(var i = 0; i < this.bodyParts.length; i++){
            this.queue.loadFile({id: this.bodyParts[i].part ,src: "images/ranway1/people/0"+this.bodyParts[i].part+".json" });
        };
        
        this.queue.on("complete", this.handleFileLoad, this);/**/
        
    }
    
    People.prototype.pause = function(event) 
    {
        for(var i=0;i<this.ani_arr.length;i++)
        {
            this.ani_arr[i].stop();
        }
        this.getChildByName("leg").gotoAndStop(5);
    }
    
    People.prototype.resume = function(event) 
    {
        for(var i=0;i<this.ani_arr.length;i++)
        {
            this.ani_arr[i].play();
        }
    }
    People.prototype.remove = function(event) 
    {

    }
    

    

   
    this.js.law.run.people.People = People;
}(window));