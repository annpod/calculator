
(function() {
  
 // var buttons = document.getElementsByTagName('button');
 
 // var changeColor = function (e) { 
 // 	// console.log( e.type );
 // 	// console.log( e.target );
 // 	// console.log( this );
 // 	// console.log( e.currentTarget );
 
 // 	e.preventDefault();
 
	// if (this.id === 'day') {
	// 	document.body.className = 'day';
	// } else if (this.id === 'night') {
	// 	document.body.className = 'night';
	// } 
 // };
 
 // var sayHi = function () {
 // 	alert('Привет!');
 // };
 

 // for (var i = 0, len = buttons.length; i < len; i++) {
 
 // 	var html = document.getElementsByTagName('html')[0],
 // 		yandex = document.getElementById('yandex');
 
 // 	//html.addEventListener('click', changeColor, false );
 // 	yandex.addEventListener('click', changeColor, false );
 
 // 	buttons[i].addEventListener('click', changeColor, false );
 
 // 	//buttons[i].removeEventListener('click', sayHi, false);
 // };






 
 var changeColor = function (e) {   
 	eventsObj.preventDefault(e);
 
 	var elem = eventsObj.getTarget(e),
 		colorData = elem.getAttribute('data-value'); 
 console.log(colorData);

 	// if ( colorData ) {
 
 	// 	if (e.type === 'click') {
 	// 		// document.body.className = '';
 	// 		alert("d");
 
 	// 	} else if (e.type === 'mouseover') { 
 	// 		// document.body.className = colorData;
 	// 	}
 	// }	 
 };
 
 
  eventsObj.addEvent(document, 'click', changeColor );
 // eventsObj.addEvent(document, 'mouseover', changeColor );



})();