'use strict';
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
$(".inventory-item.carrot").hide();
$(".inventory-item.greenapple").hide();
$(".inventory-item.redapple").hide();
$(".inventory-item.bread").hide();
$(".inventory-item.beet").hide();

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
	event.preventDefault();
	var oldHP = document.getElementById("health").value;
	var currHP = document.getElementById("health").value;
	$('#popup1').addClass('is-visible');
	$('#yes1').click(function(){
			if(!(document.getElementById("health").value>=100)){
				sessionStorage.itemCarrotUsed = true;
				$(".inventory-item.carrot").removeClass('inventory-item carrot');
				currHP = oldHP + 10;
				if((currHP-oldHP) > 10){
					document.getElementById("health").value = oldHP;
				}
				document.getElementById("health").value = currHP;
			}
			$('#popup1').removeClass('is-visible');
	});
	$('#no1').on('click', function(){
		$('#popup1').removeClass('is-visible');
		document.getElementById("health").value = currHP;
	});
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
	var oldHP2 = document.getElementById("health").value;
	var currHP2 = document.getElementById("health").value;
	$('#popup2').addClass('is-visible');
	$('#yes2').click(function(){
			if(!(document.getElementById("health").value>=100)){
				sessionStorage.itemGreenAppleUsed = true;
				$(".inventory-item.greenapple").removeClass('inventory-item greenapple');
				currHP2 = oldHP2 + 10;
				if((currHP2-oldHP2) > 10){
					document.getElementById("health").value = oldHP2;
				}
				document.getElementById("health").value = currHP2;
			}
			$('#popup2').removeClass('is-visible');
	});
	$('#no2').on('click', function(){
		$('#popup2').removeClass('is-visible');
		document.getElementById("health").value = currHP2;
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
	var oldHP3 = document.getElementById("health").value;
	var currHP3 = document.getElementById("health").value;
	$('#popup3').addClass('is-visible');
	$('#yes3').click(function(){
			if(!(document.getElementById("health").value>=100)){
				sessionStorage.itemRedAppleUsed = true;
				$(".inventory-item.redapple").removeClass('inventory-item redapple');
				currHP3 = oldHP3 + 10;
				if((currHP3-oldHP3) > 10){
					document.getElementById("health").value = oldHP3;
				}
				document.getElementById("health").value = currHP3;
			}
			$('#popup3').removeClass('is-visible');
	});
	$('#no3').on('click', function(){
		$('#popup3').removeClass('is-visible');
		document.getElementById("health").value = currHP3;
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
	var oldHP4 = document.getElementById("health").value;
	var currHP4 = document.getElementById("health").value;
	$('#popup4').addClass('is-visible');
	$('#yes4').click(function(){
			if(!(document.getElementById("health").value>=100)){
				sessionStorage.itemBreadUsed = true;
				$(".inventory-item.bread").removeClass('inventory-item bread');
				currHP4 = oldHP4 + 10;
				if((currHP4-oldHP4) > 10){
					document.getElementById("health").value = oldHP4;
				}
				document.getElementById("health").value = currHP4;
			}	
			$('#popup4').removeClass('is-visible');	
	});
	$('#no4').on('click', function(){
		$('#popup4').removeClass('is-visible');
		document.getElementById("health").value = currHP4;
	});
});
if(sessionStorage.itemBreadUsed){
	console.log("Bread Eaten");
	$(".inventory-item.bread").removeClass('inventory-item bread');	
	if(document.getElementById("health").value >= 90){
		document.getElementById("health").value = 100;
	}
	else{ document.getElementById("health").value += 10;}
}

$(".inventory-item.beet").click(function(){
	event.preventDefault();
	var oldHP5 = document.getElementById("health").value;
	var currHP5 = document.getElementById("health").value;
	$('#popup5').addClass('is-visible');
	$('#yes5').click(function(){
			if(!(document.getElementById("health").value>=100)){
				sessionStorage.itemBeetUsed = true;
				$(".inventory-item.beet").removeClass('inventory-item beet');
				currHP5 = oldHP5 + 10;
				if((currHP5-oldHP5) > 10){
					document.getElementById("health").value = oldHP5;
				}
				document.getElementById("health").value = currHP5;
			}
			$('#popup5').removeClass('is-visible');
	});
	$('#no5').on('click', function(){
		$('#popup5').removeClass('is-visible');
		document.getElementById("health").value = currHP5;
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