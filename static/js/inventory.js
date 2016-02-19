'use strict';
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$(".inventory-item.carrot").click(useItemCarrot);
	$(".inventory-item.greenapple").click(useItemGreenApple);
	$(".inventory-item.redapple").click(useItemRedApple);
	$(".inventory-item.bread").click(useItemBread);
	$(".inventory-item.beet").click(useItemBeet);

}

function useItemCarrot(){
	if(!document.getElementById("health").value >= 100){
	$(".inventory-item.carrot").removeClass('inventory-item carrot');
	if(document.getElementById("health").value >= 90){
		document.getElementById("health").value = 100;
	}
	else{ document.getElementById("health").value += 10;}
	sessionStorage.itemCarrotUsed = true;
}
}
if(sessionStorage.itemCarrotUsed = true){
	console.log("Carrot Eaten");
	$(".inventory-item.carrot").removeClass('inventory-item carrot');	
	if(document.getElementById("health").value >= 90){
		document.getElementById("health").value = 100;
	}
	else{ document.getElementById("health").value += 10;}
}


function useItemGreenApple(){
	if(!document.getElementById("health").value >= 100){
	$(".inventory-item.greenapple").removeClass('inventory-item greenapple');
	if(document.getElementById("health").value >= 90){
		document.getElementById("health").value = 100;
	}
	else{ document.getElementById("health").value += 10;}
	sessionStorage.itemGreenAppleUsed = true;	
}
}
if(sessionStorage.itemGreenAppleUsed = true){
	console.log("Green Apple Eaten");
	$(".inventory-item.carrot").removeClass('inventory-item greenapple');	
	if(document.getElementById("health").value >= 90){
		document.getElementById("health").value = 100;
	}
	else{ document.getElementById("health").value += 10;}
}

function useItemRedApple(){
	if(!document.getElementById("health").value >= 100){
	$(".inventory-item.redapple").removeClass('inventory-item redapple');
	if(document.getElementById("health").value >= 90){
		document.getElementById("health").value = 100;
	}
	else{ document.getElementById("health").value += 10;}
	sessionStorage.itemRedAppleUsed = true;
}
}
if(sessionStorage.itemRedAppleUsed = true){
	console.log("Red Apple Eaten");
	$(".inventory-item.carrot").removeClass('inventory-item redapple');	
	if(document.getElementById("health").value >= 90){
		document.getElementById("health").value = 100;
	}
	else{ document.getElementById("health").value += 10;}
}

function useItemBread(){
	if(!document.getElementById("health").value >= 100){
	$(".inventory-item.bread").removeClass('inventory-item bread');
	if(document.getElementById("health").value >= 90){
		document.getElementById("health").value = 100;
	}
	else{ document.getElementById("health").value += 10;}
	sessionStorage.itemBreadUsed = true;
}
}
if(sessionStorage.itemBreadUsed = true){
	console.log("Bread Eaten");
	$(".inventory-item.carrot").removeClass('inventory-item bread');	
	if(document.getElementById("health").value >= 90){
		document.getElementById("health").value = 100;
	}
	else{ document.getElementById("health").value += 10;}
}

function useItemBeet(){
	if(!document.getElementById("health").value >= 100){
	$(".inventory-item.beet").removeClass('inventory-item beet');
	if(document.getElementById("health").value >= 90){
		document.getElementById("health").value = 100;
	}
	else{ document.getElementById("health").value += 10;}
	sessionStorage.itemBeetUsed = true;
}
}
if(sessionStorage.itemBeetUsed = true){
	console.log("Beet Eaten");
	$(".inventory-item.carrot").removeClass('inventory-item beet');	
	if(document.getElementById("health").value >= 90){
		document.getElementById("health").value = 100;
	}
	else{ document.getElementById("health").value += 10;}
}
