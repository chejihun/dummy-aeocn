$(function(){
    
    //FAQ 부분
    $(".answer").hide();
    $(".faq_cover>h3").click(function(){
        if($(this).next().css("display") == "none"){
            $(".answer").slideUp();
            $(this).next().slideDown();
          
        }
		else {
			 $(this).next().slideUp();
		}

  
    });

});
