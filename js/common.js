$(function(){

    // 메뉴

    $(".sub, .sub2").hide();

    //메인
    $(".main>li").mouseover(function(){
        $(".ad",this).addClass("add");
        $(".sub",this).stop().slideDown();
        
    });


    $(".main>li").mouseout(function(){
        $(".ad",this).removeClass("add");
        $(".sub" ,this).stop().slideUp();
    });

    //서브
    $(".sub_menu>li:eq(0)").mouseover(function(){
        $(".ab",this).addClass("adb");
        $(".sub2").stop().slideDown();
    });

    $(".sub_menu>li:eq(0)").mouseout(function(){
        $(".ab",this).removeClass("adb");
        $(".sub2").stop().slideUp();
    });


});
