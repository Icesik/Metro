nbSumValue = 70;
execTimeSystem = null;
execTimePerso = null;
nbSumSystemRes = null;
nbSumPersoRes = null;

runSystem = function (){
	execTimeSystem = getFunctionDuration("nbSumPro("+nbSumValue+","+nbSumValue+")", true);
	$('#execTimeSystem').html(execTimeSystem);
};

runPerso = function(){
	execTimePerso = getFunctionDuration("nbSumPerso("+nbSumValue+", 0, "+nbSumValue+")", false);
      if(execTimeSystem == null){
          runSystem();
      }
	$('#notifContainer').html('');
      
  if(d()){
      $('#execTimeCustom').html(execTimePerso);

      if(execTimeSystem > 0 && execTimePerso > 0){
	  a = new Date().getYear().toString()[1];    
          var ratio = Math.round(
            (execTimeSystem - execTimePerso) / execTimeSystem * 10000) / 100;
          if(ratio < 50){
              $('#progressBar').css('background-color', 'red');
          } else {
              $('#progressBar').css('background-color', 'green');
          }
          $('#progressValue').html(ratio);
          $('#progressBar').css('width', ratio+'%');
	  setTimeout(function(){
		  if(ratio >= 50){
			  a+=new Date().getYear().toString()[2];
				if(confirm(atob("VGVzdCBjb25jbHVhbnQuIExhbmNlciBsZSB0ZXN0IGRlZmluaXRpZj8="))){
					a=a*3+a*1-3;
				if(b()){
					a+=a[1];
					alert(atob('U3lzdGVtZSBjb250b3VybmUuIENsZSBvYnRlbnVlIDog')+a);
			  } else {

					$('#execTimeCustom').html('CORRUPTION');
											$('#progressValue').html('CORRUPTION');
			      $('#progressBar').css('background-color', 'red');
			      alert("");
			  }
		      }
		  }
	  }, 10);
      } else {
		$('#notifContainer').html(atob('U3lzdGVtZSBjb3Jyb21wdSwgTGEgZm9uY3Rpb24gaW5zZXJlZSBkYW5zIGxlIHN5c3RlbWUgbmUgcmVwb25kIHBhcyBhdXggcGFyYW1ldHJlcy4='));
	  }
  } else {
	  $('#notifContainer').html(atob('TGEgZm9uY3Rpb24gaW5qZWN0ZWUgbmUgcmVudm9pZSBwYXMgbGUgcmVzdWx0YXQgYXR0ZW5kdS4='));
      $('#execTimeCustom').html('ERREUR');
  		$('#progressValue').html('ERREUR');
    	$('#progressBar').css('width', '0%');
    	$('#progressBar').css('background-color', 'red');
  }
};

d = function(){
	var isRight = false;
	if(nbSumSystemRes === nbSumPersoRes){
  		isRight = true;
  }
  return isRight;
}

a = function(){
	a = new Date();	
}

b = function(){
	a+=''+(a+new Date().getYear().toString()[2]*1);
		for(var i = 5; i < 50; i++){
    		var persoRes = nbSumPerso(i, 0, i);
        var systemRes = nbSumPro(i, i);
        if(persoRes !== systemRes){
        		return false;
        }
    }
	a=String.fromCharCode(a[0]+a[1])+String.fromCharCode(a[2]+a[3]);
    return true;
}

nbSumPro = function(nb, max){
	var res = 0, i = 0;

  switch (nb){
    case 0 : 
    	res = 1;
      break;
    case 1 : 
    	res = 1;
      break;
    default :
      for (i=nb; i>0; i--){
        if (i<=max){
          res = res + nbSumPro(nb-i, i);
        }
      }
  }
  return res;
};

getFunctionDuration = function(jsOperations, isSystem){
	var timeStart = new Date().getTime();
    var res = eval(jsOperations);
    if(isSystem){
    	nbSumSystemRes = res;
    } else {
    	nbSumPersoRes = res;
    }
    var time = new Date().getTime() - timeStart;
    return time;
};

$('body').on('click', '#triggerRunPerso', function(){
	runPerso();
});
