// static variable to keep count of dailies done
var incr = (function () {
    var i = 0;

    return function () {
        return i++;
    }
})();

// achievement string
var str = "NEW ACHIEVEMENT!";
var achievement = str.fontcolor("green");

// changes after clicking accept 
function accept1(){
    var elem = document.getElementById("accept");
    if (elem.value=="Accept") elem.value = "Click to finish!";
    $(".bye").remove(); // remove decline 
    $("#accept").click(function(){
        if (elem.value=="Click to finish!"){ 
            elem.value = "Done!";
        
            // unlock achievement
            var count = incr(); // calls incr and stores count of number of dailies done
            console.log("incr: "+ count);
            if(count == 3){ 
                $('p#info').html('Congrats,\n+50 Leg Experience points!\n +1 Bread!\n\n').wrap('<pre />');
            }
            else if(count == 2){ 
                $('p#info').html('Congrats,\n+50 Leg Experience points!\n +1 Red Apple!\n\n').wrap('<pre />');
            }
            else if(count == 1){ 
                $('p#info').html('Congrats,\n+50 Leg Experience points!\n +1 Green Apple!\n\n' + achievement).wrap('<pre />');
            }
            else if(count == 0){
                $('p#info').html('Congrats,\n+50 Leg Experience points!\n +1 Carrot!\n\n' + achievement).wrap('<pre />');
            }
            //else{$('p#info').html('Congrats, +50 \nLeg Experience points!\n +1 Red Apple').wrap('<pre />');}

            sessionStorage.accept1 = true;
           
            //click done
            $("#accept").click(function(){
                $("#panel").slideUp("slow");
                
                //toggle arrow after clicking done
                var _this = $("#togArr1");
                var current = _this.attr("src");
                var swap = _this.attr("src-swap");     
                _this.attr('src', swap).attr("src-swap",current); 
            });
        }
    });
}
if(sessionStorage.accept1){
    // unlock achievement
    var count = incr(); // count of number of dailies done
    if(count == 3){
        $('.inventory-item.bread').show(); //show food in pets
    }
    if(count == 2){
        $('.inventory-item.redapple').show();
    }
    if(count == 1){
        $('#a2').css('color','black');
        $('#bye2').remove();
        $('#icon2').attr("src", "http://lostarmour.info/media/swords.png")
        $('.inventory-item.greenapple').show();
    }
    if(count == 0){
        $('#a1').css('color','black');
        $('#bye1').remove();
        $('#icon1').attr("src", "http://blueandgoldonline.org/wp/wp-content/uploads/2013/10/Sword.png")
        $('.inventory-item.carrot').show();
    }

    $(".bye").hide(); // hide decline button
    $('p#info').text('Completed') // change <p>
    $("#accept").val("Done!"); // change input text to "Done!"

    //slide panel up
    $("#accept").click(function(){
        $("#panel").slideUp("slow");

    //toggle arrow
    var _this = $("#togArr1");
    var current = _this.attr("src");
    var swap = _this.attr("src-swap");     
    _this.attr('src', swap).attr("src-swap",current); 
    });
}



