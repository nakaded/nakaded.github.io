$(function(){

    //加速度のイベント
    window.addEventListener('devicemotion',shakeDevice);

    function shakeDevice(evt){
      var x = evt.acceleration.x;
      var y = evt.acceleration.y;
      var z = evt.acceleration.z;

      $('#device li').eq(0).text('加速度X: ' + x);
      $('#device li').eq(1).text('加速度Y: ' + y);
      $('#device li').eq(2).text('加速度Z: ' + z);

      if(Math.abs(x) > 30|| Math.abs(y) > 30 ||Math.abs(z) > 15){
          $("#result").text("振ったよ");
      }
    }

});
