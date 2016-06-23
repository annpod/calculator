
function Calculator() {
//var self = this,
var buttons = document.getElementsByTagName('button');
var firstValue = "";
var secondValue = ""; 
var getValue = "" ;
var result;
var action;
var output;

/**/
var showResult = function(output){
	document.getElementById("screen").value = output; 
};
var init = function(){
	document.getElementById("buttons").addEventListener("click", inputData, false);
};
var resetData = function(){
	firstValue = "";
	secondValue = "";
	getValue = "";
	action = "";
	result = "";
};

/**/
var calculate = function(a,action,b) {
	switch (action){
		case "-":       
		return a - b;
		break;		
		case "+":   
		return a + b;		
		break;
		case "*": 
		return a * b;
		break;
		case "/": 
		return a / b;
		break;
	};      
};
/**/

var inputData = function(e){ 
		//preventDefault(event); 
		var elem = event.target;
		var purpose = elem.getAttribute('data-purpose'); 
		var elemValue = elem.getAttribute('value');
		//console.log("purpose"+purpose); 

		if ( purpose ==="digit" ){
			if (action === "="){
				resetData();
			}
			getValue += elemValue;   
			showResult(parseFloat(getValue)); 

		}
		else if ( purpose ==="action" ){    
			if ( firstValue === "" ){
				firstValue = parseFloat(getValue);     
			}
			else{      
				secondValue = parseFloat(getValue); 
				if(firstValue && action && secondValue){
					firstValue = calculate(firstValue,action,secondValue);
					showResult(firstValue); 
				} 
			}       
			action = elemValue;
			getValue = "";
		}
		else if ( purpose =="reset" ){
			resetData();
			showResult(0);		
		};
	};
	/**/
	init();
	/**/
};



var myCalc = new Calculator(); // создали калькулятор