function accept2(){
    var elem2 = document.getElementById("accept2");
    if (elem2.value=="Accept") elem2.value = "Click to finish!";
    $(".bye2").remove(); // remove decline 

    $("#accept2").click(function(){
        if (elem2.value=="Click to finish!"){     
            elem2.value = "Done!";

            var count = incr();
            console.log("incr: "+ count);

            if(count == 3){ 
                $('p#info2').html('Congrats,\n+50 Leg Experience points!\n +1 Bread!\n\n').wrap('<pre />');
            }
            else if(count == 2){ 
                $('p#info2').html('Congrats,\n+50 Leg Experience points!\n +1 Red Apple!\n\n').wrap('<pre />');
            }
            else if(count == 1){ 
                $('p#info2').html('Congrats,\n+50 Leg Experience points!\n +1 Green Apple!\n\n' + achievement).wrap('<pre />');
            }
            else if(count == 0){
                $('p#info2').html('Congrats,\n+50 Leg Experience points!\n +1 Carrot!\n\n' + achievement).wrap('<pre />');
            }
            //else{$('p#info2').html('Congrats, +50 \nLeg Experience points!').wrap('<pre />');}
            
            sessionStorage.accept2 = true;
            $("#accept2").click(function(){
                $("#panel2").slideUp("slow");
                var _this = $("#togArr2");
                var current = _this.attr("src");
                var swap = _this.attr("src-swap");     
                _this.attr('src', swap).attr("src-swap",current); 
            });
        }
    });
}
if(sessionStorage.accept2){
    var count = incr();
    if(count == 3){
        $('.inventory-item.bread').show(); //show food in pets
    }
    if(count == 2){
        $('.inventory-item.redapple').show();
    }
    if(count == 1){
        $('#a2').css('color','black');
        $('#bye2').remove();
        $('#icon2').attr("src", "http://lostarmour.info/media/swords.png");
        $('.inventory-item.greenapple').show();
    }
    if(count == 0){
        $('#a1').css('color','black');
        $('#bye1').remove();
        $('#icon1').attr("src", "http://blueandgoldonline.org/wp/wp-content/uploads/2013/10/Sword.png");
        $('.inventory-item.carrot').show();
    }

    $(".bye2").hide();
    $('p#info2').text('Completed')
    $("#accept2").val("Done!");

    $("#accept2").click(function(){
        $("#panel2").slideUp("slow");
        var _this = $("#togArr2");
        var current = _this.attr("src");
        var swap = _this.attr("src-swap");     
        _this.attr('src', swap).attr("src-swap",current); 
    });
}


function accept3(){
    var elem3 = document.getElementById("accept3");
    if (elem3.value=="Accept") elem3.value = "Click to finish!";
    $(".bye3").remove(); // remove decline 
    $("#accept3").click(function(){
        if (elem3.value=="Click to finish!"){     
            elem3.value = "Done!";

            var count = incr(); // count of number of dailies done
            console.log("incr: "+ count);

            if(count == 3){ 
                $('p#info3').html('Congrats,\n+50 Leg Experience points!\n +1 Bread!\n\n').wrap('<pre />');
            }
            else if(count == 2){ 
                $('p#info3').html('Congrats,\n+50 Leg Experience points!\n +1 Red Apple!\n\n').wrap('<pre />');
            }
            else if(count == 1){ 
                $('p#info3').html('Congrats,\n+50 Leg Experience points!\n +1 Green Apple!\n\n' + achievement).wrap('<pre />');
            }
            else if(count == 0){
                $('p#info3').html('Congrats,\n+50 Leg Experience points!\n +1 Carrot!\n\n' + achievement).wrap('<pre />');
            }
            //else{$('p#info3').html('Congrats, +50 \nLeg Experience points!').wrap('<pre />');}

            sessionStorage.accept3 = true;
            $("#accept3").click(function(){
                $("#panel3").slideUp("slow");
                var _this = $("#togArr3");
                var current = _this.attr("src");
                var swap = _this.attr("src-swap");     
                _this.attr('src', swap).attr("src-swap",current);
            });
        }
    });
}
if(sessionStorage.accept3){
    var count = incr(); 
    if(count == 3){
        $('.inventory-item.bread').show(); //show food in pets
    }
    if(count == 2){
        $('.inventory-item.redapple').show();
    }
    if(count == 1){ 
        $('#a2').css('color','black');
        $('#bye2').remove();
        $('#icon2').attr("src", "http://lostarmour.info/media/swords.png");
        $('.inventory-item.greenapple').show();
    }
    if(count == 0){
        $('#a1').css('color','black');
        $('#bye1').remove();
        $('#icon1').attr("src", "http://blueandgoldonline.org/wp/wp-content/uploads/2013/10/Sword.png");
        $('.inventory-item.carrot').show();
    }

    $(".bye3").hide();
    $('p#info3').text('Completed')
    $("#accept3").val("Done!");
    $("#accept3").click(function(){
        $("#panel3").slideUp("slow");
        var _this = $("#togArr3");
        var current = _this.attr("src");
        var swap = _this.attr("src-swap");     
        _this.attr('src', swap).attr("src-swap",current);
    });
}

