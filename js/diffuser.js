$(function(){

    // 처음상태 - 이미지를 9번 이후 부터 숨기기(8개만 보임)
    $(".images>li:nth-child(n+9)").hide();

    $(".plus>button").click(function(){

        number=$(".images>li:visible").length; //visible = 가시성을 가지며 기본값은 inherit(보임)
        //length 문자열의 길이를 반환하는 속성...?

        number=Math.floor(number/4)*4; //Math.floor 소수점을 버림 고로 number는 1 값을 가짐
        if(number>17) return false;
        else {
            $(".images>li").hide();
            $(".images>li:nth-child(-n+"+(number+4)+")").show();

        }
        return false

    });


        //nth-child(n+8)은8번 이후의 요소,
        //이때 n값은 0부터 1씩 증가한다
        // nth-child(-n+15)는 맨 앞에서 15번째까지의 요소를 선택


        //체크박스
    
        $("input").click(function(){
            $(".images>li").hide();
        
            //input을 체크하면
        if(this.checked) {
            for(i=0; i<=2; i++){
                if($(".menu>ul>li:eq("+i+")>input").is(":checked")==true ){
                    input_value = $(".menu>ul>li:eq("+i+")>input:checked").val();
                    $(".images>li[title="+input_value+"]").show();
                }
            }
        }
        //input을 해제하면 
        else {
            empty_number = 0
            for(i=0; i<=2; i++){
                if($(".menu>ul>li:eq("+i+")>input").is(":checked")==false)
                {
                    input_value = $(".menu>ul>li:eq("+i+")>input").val();
                    $(".images>li[title="+input_value+"]").hide();
                    empty_number++;
                }
                else{
                    input_value = $(".menu>ul>li:eq("+i+")>input").val();
                    $(".images>li[title="+input_value+"]").show();
                }
            }
            if( empty_number == 3 )
            $(".images>li:nth-child(-n+8)").show();
        }

        });
       
    
        $(".menu>ul>li:eq()>input").click(function(){
            $(".images>li").show();
        });   
        // /전체 체크 추가

}); 
