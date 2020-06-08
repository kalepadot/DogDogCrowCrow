window.onload = function(){
	// 1080 x 2160
  var config = {
    width: 800 ,
    height:600,
    backgroundColor: 0xFFFFFF,
    scene: [TitleScene,DogDogGame],
    autoCenter: Phaser.Scale,

    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
        }
    }
  }

  var game = new Phaser.Game(config);
//   this.game.scale.pageAlignHorizontally = true;
// this.game.scale.pageAlignVertically = true;
// this.game.scale.refresh();



}
