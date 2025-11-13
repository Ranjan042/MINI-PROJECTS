
const bulbImage=document.querySelector(".bulbImage");
const btn=document.querySelector(".btn");
var off=true;
btn.addEventListener("click",()=>{
  console.log("Working");
  if(off){
    console.log("Off->on");
    btn.src="images/toggle-right (1).png";
    bulbImage.src="images/light-bulb-alt (2).png";
    bulbImage.style.filter = "drop-shadow(0 0 15px yellow)"; // glowing yellow
  }else{
    console.log("On->off");
    btn.src="images/toggle-right.png";
    bulbImage.src="images/light-bulb-alt.png";
  }
  off=!off;
})
