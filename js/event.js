$ (function(){


    //공지사항,갤러리

    $(".ev_cover>ul>li").click(function(){
        $(".sub_ng").hide();
        $(".sub_ng",this).show();
        $(".ff").removeClass("hovertab");
        $(".ff",this).addClass("hovertab");

    });
 
});
