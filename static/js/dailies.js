
// change text after clicking accept 
function accept1(){
    var elem = document.getElementById("accept");
    if (elem.value=="Accept") elem.value = "Click to finish!";
    $(".bye").remove(); // remove decline 
     // click finish will change the info of <p>
    $("#accept").click(function(){
        $('p#info').text('Congrats, +50 Leg Experience points!')
        if (elem.value=="Click to finish!"){ 
            elem.value = "Done!";
            sessionStorage.accept1 = true;
            $("#accept").click(function(){
                $("#panel").slideUp("slow");
            });
        }
    });
}
if(sessionStorage.accept1){
    //$('#a1').css('color','green');
    $(".bye").hide();
    var elem = document.getElementById("accept");
    $('p#info').text('Congrats, +50 Leg Experience points!')
    elem.value = "Done!";
    $("#accept").click(function(){
        $("#panel").slideUp("slow");
    });
}



function accept2(){
    var elem2 = document.getElementById("accept2");
    if (elem2.value=="Accept") elem2.value = "Click to finish!";
    $(".bye2").remove(); // remove decline 

     // click finish will change the info of <p>
    $("#accept2").click(function(){
        $('p#info2').text('Congrats, +50 Leg Experience points!')
        if (elem2.value=="Click to finish!"){     
            elem2.value = "Done!";
            sessionStorage.accept2 = true;
            $("#accept2").click(function(){
                $("#panel2").slideUp("slow");
            });
        }
    });
}
if(sessionStorage.accept2){
    $(".bye2").hide();
    var elem2 = document.getElementById("accept2");
    $('p#info2').text('Congrats, +50 Leg Experience points!')
    elem2.value = "Done!";
    $("#accept2").click(function(){
        $("#panel2").slideUp("slow");
    });
}


function accept3(){
    var elem3 = document.getElementById("accept3");
    if (elem3.value=="Accept") elem3.value = "Click to finish!";
    $(".bye3").remove(); // remove decline 

     // click finish will change the info of <p>
    $("#accept3").click(function(){
        $('p#info3').text('Congrats, +50 Leg Experience points!')
        if (elem3.value=="Click to finish!"){     
            elem3.value = "Done!";
            sessionStorage.accept3 = true;
            $("#accept3").click(function(){
                $("#panel3").slideUp("slow");
            });
        }
    });
}
if(sessionStorage.accept3){
    $(".bye3").hide();
    var elem3 = document.getElementById("accept3");
    $('p#info3').text('Congrats, +50 Leg Experience points!')
    elem3.value = "Done!";
    $("#accept3").click(function(){
        $("#panel3").slideUp("slow");
    });
}

function accept4(){
    var elem4 = document.getElementById("accept4");
    if (elem4.value=="Accept") elem4.value = "Click to finish!";
    $(".bye4").remove(); // remove decline 

     // click finish will change the info of <p>
    $("#accept4").click(function(){
        $('p#info4').text('Congrats, +50 Leg Experience points!')
        if (elem4.value=="Click to finish!"){     
            elem4.value = "Done!";
            sessionStorage.accept4 = true;
            $("#accept4").click(function(){
                $("#panel4").slideUp("slow");
            });
        }
    });
}
if(sessionStorage.accept4){
    $(".bye4").hide();
    var elem4 = document.getElementById("accept4");
    $('p#info4').text('Congrats, +50 Leg Experience points!')
    elem4.value = "Done!";
    $("#accept4").click(function(){
        $("#panel4").slideUp("slow");
    });
}

/** slide up if press decline **/
//function decline(){ 
$(document).ready(function(){

    $(".bye").click(function(){

        $("#panel").slideUp("slow");
    });
    $(".bye2").click(function(){
        $("#panel2").slideUp("slow");
    });
    $(".bye3").click(function(){
        $("#panel3").slideUp("slow");
    });
    $(".bye4").click(function(){
        $("#panel4").slideUp("slow");
    });
});

/** slide toggle **/
$(document).ready(function(){
    $("#slide").click(function(){
        $("#panel").slideToggle("slow");
    });
    $("#slide2").click(function(){
        $("#panel2").slideToggle("slow");
    });
    $("#slide3").click(function(){
        $("#panel3").slideToggle("slow");
    });
    $("#slide4").click(function(){
        $("#panel4").slideToggle("slow");
    });
});
