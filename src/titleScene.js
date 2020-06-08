class TitleScene extends Phaser.Scene {


    preload(){
      this.titleScreen;
      this.main= this;
      this.init = false;
     
      this.mobile = true;
 
  
   
    // this.load.spritesheet("big_duck", 'images/characters/duck/big_duck.png', { frameWidth: 169, frameHeight: 175});
    // this.load.image("ui_level_bg", "images/ui/level_bg.png");
    // this.load.spritesheet("ui_level_number", 'images/ui/level_numbers.png', { frameWidth: 37, frameHeight: 48});
  
    this.load.image("titleDog", "/img/dogdogimg.gif");
    
  
  
        var progressBox = this.add.graphics();
      var progressBar = this.add.graphics();
  
      progressBox.fillStyle(0x999999, 0.2);
      progressBox.fillRect(240, 555, 320, 50);
      this.load.on('progress', function (value) {
              //console.log(value);
  
              progressBar.clear();
              progressBar.fillStyle(0xFFFFFF, 1);
              progressBar.fillRect(250, 565, 300 * value, 30);
          });
  
          this.load.on('fileprogress', function (file) {
            //  console.log(file.src);
          });
  
          this.load.on('complete', function () {
              //console.log('complete');
              // var newgame_btn = this.add.image(0,0,"bone01").setInteractive({ useHandCursor: true });
              // newgame_btn.depth =505;
            progressBar.destroy();
            progressBox.destroy();
  
          });
  
  
  
  
  
  }
    // addDownCallback() {
    //
    //     if (this.sound.context.state === 'suspended') {
    //     this.sound.context.resume();
    //     }
    //       this.scene.start("DogBarkGame");
    //   };
  
    makeSafariFix(){
      var safariSoundHack = (()=>{
  
  let safariAudiotag = document.createElement('audio');
  document.body.appendChild(safariAudiotag);
  safariAudiotag.src = 'data:audio/x-wav;base64,UklGRooWAABXQVZFZm10IBAAAAABAAEAIlYAAESsAAACABAAZGF0YWYWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
  
  return (callback,thisarg)=>{
    safariAudiotag.onended = ()=>{
      // thisarg ? callback.call(thisarg) : callback();
    };
    safariAudiotag.play();
  };
  })();
  
  // titletemp.setScale(.25);
  
  var titletemp = this.add.image(400,300,"titleDog").setInteractive();
  titletemp.depth = 506;
  titletemp.setScale(.5);
  // titletemp.setAlpha(.5);
  
  var bone = this.add.container(400,550);
  var bone_btn = this.add.image(0,0,"titleDog").setInteractive({ useHandCursor: true });
    bone_btn.on('pointerover', function(){ this.setScale(1); });
    bone_btn.on('pointerout', function(){ this.setScale(1);});
    var labelStyle = { font: "24px courier", fill: "#000000",align: "center"};
    var label = this.add.text(0, -24, "Bark! Bark!", labelStyle);
    label.x -= label.width/2;
  
      bone.add([bone_btn,label]);
      bone_btn.on('pointerdown', () =>   safariSoundHack(stgm(this.scene)));
  bone.depth =508;
  ///////////DONT ERASE
  // titletemp.on('pointerdown', function (pointer) {
  // // safariSoundHack(stgm(this))
  // });
  ////////////##########
  // var rect = new Phaser.Geom.Rectangle(0, 0, 800, 600);
  // this.graphicsX = this.main.add.graphics({ fillStyle: { color: 0xFFFFFF,alpha:.5} }).setInteractive({});
  // this.graphicsX.fillRectShape(rect);
  // this.graphicsX.depth = 500;
  //
  //
  // //   // this.title.setScale(.25);
  // this.graphicsX.on('pointerdown', function (pointer) {
  // safariSoundHack(stgm)
  // });
  
  function stgm(sc){
  
  console.log("START GAME DUDE" );
  console.log(sc);
  sc.scene.startNext();
  // var bark_01=sc.scene.sound.add("bark_01");
  // bark_01.play();
  }
    }
    makeBoneButton(sc,labeltxt,xx,yy,emitit){
      var bone = this.add.container(xx,yy);
    var bone_btn = this.add.image(0,0,"bone01").setInteractive({ useHandCursor: true });
        bone_btn.on('pointerover', function(){ this.setScale(1); });
        bone_btn.on('pointerout', function(){ this.setScale(1);});
        // bone_btn.on('pointerdown', () =>   this.emitter.emit(emitit));
    // bone_btn.on('pointerdown', () =>   safariSoundHack(sc.stgm(this));
        var labelStyle = { font: "24px courier", fill: "#000000",align: "center"};
        var label = this.add.text(0, -24, labeltxt, labelStyle);
        label.x -= label.width/2;
  
          bone.add([bone_btn,label]);
        return bone;
    }
  create(){
    this.makeSafariFix();
    if(this.debugGame){
    this.init = true;
    return
    }
  
      this.anims.create({
       
    //   this.anims.create({
    //     key: 'duck_full_stand',
    //     frames: this.anims.generateFrameNumbers('duckfull', { start: 5, end:5 }),
    //     frameRate: 0,
    //     repeat: 0
    //   });
      // this.title2 = this.add.image(400,300,"title2").setInteractive();
      // this.title = this.add.image(400,300,"title").setInteractive();
  
      // this.title2 = this.add.image(400,300,"title2");
      // this.title = this.add.image(400,300,"title");
      // this.title.setScale(.25);
      // this.title.depth = 500;
  
      // this.title2.setScale(.25);
    //   this.title = this.add.image(400,300,"title").setInteractive();
    //   // this.title.setScale(.25);
  
    // this.title.on('pointerdown', function (pointer) {
    //   if(!this.mobile){
    //   // var bark_01=this.main.sound.add("bark_01");
    //   // bark_01.play();
    // }
    //   // this.addDownCallback();
    //     // this.startNext();
    //     // safariSoundHack(this.startGame());
    //     this.flickerOut();
    //   }, this);
  
      // this.cursorKeys = this.input.keyboard.createCursorKeys();
  // gsap.delayedCall(1.5, () => {this.flickerOut();});
  })
}
  
  
    startNext(){
      // console.log(this);
      // gsap.to(this.title, {alpha:0, duration:2,ease: "sine"});
  
  
    //   this.scene.start("DogBarkGame");
    }
    flickerOut(){
  
  
          var flicker = gsap.timeline( {repeat:20,yoyo:false});
          var picsTransition = .02;
      flicker.to(this.title, picsTransition,{alpha:0, ease:Expo.easeNone});
      gsap.to(this.title2, .5,{alpha:0,delay:1,ease:Expo.easeNone});
      this.bigduck = this.main.add.sprite(900,300,'big_duck');
            gsap.delayedCall(1.5, this.duckTime,[this]);
            gsap.delayedCall(3.5, () => {this.bigduck.play("load_duck");});
            // gsap.delayedCall(4, this.duckTime,[this]);
    }
    duckTime(sc){
      //console.log(" duck time cLLD");
      sc.bigduck.play("walk_duck");
        // sc.scene.start("DogBarkGame");
        gsap.to(sc.bigduck, 7,{x:-100,delay:0, onComplete:() => {sc.startGame2();},ease:Expo.easeNone});
    }
  
    standDuck(ob){
      //console.log(ob);
        // ob.bigduck.play("load_duck");
      // gsap.delayedCall(3,() => {ob.startGame();});
    }
  duckTimeGo(){
      // this.ob.start("DogBarkGame");
  // this.start("DogBarkGame");
  //console.log(" ANTS ");
      // ob.bigduck.play("walk_duck");
  
    // ob.gsap.to(ob.bigduck, 4,{x:-100,delay:0,ease:Expo.easeNone,onComplete:() => {ob.scene.start("DogBarkGame")}});
  
  }
  startGame2(){
    //console.log("start game")
        // this.init = true;
      this.scene.start("DogBarkGame");
  }
  startGame(){
    //console.log("start game")
        this.main.init = true;
        // gam.scene.start("DogBarkGame");
  }
  
      destroyLoader(ob){
          //console.log("big:" + ob);
            ob.play("walk_duck");
            gsap.to(ob, {x:-100, duration:1.5, onComplete:function(){
            ob.destroy();
          }
        });
      }
      update() {
        // if(this.cursorKeys.space.isDown && this.init){
        // this.start("DogBarkGame");
        //
        // }
    }
  }
  