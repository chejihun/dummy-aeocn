$(function(){

//슬라이드 배너



var ww = $(window).width();

 
$(".slide, .slide>div").css("width",ww+"px");

$(".slide>div").not(":eq(0)").css("left",ww+"px")

//브라우저 리사이즈 될 떄마다 브라우저의 section높이 값 계산
$(window).resize(function(){
	ww =  $(window).width();
	$(".slide_cover, .slide>div").css("width",ww+"px");
	$(".slide>div").not(":eq(0)").css("left",ww+"px");
});
	

	//slide 0 1 2 3 0 1 2 3
    var now = 0;
    var slideImg = 3;

    function slide() {
		
		$(".slide>div").not(":eq("+now+")").css("left",ww+"px")
				
        now = now == slideImg ? 0 : now+= 1 ;
        $(".slide>div").eq(now-1).animate({left:-ww+"px"},1000); 
        $(".slide>div").eq(now).animate({left:"0px"},1000,function(){
            $(".slide>div").not(":eq("+now+")").css("left",ww+"px")
        });
		
		$(".bullet>li").removeClass("hover");
		$(".bullet>li").eq(now).addClass("hover");

		var windowWidth = $( window ).width();
		if(windowWidth < 1200) {
		//창 가로 크기가 500 미만일 경우
		} else {
		//창 가로 크기가 500보다 클 경우
		}
		$( window ).resize(function() {
			//창크기 변화 감지
		 });
            
    }
    var clear = setInterval (slide, 4000);

    //버튼 블릿기호 클릭시 자동슬라이드
	
	$(".slide_pre, .slide_next, .bullet>li").click(function(){
		clearInterval(clear);
	});
	
	//슬라이드 호출 
	
	$(".slide_next").click(function(){
		clearInterval(clear);
		slide()
		});
	
	$(".slide_pre").click(function(){
		clearInterval(clear);
		slide_left()	
	});

    // left 버튼 3-2-1-0-3-2-1-0.... 순서

	function slide_left() {
		var slideImg = 0;
		$(".slide>div").not(":eq("+now+")").css("left",-ww+"px")
		now = now == slideImg ? 3 : now-= 1 ;
		if ( now ==3 ){
			$(".slide>div").eq(0).animate({left:ww+"px"},1000);
		}
		else {
			$(".slide>div").eq(now+1).animate({left:ww+"px"},1000);
		}
		$(".slide>div").eq(now).animate({left:"0px"},1000,function(){
            $(".slide>div").not(":eq("+now+")").css("left",-ww+"px")
        });
		
		$(".bullet>li").removeClass("hover");
		$(".bullet>li").eq(now).addClass("hover");
	}


    //프로덕트 상품 슬라이드
	
	// $("새요소").prependTo("요소선택");
	// 선택한 요소의 맨 앞위치에 새 요소를 추가합니다
	// $("새요소").appendTo ("요소선택");
	// 선택한 요소의 마지막위치에 새 요소를 추가합니다.
	
	
	function product_next(){
		$(".product>div>ul").animate({left:"-320px"},1000,function()
		{$(".product>div>ul>li:first").appendTo(".product>div>ul"); 
		$(".product>div>ul").css("left","0px")
		})
		
	}
	var clear1 = setInterval(product_next, 5000);
	$(".product_next").click(function(){
		clearInterval (clear1);
		product_next();
		return false;
	});
	
	//상품 버튼
	
	
	//상품 오른쪽 버튼
	$(".product_next").click(function(){
	clearInterval(clear1);
	product()
	});
	
	//상품 왼쪽 버튼
	function product_prev() {
		
		$(".product>div>ul>li:last").prependTo(".product>div>ul");
		$(".product>div>ul").css("left","-320px");
		$(".product>div>ul").animate({left:"0px"},1000);
		}
	
	$(".product_pre").click(function(){
		clearInterval(clear1);
		product_prev()
		return false;
	});
	


});
