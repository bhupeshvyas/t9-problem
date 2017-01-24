
var input = document.getElementById("input");
var timer;
var pause = 0;
var difTolerance = 700;
var startTime;
var endTime;
var first = true;
var activeKey=[];
var current;
var lastKey;
var k48 = [" ","0"];
var k49 = [".",",","!", "1"];
var k50 = ["a","b","c", "2"];
var k51 = ["d","e","f", "3"];
var k52 = ["g","h","i", "4"];
var k53 = ["j","k","l", "5"];
var k54 = ["m","n","o", "6"];
var k55 = ["p","q","r","s", "7"];
var k56 = ["t","u","v", "8"];
var k57 = ["w","x","y","z", "9"];
var k58= ["*"];
var k59 = ["#"];
var text=[];
function setWord(){
    lastKey=null;
    current = 0;
    first=true;
}
function checkPause(){
    endTime = new Date().getTime();
    if (endTime - startTime >= difTolerance) {
        clearInterval(timer);       
        setWord();
    }
}

function handleClick(e){
    if ($(e).prop("id") != lastKey) {

        current = 0;
        first = true;
    }
    
	switch($(e).prop("id"))
	{
		case "0" : activeKey = k48; break;
		case "1" : activeKey = k49; break;
		case "2" : activeKey = k50; break;
		case "3" : activeKey = k51; break;
		case "4" : activeKey = k52; break;
		case "5" : activeKey = k53; break;
		case "6" : activeKey = k54; break;
		case "7" : activeKey = k55; break;
		case "8" : activeKey = k56; break;
		case "9" : activeKey = k57; break;
		case "*" : activeKey = k58;current = 0;first = true;break; 
		case "#" : activeKey = k59;current = 0;first = true;break; 
	}
   

    if (current < activeKey.length-1) {
        current++;      
    }else{
        current = 0;
        first=true;
    }
    if (first) {
        current = 0;
        first = false;
    }

    clearInterval(timer);
    startTime = new Date().getTime();
    pause = 0;
    timer = setInterval(checkPause, 5);

    if ($(e).prop("id") != lastKey) {
        text.push(activeKey[current]);
    }else{
        text.pop();
        text.push(activeKey[current]);
    }
    $("#input").val(text.join(""));

    lastKey = $(e).prop("id");
}
