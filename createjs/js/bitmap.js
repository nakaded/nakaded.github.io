$(function(){

	// stage
	var stage = new createjs.Stage("canvasEl");

  // 画像を保存する配列
  var manifest = [
    {src:'img/tomato.png'},
	{src:"img/pumpkin.png"},
	{src:"img/greenpeppar.png"}
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
    addStage();
  });



	createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
	createjs.Ticker.setFPS(30);

  createjs.Ticker.addEventListener('tick',function(){
    stage.update();
  })

});
