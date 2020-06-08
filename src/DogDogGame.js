class DogDogGame extends Phaser.Scene {
    constructor(){
      super("DogDogGame");
    }
  create(){
    this.init = false;
    
     this.scene  = this;
     console.log("THIS IS DOGDOGCROWCROWGAME");
    this.makeTitleScreen(this);
    // this.makeInfoScreen(this);

  
  }
  
  clickedHome(){
    // console.log("CLICKED HOME LEVEL MAING GAME");
    this.curLevel.destroyAll();
    this.menuMove(0);
  }
  movesitUp(){
    this.menuMove(0);
  }
  movetoHome(){
    this.levelmenu.setPos(0,0);
    this.levelmenu.depth = 1001;
    this.menuMove(0);
  }
  nextLevelIt(params){
    // LOAD THE NEXT AVAILABLE LEVEL...
    this.destroyCurrentLevel();
    this.gameActive=true;
    // this.menuMove(600);
    var nextNum = this.curLevel.levelID+1;
    this.dognews.destroy();
    this.levelmenu.setPos(0,-600);
    this.goLevel({level:nextNum});
    // console.log("NEXT LEVEL" + this.curLevel.levelID);
  }
  destroyCurrentLevel(){
  
    this.curLevel.destroyAll();
  
  }
  createMe(){
    if(this.debugGame){
    this.createLevel();
    this.init = true;
      gsap.delayedCall(1, this.makeTitleScreen,[this]);
    return
    }
  
              // this.cursorKeys = this.input.keyboard.createCursorKeys();
  }
  // this
  levelWin(params){
      // this.emitter.off('LEVELWIN',this.levelWin);
  
    // console.log(" WIN " + params.id + " : "+ this.curLevel.levelID);
    if(params.id == this.curLevel.levelID){
          this.bigWin();
    }
  
  }
  goLevel(parameters)
      {
  
  
      switch (parameters.level) {
        case 0:
        this.curLevel = new LevelA000(this);
          break;
        case 1:
        this.curLevel = new LevelA001(this);
          break;
        case 2:
        this.curLevel = new LevelA002(this);
          break;
          case 3:
          this.curLevel = new LevelA003(this);
            break;
  
        default:
    this.curLevel = new LevelA000(this);
    break
      }
        // console.log("GO LEVEL AWESOME !!!!!! " + parameters.level );
        if(this.levelmenu){
          this.levelmenu.setPos(0,-600);
        }
        this.init = true;
  
  
      }
  startGame(gam){
  
        // console.log("startGame:::: :" + gam.debugGame);
    if(!gam.debugGame){
  
      };
        gam.init = true;
  
  
    gam.titleScreen.depth = 1000;
  //  gsap.to(gam.titleScreen, {y:-10, duration:2});
  
  }
  startNewGame(){
  // console.log("START NEW GAME");
  this.gameActive=true;
  // gsap.to(this.titleScreen, {y:600, duration:2});
  this.levelmenu.setPos(0,-600);
  this.menuMove(600);
  this.goLevel({level:0});
  }
  continueGame(){
  this.levelmenu.setPos(0,0);
  // this.levelmenu.depth = 1001;
  this.menuMove(600);
  // console.log("CONTINUE GAME");
  }
  
  showInfo(){
    this.levelmenu.setPos(0,-600);
  // console.log("SHOW INFO");
  this.menuMove(-600);
    // gsap.to(this.titleScreen, {y:-600, duration:1});
  }
  menuMove(y){
    gsap.killTweensOf(this.titleScreen );
    gsap.to(this.titleScreen, {y:y, duration:1});
  }
  makeBoneButton(sc,labeltxt,xx,yy,emitit){
    var bone = this.add.container(xx,yy);
  var bone_btn = this.add.image(0,0,"bone01").setInteractive({ useHandCursor: true });
      bone_btn.on('pointerover', function(){ this.setScale(1); });
      bone_btn.on('pointerout', function(){ this.setScale(1);});
      bone_btn.on('pointerdown', () =>   this.emitter.emit(emitit));
  
      var labelStyle = { font: "24px courier", fill: "#000000",align: "center"};
      var label = this.add.text(0, -24, labeltxt, labelStyle);
      label.x -= label.width/2;
  
        bone.add([bone_btn,label]);
      return bone;
  }
  
  makeInfoScreen(sc){
      // console.log("infoscreen" );
      // console.log(sc);
    sc.infoScreen = sc.add.container(0,600)
  
  
    var rect = new Phaser.Geom.Rectangle(0, 0, 800, 600);
    var graphics = sc.add.graphics({ fillStyle: { color: 0xFFFFFF } });
    // //
     graphics.fillRectShape(rect);
    var logoimg = sc.add.image(400,500,"title").setInteractive({ useHandCursor: true });
       logoimg.on('pointerup', this.openExternalLink, this);
       logoimg.on('pointerover', function(){ this.setScale(.35); });
       logoimg.on('pointerout', function(){ this.setScale(.25);});
    var labelStyle = { font: "16px courier", fill: "#000000",whitespace:"pre-line", wordWrap: { width: 450, useAdvancedWrap: true },align: "left"};
    var info = "Dog Bark! a game by @MoHDI.\nThis is a game that's been living in my head for a while. You are a dog, you go around barking at stuff. This is a ruff version of the game. For a game about dogs, there sure are a lot of bugs in it. More exciting things to come soon. Please follow me on Instagram.\nBest,\nDrew\ndrew@mohdi.com";
    var label1 = sc.add.text(400, 160, info, labelStyle);
    label1.x -= label1.width/2;
  
    var logoimg2 = sc.add.image(400,320,"instagram").setInteractive({ useHandCursor: true });
       logoimg2.on('pointerup', this.openIGLink, this);
       logoimg2.on('pointerover', function(){ this.setScale(1.1); });
       logoimg2.on('pointerout', function(){ this.setScale(1);});
    logoimg.setScale(.25);
      sc.infoScreen.add([graphics,logoimg2,logoimg,label1]);
      var boner = this.makeBoneButton(this,"go bark",400,100,"MENUMOVETOUP");
  
      sc.infoScreen.add(boner);
  
      sc.titleScreen.add(sc.infoScreen);
  }
  openIGLink ()
  {
  
      var url = 'https://www.instagram.com/mohdi/';
  
      var s = window.open(url, '_blank');
  
      if (s && s.focus)
      {
          s.focus();
      }
      else if (!s)
      {
          window.location.href = url;
      }
  }
  openExternalLink ()
  {
  
      var url = 'https://www.newgrounds.com/collection/phaserjam2020';
  
      var s = window.open(url, '_blank');
  
      if (s && s.focus)
      {
          s.focus();
      }
      else if (!s)
      {
          window.location.href = url;
      }
  }
  makeTitleScreen(gam){
  
      // console.log("title");
      gam.titleScreen = gam.add.container(0,0);
      var rect = new Phaser.Geom.Rectangle(0, 0, 800, 600);
      var graphics = gam.add.graphics({ fillStyle: { color: 0x777777 } });
      // //
       graphics.fillRectShape(rect);
     
    //   var infoBall = gam.add.image(400,300,"landingScreenDog").setInteractive({ useHandCursor: true });
      var infoBall = gam.add.image(400,300,"landingScreenDog");
        this.makeLabel("Test this out");
  }
    makeLabel(labeltxt){
        var labelStyle = { font: "24px courier", fill: "#000000",align: "center"};
        var label = this.scene.add.text(400, 300, labeltxt, labelStyle);
        label.x -= label.width/2;
    }
    startNext(){
    }
    bigWin(){
  
          var valuea = Phaser.Math.Between(0, this.headlineCopy.length-1);
          this.dognews = this.add.container(400,1000);
          var rect = new Phaser.Geom.Rectangle(-400, -300, 800, 600);
          var graphics = this.add.graphics({ fillStyle: { color: 0xFFFFFF,alpha:50} });
          // //
          graphics.setInteractive();
           graphics.fillRectShape(rect);
           var newsid =this.curLevel.levelID;
           if(this.curLevel.levelID==-1){
             newsid =valuea;
           }
          var headline =  this.add.text(0, 0, this.headlineCopy[newsid], { fontFamily: '"Roboto Condensed"' });
          var dogpaper = this.add.image(0,0,"dog_news").setInteractive();
          headline.setColor("0x999999");
          headline.setFixedSize(250,115);
          headline.setWordWrapWidth(245);
          var boner = this.makeBoneButton(this,"Next Level",0,200,"NEXTLEVEL");
            this.dognews.add([graphics,dogpaper,headline,boner]);
  
  
  
          this.gameActive = false;
          this.init = false;
          gsap.to([this.titleScreen], {y:650, duration:2});
          gsap.to([this.dognews], {y:300, duration:2,ease: "bounce"});
  
        //   dogpaper.on('pointerdown', function (pointer) {
        //     //THIS WILL START NEXT LEVEL
        //   // console.log("RESET THIS THING" + this.dogWorld.getPos());
        //   this.curLevel.destroyAll();
        //   // this.curlevel.destroy();
        // dogpaper.removeInteractive();
        // dogpaper.destroy();
        // headline.destroy();
        //   }, this);
  
  
    }
    adjustStreetY(){
  
  
    }
    dogControls(){
      if(!this.init){
  
        return;
      }
        if(this.gameActive){
            // this.bigWin();
        }else if(this.gameActive){
  
        }
          //SPACE
          if(this.cursorKeys.space.isDown){
  
          }
          if(this.cursorKeys.space.isUp){
  
          }
          //UP
          if(this.cursorKeys.up.isDown){
  
          }else if(this.cursorKeys.up.isUp){
  
          }
  
          if(this.cursorKeys.down.isDown){
  
          }
          if(this.cursorKeys.down.isUp){
  
        }
  
        if(this.cursorKeys.left.isDown){
  
            if(this.dog.iswalking){
            // this.dogWorld.checkAction(this.dog.isFlipped());
            if(this.cursorKeys.up.isDown){
      //      this.spinWorlds(this.worldSpeed*1.5);
          }else{    //this.spinWorlds(this.worldSpeed);
            }
          }
          }else if(this.cursorKeys.left.isUp && !this.cursorKeys.right.isDown){
  
        }
        if(this.cursorKeys.right.isDown){
  
            if(this.dog.iswalking){
              if(this.cursorKeys.up.isDown){
  
          //    this.spinWorlds(-this.worldSpeed*1.5);
        }else{   // this.spinWorlds(-this.worldSpeed);
            }
          }
          }else if(this.cursorKeys.right.isUp && !this.cursorKeys.left.isDown){
          // this.dog.walk("rnull");
          }
          // if(this.cursorKeys.right.isDown && this.cursorKeys.left.isDown){
          //     this.dog.goLong(true);
          //   }
            // console.log("down :" + this.cursorKeys.up.isDown + " :::: and right::"+ this.cursorKeys.right.isDown);
  
    }
  
    spinWorlds(sp){
      this.dogWorldBG.spinWorld(sp*.8);
      this.dogWorld.spinWorld(sp);
      for(var i=0;i<this.frontWorlds.length;i++){
        var siz = sp*((i+1.1)/1);
        this.frontWorlds[i].spinWorld(siz);
      }
  
    }
      update() {
        if(this.curLevel && this.gameActive)this.curLevel.update();
  
        // this.dogControls();
    }
  }
  