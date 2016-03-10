'use strict';
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
}

$("#logout").click(function(){
	event.preventDefault();
	sessionStorage.clear();
	var cookies = document.cookie;


	console.log("test");
});