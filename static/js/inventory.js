'use strict';
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
//	$(".inventory-item.carrot").click(useItemCarrot);
//	$(".inventory-item.greenapple").click(useItemGreenApple);
//	$(".inventory-item.redapple").click(useItemRedApple);
//	$(".inventory-item.bread").click(useItemBread);
//	$(".inventory-item.beet").click(useItemBeet);

	//close popup
	$('.cd-popup').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});

	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.cd-popup').removeClass('is-visible');
	    }
    });
}

$(".inventory-item.carrot").click(function(){
	console.log("hm??");
	event.preventDefault();
	var currentHP = document.getElementById("health").value;
	var used = false;
	$('#popup1').addClass('is-visible');
	console.log("._.");
	$('#yes1').one('click', function(){
		console.log("wut");
		used = true;
	});
	$('#no1').on('click', function(){
		console.log("the");
		used = false;
	});
	if(used){
		if(!(document.getElementById("health").value>=100)){
			document.getElementById("health").value += 10;}
			sessionStorage.itemCarrotUsed = true;
		$('#popup1').removeClass('is-visible');
		used = false;
	}
	else{
		$('#popup1').removeClass('is-visible');
		document.getElementById("health").value = currentHP;
		used = false;
	}
	console.log("end");
});
if(sessionStorage.itemCarrotUsed){
	console.log("Carrot Eaten");
	$(".inventory-item.carrot").removeClass('inventory-item carrot');	
	if(document.getElementById("health").value >= 90){
		document.getElementById("health").value = 100;
	}
	else{ document.getElementById("health").value += 10;}
}

$(".inventory-item.greenapple").click(function(){
	event.preventDefault();
	var currentHP = document.getElementById("health").value;
	$('#popup2').addClass('is-visible');
	$('#yes2').click(function(){
			if(!(document.getElementById("health").value>=100)){
				document.getElementById("health").value += 10;
				sessionStorage.itemGreenAppleUsed = true;	
			}
			$('#popup2').removeClass('is-visible');
	});
	$('#no2').on('click', function(){
		$('#popup2').removeClass('is-visible');
		document.getElementById("health").value = currentHP;
	});
});
if(sessionStorage.itemGreenAppleUsed){
	console.log("Green Apple Eaten");
	$(".inventory-item.greenapple").removeClass('inventory-item greenapple');	
	if(document.getElementById("health").value >= 90){
		document.getElementById("health").value = 100;
	}
	else{ document.getElementById("health").value += 10;}
}

$(".inventory-item.redapple").click(function(){
	event.preventDefault();
	var currentHP = document.getElementById("health").value;
	$('#popup3').addClass('is-visible');
	$('#yes3').click(function(){
			if(!(document.getElementById("health").value>=100)){
				$(".inventory-item.redapple").removeClass('inventory-item redapple');
				document.getElementById("health").value += 10;
				sessionStorage.itemRedAppleUsed = true;
			}
			$('#popup3').removeClass('is-visible');
	});
	$('#no3').on('click', function(){
		$('#popup3').removeClass('is-visible');
		document.getElementById("health").value = currentHP;
	});
});
if(sessionStorage.itemRedAppleUsed){
	console.log("Red Apple Eaten");
	$(".inventory-item.redapple").removeClass('inventory-item redapple');	
	if(document.getElementById("health").value >= 90){
		document.getElementById("health").value = 100;
	}
	else{ document.getElementById("health").value += 10;}
}

$(".inventory-item.bread").click(function(){
	event.preventDefault();
	var currentHP = document.getElementById("health").value;
	$('#popup4').addClass('is-visible');
	$('#yes4').click(function(){
			if(!(document.getElementById("health").value>=100)){
				$(".inventory-item.bread").removeClass('inventory-item bread');
				document.getElementById("health").value += 10;
				sessionStorage.itemBreadUsed = true;
			}	
			$('#popup4').removeClass('is-visible');	
	});
	$('#no4').on('click', function(){
		$('#popup4').removeClass('is-visible');
		document.getElementById("health").value = currentHP;
	});
});
if(sessionStorage.itemBreadUsed){
	console.log("Bread Eaten");
	$(".inventory-item.bread").removeClass('inventory-item bread');	
	document.getElementById("health").value += 10;
}

$(".inventory-item.beet").click(function(){
	event.preventDefault();
	var currentHP = document.getElementById("health").value;
	$('#popup5').addClass('is-visible');
	$('#yes5').click(function(){
			if(!(document.getElementById("health").value>=100)){
				$(".inventory-item.beet").removeClass('inventory-item beet');
				document.getElementById("health").value += 10;
				sessionStorage.itemBeetUsed = true;
			}
			$('#popup5').removeClass('is-visible');
	});
	$('#no5').on('click', function(){
		$('#popup5').removeClass('is-visible');
		document.getElementById("health").value = currentHP;
	});
});
if(sessionStorage.itemBeetUsed){
	console.log("Beet Eaten");
	$(".inventory-item.beet").removeClass('inventory-item beet');
	if(document.getElementById("health").value >= 90){
		document.getElementById("health").value = 100;
	}
	else{ document.getElementById("health").value += 10;}
}
