class CharTest extends Phaser.Scene {
    constructor(){
      super("CharTest");
    }
  create(){
    this.init = false;
   
     this.scene  = this;
     console.log("This Char");
  

     this.addHero();
  }

  addHero(){
  this.hero= this.scene.add.sprite(400,300,'hero');
      this.anims.create({
      key: 'move',
      frames: this.anims.generateFrameNames('hero', { start: 0, end: 4}),
      frameRate: 5,
      repeat: -1
  });
  this.cursors = this.input.keyboard.createCursorKeys();
 this.hero.play('move');

  }

   
      update() {
        if (  this.cursors.up.isDown) {
          this.hero.y+=10;
        } else if (  this.cursors.down.isDown) {
          this.hero.y-=10;
        } 
        
        if( this.cursors.right.isDown) {
          this.hero.x+=10;
        } else if (  this.cursors.left.isDown) {
          this.hero.x-=10;
        }
    }
  }
  