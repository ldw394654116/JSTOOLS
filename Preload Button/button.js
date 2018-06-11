var div = document.getElementById("div");
var progress = document.getElementById("progress");
var SIL;
var SUM = 0;

div.addEventListener("mouseover",function(){
      
  SIL = setInterval(function(){    
    SUM !== 100 ? SUM += 1 : SUM = 0;    
    div.innerHTML = "PreLoading..." + SUM + "%";
    progress.value =  SUM;
  },10);
  
});

div.addEventListener("mouseout",function(){
  div.innerHTML = "INFO BETA";
  SUM = 0;
  progress.value =  SUM;
  clearInterval(SIL);
});