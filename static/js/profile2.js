'use strict';
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();
    var clicked = false;
    var firstTime = true;
    console.log("firstTime: " + firstTime);
    $("#slide").click(function(){
        $("#panel").slideToggle("slow");
        clicked = true;
        exerciseiconclicked(clicked, firstTime);
        firstTime = false;
    });
    $("#slide2").click(function(){
        $("#panel2").slideToggle("slow");
        clicked = true;
        exerciseiconclicked(clicked, firstTime);
        firstTime = false;
    });
    $("#slide3").click(function(){
        $("#panel3").slideToggle("slow");
        clicked = true;
        exerciseiconclicked(clicked, firstTime);
        firstTime = false;
    });
    $("#slide4").click(function(){
        $("#panel4").slideToggle("slow");
        clicked = true;
        exerciseiconclicked(clicked, firstTime);
        firstTime = false;
    });
    $("#slide5").click(function(){
        $("#panel5").slideToggle("slow");
        clicked = true;
        exerciseiconclicked(clicked, firstTime);
        firstTime = false;
    });
    $("#slide6").click(function(){
        $("#panel6").slideToggle("slow");
        clicked = true;
        exerciseiconclicked(clicked, firstTime);
        firstTime = false;
    });
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    if(sessionStorage.itemCarrotUsed){
        console.log("Carrot Eaten");
        $(".inventory-item.carrot").removeClass('inventory-item carrot');   
        if(document.getElementById("health").value >= 90){
            document.getElementById("health").value = 100;
        }
        else{ document.getElementById("health").value += 10;}
    }

    if(sessionStorage.itemGreenAppleUsed){
        console.log("Green Apple Eaten");
        $(".inventory-item.greenapple").removeClass('inventory-item greenapple');   
        if(document.getElementById("health").value >= 90){
            document.getElementById("health").value = 100;
        }
        else{ document.getElementById("health").value += 10;}
    }

    if(sessionStorage.itemRedAppleUsed){
        console.log("Red Apple Eaten");
        $(".inventory-item.redapple").removeClass('inventory-item redapple');   
        if(document.getElementById("health").value >= 90){
            document.getElementById("health").value = 100;
        }
        else{ document.getElementById("health").value += 10;}
    }

    if(sessionStorage.itemBreadUsed){
        console.log("Bread Eaten");
        $(".inventory-item.bread").removeClass('inventory-item bread'); 
        if(document.getElementById("health").value >= 90){
            document.getElementById("health").value = 100;
        }
        else{ document.getElementById("health").value += 10;}
    }

    if(sessionStorage.itemBeetUsed){
        console.log("Beet Eaten");
        $(".inventory-item.beet").removeClass('inventory-item beet');
        if(document.getElementById("health").value >= 90){
            document.getElementById("health").value = 100;
        }
        else{ document.getElementById("health").value += 10;}
    }
}

function exerciseiconclicked(clicked, firstTime) {
    if (clicked == true && firstTime == true){
        ga('send','event','exercise','click');
        firstTime = false;
        console.log("clicked on this shit");
    }
}