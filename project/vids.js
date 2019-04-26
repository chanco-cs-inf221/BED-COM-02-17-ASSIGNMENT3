//this will help the use play the vide
function doPlay(){
    barSize=600;
    myVideo=document.querySelector('#myVideo');
    playbutton=document.querySelector('#playbutton');
    mydefaultsbar=document.querySelector('#mydefaultsbar');
    progressbar=document.querySelector('#progressbar');

     playbutton.addEventListener('click',playOrPause,false);
     mydefaultsbar.addEventListener('click',clickedbar,false);

}
//playing and pausing the video
function playOrPause(){
if(!myVideo.paused && !myVideo.ended){
myVideo.pause();
playbutton.innerHTML='Play';
window.clearInterval(updateBar);

}
else{
myVideo.play();
playbutton.innerHTML='Pause';
updateBar=setInterval(update,500);
}
}
function update(){
if(!myVideo.ended){
var size=parseInt(myVideo.currentTime*barSize/myVideo.duration);
progressbar.style.width=size+'px';
}
else{
progressbar.style.width='0px';
playbutton.innerHTML='Play';
window.clearInterval(updateBar);
}
}
function clickedbar(e){
 if(!myVideo.paused && !myVideo.ended){
var mouseC=e.pagec-mydefaultsbar.offsetLeft;
var newTime=mouseC*myVideo.duration/barSize;
myVideo.currentTime=newTime;
progressbar.style.width=mouseC+'px';
}
}
window.addEventListener('load',doPlay,false);
//working with the download button
   const thisfunction=()=>{
       var text;
       var myprompt=prompt("Please click on any ads and copy the url to start the download button to start downloading","");
       if(myprompt==null ||myprompt==""){
           text="User cancelled the prompt.";
       }
       else if(myprompt.includes("https://")==false){
           text="this is not videos url";
       }
       else{
           window.location="http://drive.google.com/open?id=123456789myvideo ";
           text="download started";
       }
       document.getElementById("myVideo").innerHTML=text;
   }
  
