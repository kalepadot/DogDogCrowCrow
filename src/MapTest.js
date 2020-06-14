class MapTest extends Phaser.Scene {
    constructor(){
      super("MapTest");
    }
  create(){
    this.init = false;
   
     this.scene  = this;
     console.log("THIS IS MapTest");
    // this.makeTitleScreen(this);
    // this.makeInfoScreen(this);
  ///  var myMap = [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]]
    this.makeAMap();
  
  }
  makeAMap(){
      /// this article was super helpful 
     // https://medium.com/@michaelwesthadley/modular-game-worlds-in-phaser-3-tilemaps-1-958fc7e6bbd6

     // Parameters are the name you gave the tileset in Tiled and then the key of the tileset image in
  // Phaser's cache (i.e. the name you used in preload)
    const tilemap = this.make.tilemap({key: 'tilemap'});
    const tileset = tilemap.addTilesetImage('park', 'tiles');

  // Parameters: layer name (or index) from Tiled, tileset, x, y
  const bgLayer = tilemap.createStaticLayer("bglayer", tileset, 0, 0);
  const topLayer = tilemap.createStaticLayer("toplayer", tileset, 0, 0);

//
    var cloud= this.scene.add.sprite(400,300,'cloud');
    
    // cloud.play();
    for(var i=0;i<0;i++){
        var value = Phaser.Math.Between(0, 600);
        var valueA = Phaser.Math.Between(0, 600);
        // console.log("value " + i+ ":"+value);
        this.add.image(valueA,value,"titleDog").setInteractive({ useHandCursor: true });

            }
            

  }

   
      update() {
 
    }
  }
  