$(function(){

    console.log("DOM読み込んだよ");
    $("#btn").on("click",function(){

        //ajaxでロード
        $.ajax({
            url:"data.json",
            type:"GET",
            detaType:"json"
        }).done(function(data){
            console.log(data);
            showContent(data);
        }).fail(function(){
            console.log("ajax error");
        });
    });

    function showContent(data){
        //$("#container").append(data);
        for(var cnt = 0; cnt < data.length; cnt++){
            $ ("#container li").eq(cnt).text(data[cnt].name);
        }
    }

});
