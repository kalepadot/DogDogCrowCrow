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
      
    // this.load.image("parktiles", "/img/maps/park.png");
    // this.load.tilemapTiledJSON('parkmap', '/img/maps/park001.json');
    // var map = this.make.tilemap({ key: 'parkmap' });
    const tilemap = this.make.tilemap({key: 'tilemap'});
    const tileset = tilemap.addTilesetImage('park', 'tiles');
    tilemap.createStaticLayer('layer1', tileset, 0, 0);
    tilemap.createStaticLayer('layer2', tileset, 0, 0);

//    this.scene.add(tilemap);

    // var map = this.make.tilemap({ key: 'map' });

    // var tiles = map.addTilesetImage('parktiles2000', 'tiles');

    // var layer = map.createStaticLayer(0, tiles, 0, 0);
    // var tiles = map.addTilesetImage('thePark', 'parktiles');
    // this.scene.add.tilemap(map);
    // layer = map.createDynamicLayer('Ground', tiles, 0, 0).setVisible(false);

    // this.rt = this.add.renderTexture(0, 0, 800, 600);
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
  