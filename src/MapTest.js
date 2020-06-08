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
    for(var i=0;i<=25;i++){
        var value = Phaser.Math.Between(0, 600);
        var valueA = Phaser.Math.Between(0, 600);
        // console.log("value " + i+ ":"+value);
        this.add.image(valueA,value,"titleDog").setInteractive({ useHandCursor: true });

            }


  }

   
      update() {
 
    }
  }
  