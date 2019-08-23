var canvas = document.getElementById("canvas_area");
var timestamp = document.getElementById("current_date").innerHTML;
var alarm_time = document.getElementById("alarm_time");
var audio = document.getElementById("audio");
var ctx = canvas.getContext("2d");
var r = canvas.height/2;
ctx.translate(r,r);
setInterval(clock, 1000);
setInterval(start_alarm, 1000);


function show_time(){
  var now = new Date();
  var h = now.getHours();
  var m = now.getMinutes();
  var s = now.getSeconds();
  var session = "AM";
  if(h == 0){
    h = 12;
  }
  if(h > 12){
    h = h - 12;
    session = "PM";
  }
  var time = h +":"+m+":"+s+" "+ session;
  document.getElementById("current_date").innerHTML = time;
  document.getElementById("current_date1").innerHTML = time;

  //clock
  //hour
  h=h%12;
  h=(h*Math.PI/6)+
  (m*Math.PI/(6*60))+
  (s*Math.PI/(360*60));
  hands(ctx, h, r*0.5, r*0.07);
  //minute
  m=(m*Math.PI/30)+(s*Math.PI/(30*60));
  hands(ctx, m, r*0.8, r*0.07);
  //second
  s=(s*Math.PI/30);
  hands(ctx, s, r*0.9, r*0.02);
}

function hands(ctx,pos,len,wid){
  ctx.beginPath();
  ctx.lineWidth = wid;
  ctx.lineCap = "round";
  ctx.moveTo(0,0);
  ctx.rotate(pos);
  ctx.lineTo(0, -len);
  ctx.stroke();
  ctx.rotate(-pos);
}
function clock(){
  var ang;
  var num;

// outer circle
  ctx.beginPath();
  ctx.arc(0,0,r*.9,0,2 * Math.PI);
  
  ctx.fillStyle="#9445df";
  ctx.fill();
// inner circle
  ctx.beginPath();
  ctx.arc(0, 0, r * 0.1, 0, 2 * Math.PI);
  ctx.fillStyle = "white";
  ctx.fill();

  ctx.font = r * 0.15 + "px arial";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  for(num = 1 ; num<13;num++){
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -r * 0.8);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, r * 0.8);
    ctx.rotate(-ang);
    }
    show_time();
}


function start_alarm(){

     if(document.getElementById("current_date").innerHTML == alarm_time.value){
      document.getElementById('alarm_img').style.visibility = "visible";
      audio.play()
    }
     else{
      setTimeout(function(){
        if(document.getElementById("current_date").innerHTML == alarm_time.value){
          document.getElementById('alarm_img').style.visibility = "visible";
          audio.play()
        } 
      }, 100);
     }
}

function msg(){
  document.getElementById("mesg").style.visibility = "visible";
}

function stop_alarm(){ 
  audio.pause();   
  document.getElementById('alarm_img').style.visibility = "hidden";
  document.getElementById("mesg").style.visibility = "hidden";
      
}





// document.onkeydown = function(event) {
//     switch (event.keyCode) {
//        case 37:
//             alert('Left key pressed');
//           break;
//        case 38:
//             alert('Up key pressed');
//           break;
//        case 39:
//             alert('Right key pressed');
//           break;
//        case 40:
//             alert('Down key pressed');
//           break;
//     }
// };








// ctx.fillStyle ="red";
// ctx.fillRect(0,0,150,150)


// var grd = ctx.createLinearGradient(0, 0, 200, 0);
// grd.addColorStop(0, "green");
// grd.addColorStop(1, "white");

// ctx.moveTo(0,5);
// ctx.lineTo(100,100)
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(95,50,40,0,2 * Math.PI);
// ctx.stroke();


