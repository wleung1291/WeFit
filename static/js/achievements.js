var count = 0;

    function done1(){
        count = 1;
        $('#a1').css('color','green');
        $('#bye1').remove();
        var img1 = document.getElementById("icon1");
        img1.src="http://blueandgoldonline.org/wp/wp-content/uploads/2013/10/Sword.png";
        sessionStorage.done1 = true;
    }
    if (sessionStorage.done1) {
      $('#a1').css('color','green');
      var img1 = document.getElementById("icon");
      img1.src="http://blueandgoldonline.org/wp/wp-content/uploads/2013/10/Sword.png";
      count = 1;
      $('#bye1').hide();
      
     // $('.button1').hide();
    }


    function done2(){
    	if(count == 1){
          count = 2;
        	$('#a2').css('color','green');
        	$('#bye2').remove();
          var img2 = document.getElementById("icon2");
          img2.src="http://lostarmour.info/media/swords.png";
          sessionStorage.done2 = true;
    	}
    	else {
    		return;}
    }
    if (sessionStorage.done2) {
      $('#a2').css('color','green');
      var img2 = document.getElementById("icon2");
      img2.src="http://lostarmour.info/media/swords.png";
      count = 2
      $('#bye2').hide();

    }

    function done3(){
        if(count > 2 || count == 2){
            $('#a3').css('color','green');
            $('#bye3').remove();
            var img3 = document.getElementById("icon3");
            img3.src="https://voxxeddays.com/belgrade15/wp-content/uploads/sites/8/2015/05/b-2days.png";
            sessionStorage.done3 = true;
        }
        else {
            return;}
    }
    if (sessionStorage.done3) {
      $('#a3').css('color','green');
      var img3= document.getElementById("icon3");
      img3.src="https://voxxeddays.com/belgrade15/wp-content/uploads/sites/8/2015/05/b-2days.png";
      $('#bye3').hide();
      
    }