function accept4(){
    var elem4 = document.getElementById("accept4");
    if (elem4.value=="Accept") elem4.value = "Click to finish!";
    $(".bye4").remove(); // remove decline 
    $("#accept4").click(function(){
        if (elem4.value=="Click to finish!"){     
            elem4.value = "Done!";

            var count = incr();
            console.log("incr: "+ count);

            if(count == 3){ 
                $('p#info4').html('Congrats,\n+50 Leg Experience points!\n +1 Bread!\n\n').wrap('<pre />');
            }
            else if(count == 2){ 
                $('p#info4').html('Congrats,\n+50 Leg Experience points!\n +1 Red Apple!\n\n').wrap('<pre />');
            }
            else if(count == 1){ 
                $('p#info4').html('Congrats,\n+50 Leg Experience points!\n +1 Green Apple!\n\n' + achievement).wrap('<pre />');
            }
            else if(count == 0){
                $('p#info4').html('Congrats,\n+50 Leg Experience points!\n +1 Carrot!\n\n' + achievement).wrap('<pre />');
            }
            //else{$('p#info4').html('Congrats, +50 \nLeg Experience points!').wrap('<pre />');}

            sessionStorage.accept4 = true;
            $("#accept4").click(function(){
                $("#panel4").slideUp("slow");
                var _this = $("#togArr4");
                var current = _this.attr("src");
                var swap = _this.attr("src-swap");     
                _this.attr('src', swap).attr("src-swap",current);   
            });
        }
    });
}
if(sessionStorage.accept4){
    var count = incr();
    if(count == 3){
        $('.inventory-item.bread').show(); //show food in pets
    }
    if(count == 2){
        $('.inventory-item.redapple').show();
    }
    if(count == 1){ 
        $('#a2').css('color','black');
        $('#bye2').remove();
        $('#icon2').attr("src", "http://lostarmour.info/media/swords.png");
        $('.inventory-item.greenapple').show();
    }
    if(count == 0){
        $('#a1').css('color','black');
        $('#bye1').remove();
        $('#icon1').attr("src", "http://blueandgoldonline.org/wp/wp-content/uploads/2013/10/Sword.png");
        $('.inventory-item.carrot').show();
    }

    $(".bye4").hide();
    $('p#info4').text('Completed')
    //$('p#info4').text('Congrats, +50 Leg Experience points!')
    $("#accept4").val("Done!");

    $("#accept4").click(function(){
        $("#panel4").slideUp("slow");
        var _this = $("#togArr4");
        var current = _this.attr("src");
        var swap = _this.attr("src-swap");     
        _this.attr('src', swap).attr("src-swap",current);   
    });
}

/** slide up if press decline **/
//function decline(){ 
$(document).ready(function(){
    $(".bye").click(function(){
        $("#panel").slideUp("slow");
        //toggle arrow
        var _this = $("#togArr1");
        var current = _this.attr("src");
        var swap = _this.attr("src-swap");     
        _this.attr('src', swap).attr("src-swap",current);  
    });
    $(".bye2").click(function(){
        $("#panel2").slideUp("slow");
        var _this = $("#togArr2");
        var current = _this.attr("src");
        var swap = _this.attr("src-swap");     
        _this.attr('src', swap).attr("src-swap",current);
    });
    $(".bye3").click(function(){
        $("#panel3").slideUp("slow");
        var _this = $("#togArr3");
        var current = _this.attr("src");
        var swap = _this.attr("src-swap");     
        _this.attr('src', swap).attr("src-swap",current);
    });
    $(".bye4").click(function(){
        $("#panel4").slideUp("slow");
        var _this = $("#togArr4");
        var current = _this.attr("src");
        var swap = _this.attr("src-swap");     
        _this.attr('src', swap).attr("src-swap",current);
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

/** arrow toggle **/
$(function (){
    $("#slide").click(function() { 
        var _this = $("#togArr1");
        var current = _this.attr("src");
        var swap = _this.attr("src-swap");     
        _this.attr('src', swap).attr("src-swap",current);   
    }); 
    $("#slide2").click(function() { 
        var _this = $("#togArr2");
        var current = _this.attr("src");
        var swap = _this.attr("src-swap");     
        _this.attr('src', swap).attr("src-swap",current);   
    }); 
    $("#slide3").click(function() { 
        var _this = $("#togArr3");
        var current = _this.attr("src");
        var swap = _this.attr("src-swap");     
        _this.attr('src', swap).attr("src-swap",current);   
    }); 
    $("#slide4").click(function() { 
        var _this = $("#togArr4");
        var current = _this.attr("src");
        var swap = _this.attr("src-swap");     
        _this.attr('src', swap).attr("src-swap",current);   
    }); 
});

