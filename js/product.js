$(function(){

	var ww = $(window).width();
	$(".f_banner1, .slide_cover").css("width",ww+"px");
    $(".slide_cover>div").not(":eq(0)").css("left",ww+"px")
	
	//브라우저 리사이즈 될 떄마다 브라우저의 section높이 값 계산
	$(window).resize(function(){
		ww =  $(window).width();
		$(".f_banner1, .slide_cover>div").css("width",ww+"px");
		$(".slide_cover>div").not(":eq(0)").css("left",ww+"px");
	});

	/*브라우저 section높이 값 계산  - 문제 발생 /  section으로 지정시 인지 못함 푸터값 올라옴 */
	var ht = $(window).height();
		$(".f_banner1, .essential, .functionality, .diffuser").height(ht);

	// // /*브라우저가 리사이즈 될때마다 브라우저 section높이 값 계산*/  - 오류?
	$(window).resize(function(){
		var ht = $(window).height();
		$("section").height(ht);
	});

	// //step5 주메뉴 클릭 시, 자동우로 상하 스크롤시키기 - 정상 작동 / 문제 없음
	$(".page_bullet>li").click(function(e){
		e.preventDefault(); //a태그 사용 안되게 함 
		
		var ht = $(window).height();  //브라우저 높이값

		var i = $(this).index(); //현재 클릭한 li의 순서값 
		
		var nowTop = i*ht;	  // 높이값*박스의 순서값		
	
		$("html,body").stop().animate({"scrollTop":nowTop},1000);

		
	});	
	
	// step6. 화면이 스크롤될때마다 현재 영역에 해당하는 메뉴 활성화하기 - 정상 작동 / 문제 없음
		$(window).scroll(function(){	
	
		var ht = $(window).height();  //브라우저 높이 값
		var scroll = $(window).scrollTop();  //스크롤된 값
		for(var i=0; i<4; i++){
			if(scroll>=ht*i && scroll< ht*(i+1)){
				$(".page_bullet li").removeClass();
				$(".page_bullet li").eq(i).addClass("p_hover"); //해당 영역 블릿 기호
			
			};
		}
		});

		// 스크롤 해당 부분 오류 발생 / 2칸씩 내려감 문제
		$('.content>section').mousewheel(function(event,delta){
			//마우스 휠을 올렸을때	
			if(delta>0) {
			var ht = $(window).height();	
			var i = $(this).index()-1;
			$("html, body").stop().animate({"scrollTop":ht*i},700);
				
			//마우스 휠을 내렸을때
			}else if(delta<0){
			var ht = $(window).height();	
			var i = $(this).index()+1;
			// alert(i);
			$("html, body").stop().animate({"scrollTop":ht*i},700);		
				}
		});


		// =========================================================슬라이드 움직임 

		//slide 0 1 2 3 0 1 2 3
		var now = 0;
		var slideImg = 3;
	
		function slide() {
			
			$(".slide_cover>div").not(":eq("+now+")").css("left",ww+"px")
					
			now = now == slideImg ? 0 : now+= 1 ;
			$(".slide_cover>div").eq(now-1).animate({left:-ww+"px"},1000); 
			$(".slide_cover>div").eq(now).animate({left:"0px"},1000,function(){
				$(".slide_cover>div").not(":eq("+now+")").css("left",ww+"px")
			});
		

			
			$(".slide_bullet>span").text(now+1)
			document.querySelector('.slide_bullet>span').style.cssText  = 'font-family: "Adobe 명조 Std", "Nanum gothic"; color: #ffffff; letter-spacing: 10px;font-size: 60px; ';


		}
		var clear = setInterval (slide, 4000);

		
	
		
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
			$(".slide_cover>div").not(":eq("+now+")").css("left",-ww+"px")
			now = now == slideImg ? 3 : now-= 1 ;
			if ( now ==3 ){
				$(".slide_cover>div").eq(0).animate({left:ww+"px"},1000);
			}
			else {
				$(".slide_cover>div").eq(now+1).animate({left:ww+"px"},1000);
			}
			$(".slide_cover>div").eq(now).animate({left:"0px"},1000,function(){
				$(".slide_cover>div").not(":eq("+now+")").css("left",-ww+"px")
			});


			$(".slide_bullet>span").text(now+1)
			document.querySelector('.slide_bullet>span').style.cssText  = 'font-family: "Adobe 명조 Std", "Nanum gothic"; color: #ffffff; letter-spacing: 10px;font-size: 40px; ';
			
			
			}
	
	
	//  alert($(".top_button").css("top"));
	
	//탑버튼

	
	$(".top_button>a").click(function() {
		$('html, body').animate({scrollTop : 0}, 800);
		return false;
	});
});

	

	







    

        
    


