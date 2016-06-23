
function Calculator(idEl) {
//this = this;
this._idEl = idEl;
this.container = document.getElementById(this._idEl);
this.buttons = document.getElementById(this._idEl).getElementsByClassName("button");
this.screenCont = document.getElementById(this._idEl).getElementsByClassName("screen");
this.firstValue = "";
this.secondValue = ""; 
this.getValue = "" ;
this.result;
this.operation;
this.output;
this.purpose;
this.elemValue;
}

/**/
Calculator.prototype.showResult = function(output){
	//console.log('screencont'+buttons)
	this.screenCont.item(0).value = output; 
	//console.log("screenshow"+screenCont);
};
Calculator.prototype.takeValue = function(){
	//console.log("screentake"+container.getElementsByTagName("input").value);
	return this.screenCont.item(0).value; 
};
Calculator.prototype.init = function(){
	//console.log(buttons);
	document.getElementById(this._idEl).addEventListener("click", this.getButtonEvent, false);
	document.addEventListener("keydown", this.getKeyEvent, false);
};
Calculator.prototype.resetData = function(){
	this.firstValue = "";
	this.secondValue = "";
	this.getValue = "";
	this.operation = "";
	this.result = "";
};

/**/
Calculator.prototype.calculate = function(a,operation,b) {
	switch (operation){
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
		default :		
			break;
	};      
};
/**/

Calculator.prototype.getButtonEvent = function(event){ 
		//preventDefault(event);
		
		this.elem = event.target;
		this.purpose = this.elem.getAttribute('data-purpose'); 
		this.elemValue = this.elem.getAttribute('value');	
		console.log("button "+this.elemValue);
		console.log("purpose "+this.purpose);
		//event.target.blur();
		Calculator.prototype._inputData(this.purpose,this.elemValue);	
}
Calculator.prototype.getKeyEvent = function(event){ 
		//preventDefault(event); 
		this.elem = event.target;
		if ( event.key.match(/\d|\./) ){
			this.elemValue = event.key;
			this.purpose = "digit";
			console.log(this.elemValue);
			Calculator.prototype._inputData();	
		}
		else if ( event.key.match(/\-|\+|\*|\/|Enter/) ){
			this.elemValue = event.key;
			this.purpose = "operation";
			console.log(this.elemValue);
			Calculator.prototype._inputData();	
		}					
}
/**/
Calculator.prototype._inputData = function(purpose,getValue){ 
		var purpose = purpose;
		var getValue = getValue;
		console.log("input "+purpose);		
		switch (this.purpose){
		case "digit":
			if (this.operation === "="){
				this.resetData();
			}
			this.getValue += this.elemValue;   
			this.showResult(parseFloat(this.getValue)); 
			//console.log('result '+parseFloat(getValue));
			break;
		
		case "operation":
			if ((this.operation === "=") || (this.operation === "Enter") || ( this.firstValue === "" )){
				this.firstValue = parseFloat(this.takeValue()); 
				 console.log('firstValue'+this.firstValue);
			}
			else {      
				this.secondValue = parseFloat(this.takeValue());
				console.log('secondValue'+this.secondValue); 
				//if(firstValue && operation && secondValue){
					this.firstValue = this.calculate(this.firstValue,this.operation,this.secondValue);
					console.log('result'+this.firstValue);
					this.showResult(this.firstValue); 
				//} 
			}   
			this.operation = this.elemValue;
			this.getValue = "";
			break;

		case "reset":
			this.resetData();
			this.showResult("");		
			break;

		default :		
			break;
		};
	};
	/**/

	/**/


 // создали калькулятор

