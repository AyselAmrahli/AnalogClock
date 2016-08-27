 var d=new Date();
   var hDeg=d.getHours();
   var mDeg=d.getMinutes();
   var msDeg=d.getSeconds();
   var sDeg=d.getUTCMilliseconds();




     
     var week=["Sun","Mon","Tue","Wed","Thur","Frid","Sat"];
     var weekDay=document.getElementsByClassName("weekDay")[0];
     weekDay.innerHTML=week[d.getDay()];




     var mon=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

     var month=document.getElementsByClassName("month")[0];
     month.innerHTML=mon[d.getMonth()];

     


   var monthDay=document.getElementsByClassName("monthDay")[0];
   monthDay.innerHTML=d.getUTCDate();





   var digClock=document.getElementsByClassName("digClock")[0];
   digClock.innerHTML=d.getHours();




  var digClockMin=document.getElementsByClassName("digClockMin")[0];
  digClockMin.innerHTML=mDeg;
     if(mDeg<10) {
      digClockMin.innerHTML="0"+mDeg;
     }









var h=document.getElementsByClassName("hours")[0];
h.style.transform = "rotateZ("+(hDeg+mDeg/60)/12*360+"deg)";





var m=document.getElementsByClassName("minutes")[0];
m.style.transform="rotateZ("+mDeg/60*360+"deg)";
     





var s=document.getElementsByClassName("seconds")[0];
s.style.transform = "rotateZ("+(msDeg+sDeg)/1000/60*360+"deg)";
    
