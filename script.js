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
      
  if(checkLightPersoIsRight()){
      $('#execTimeCustom').html(execTimePerso);

      if(execTimeSystem > 0 && execTimePerso > 0){
          var ratio = Math.round(
            (execTimeSystem - execTimePerso) / execTimeSystem * 10000) / 100;
          if(ratio < 50){
              $('#progressBar').css('background-color', 'red');
          } else {
              $('#progressBar').css('background-color', 'green');
          }
          $('#progressValue').html(ratio);
          $('#progressBar').css('width', ratio+'%');
          if(ratio >= 50){
          		if(confirm("Test concluant. Lancer le test définitif?")){
              		if(checkDeepPersoIsRight()){
                  		alert("Système contourné. Clé obtenue : AHH");
                  } else {
                  		$('#execTimeCustom').html('CORRUPTION');
  										$('#progressValue').html('CORRUPTION');
                      $('#progressBar').css('background-color', 'red');
                      alert("Système corrompu, La fonction insérée dans le système ne répond pas aux paramètres.");
                  }
              }
          }
      }
  } else {
      $('#execTimeCustom').html('ERREUR');
  		$('#progressValue').html('ERREUR');
    	$('#progressBar').css('width', '0%');
    	$('#progressBar').css('background-color', 'red');
  }
};

checkLightPersoIsRight = function(){
	var isRight = false;
	if(nbSumSystemRes === nbSumPersoRes){
  		isRight = true;
  }
  return isRight;
}

checkDeepPersoIsRight = function(){
		for(var i = 5; i < 50; i++){
    		var persoRes = nbSumPerso(i, 0, i);
        var systemRes = nbSumPro(i, i);
        if(persoRes !== systemRes){
        		return false;
        }
    }
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

$('#triggerRunPerso').click(function(){
	runPerso();
});
