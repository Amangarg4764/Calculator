var inputstr=$(".input").text();
function check(){
    if(inputstr.length>20){
        $(".input").css("font-size", "1rem");
        $(".input").css("overflow-x", "scroll");        
    }
    else{
        $(".input").css("overflow", "hidden");
        $(".input").css("font-size", "1.7rem");
    }
}
$(".nas").click(function(){               
                inputstr='0';
                $(".input").text(inputstr);
                $(".output").text(inputstr);
                var xp=$(".output").text();
                if(xp.length>14){
                    $(".output").css("overflow-x", "scroll");
                }
                else{
                    $(".output").css("overflow-x", "hidden");
                }
                check();
            });
            $(".cl").click(function(){
                
                let len=inputstr.length;
                if(len==1){
                    inputstr='0';
                    $(".input").text(inputstr);
                }
                else{
                    inputstr=inputstr.slice(0,len-1);
                    $(".input").text(inputstr);
                }
                check();
                var xp=$(".output").text();
                if(xp.length>14){
                    $(".output").css("overflow-x", "scroll");
                }
                else{
                    $(".output").css("overflow-x", "hidden");
                }
            });            
            $(".four").click(function(){
                check();
                $(".output").text(eval($(".input").text()));
                var xp=$(".output").text();
                if(xp.length>14){
                    $(".output").css("overflow-x", "scroll");
                }
                else{
                    $(".output").css("overflow-x", "hidden");
                }
            });
            function updateString(val){
                check();
                if(inputstr=='0' || inputstr=="0")
                {
                    inputstr=val;
                    $(".input").text(inputstr);
                }
                else{
                    var arb=inputstr.slice(inputstr.length-1);
                    if(arb=='/' || arb=='*' || arb=='-' || arb=='+' || arb=='%'){
                        if(val=='/' || val=='*' || val=='-' || val=='+' || val=='%'){
                            inputstr=inputstr.slice(0,inputstr.length-1)+val;
                            $(".input").text(inputstr);    
                        }
                        else{
                            inputstr+=val;
                            $(".input").text(inputstr);    
                        }
                    }
                    else{
                        inputstr+=val;
                        $(".input").text(inputstr);
                    }   
                }
            }