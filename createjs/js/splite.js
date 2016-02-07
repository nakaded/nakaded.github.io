$(function(){

	// stage
	var stage = new createjs.Stage("canvasEl");

  // 画像を保存する配列
  var manifest =[
    {src:"img/calcium.png"},
	{src:"img/vitaminC.png"},
  ];

  // loadQueueクラス
  var loadQueue = new createjs.LoadQueue();

  // 同時に何ファイル読み込むか
  // loadQueue.setMaxConnections(6);

  // 読み込み開始
  loadQueue.loadManifest(manifest);


  // 全部読み込み終わったら
  loadQueue.addEventListener("complete", function(evt){
    console.log('読み込み完了');
    showVege();

  });


function showVege(){

	var vcSprite = new createjs.SpriteSheet(vitaminCSprite);

	var vitaminC = new createjs.Sprite(vcSprite,"stand");
	stage.addChild(vitaminC);
	vitaminC.x = 150;
	vitaminC.y = 400;
	vitaminC.alpha = 0;
	createjs.Tween.get(vitaminC).to({alpha:1},500).walk(1000).call(vitaminCWalk).to({x:500},4000)
	.call(vitaminCstand);


	function vitaminCWalk(){
		vitaminC.gotoAnfPlay("walk");
	}
	function vitaminCstand(){
		vitaminC.gotoAnfPlay("stand");
	}

	stage.update();
};

});
