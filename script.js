runSystem = function (){
	var execTimeSystem = getFunctionDuration("nbSumPro(70,70)");
	$('#execTimeSystem').html(execTimeSystem);
};

runPerso = function(){
	var execTimeCustom = getFunctionDuration("nbSumPerso(70, 0, 70)");
	$('#execTimeCustom').html(execTimeCustom);
  
  var execTimeSystem = $('#execTimeSystem').html();
  if(execTimeSystem == "" || execTimeSystem == null || execTimeSystem == "undefined"  		|| execTimeSystem == "-"){
  		runSystem();
  		execTimeSystem = $('#execTimeSystem').html();
  }
  if(execTimeSystem > 0 && execTimeCustom > 0){
  		var ratio = Math.round(
      	(execTimeSystem - execTimeCustom) / execTimeSystem * 10000) / 100;
      if(ratio < 50){
      		$('#progressBar').css('background-color', 'red');
      } else {
      		$('#progressBar').css('background-color', 'green');
      }
      $('#progressValue').html(ratio);
      $('#progressBar').css('width', ratio+'%');
  }
};

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

getFunctionDuration = function(jsOperations){
		var timeStart = new Date().getTime();
    console.log(eval(jsOperations));
    var time = new Date().getTime() - timeStart;
    return time;
};
