var count = 0;

    function done1(){
        count = 1;
        $('#a1').css('color','green');
        $('#bye1').remove();
        sessionStorage.done1 = true;
    }
 
    if (sessionStorage.done1) {
      $('#a1').css('color','green');
      count = 1;
      $('#bye1').hide();
     // $('.button1').hide();
    }


    function done2(){
    	if(count == 1){
          count = 2;
        	$('#a2').css('color','green');
        	$('#bye2').remove();
            sessionStorage.done2 = true;
    	}
    	else {
    		return;}
    }
    if (sessionStorage.done2) {
      $('#a2').css('color','green');
      count = 2
      $('#bye2').hide();
    }

    function done3(){
        if(count > 2 || count == 2){
            $('#a3').css('color','green');
            $('#bye3').remove();
            sessionStorage.done3 = true;
        }
        else {
            return;}
    }
    if (sessionStorage.done3) {
      $('#a3').css('color','green');
      $('#bye3').hide();

    }


