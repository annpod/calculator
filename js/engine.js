
function Alerts(idEl) {
	this._idEl = idEl;	
}
Alerts.prototype.showResult = function(){
	document.getElementsByClassName("screen").item(0).value = this._idEl;
};


var calculators = [];
(function(){
	document.getElementById("add_calculator").addEventListener("click", AddCalculate, false);
	
	function AddCalculate(){

		var n = Date.now();
		
		var idEl ="calc";
		idEl += n;
		document.getElementById("content").innerHTML += '<div id='+idEl+'></div>'
		/**/

		$( "#"+idEl ).load( "calculator_template.html .calc-content");
		var newAlert = new Alerts(idEl);
		newAlert.showResult();
		
		//console.log(calculators);
	};


})();