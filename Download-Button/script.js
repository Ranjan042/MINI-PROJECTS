const button=document.querySelector("button");
const box=document.querySelector(".box");
const icon=document.querySelector(".box i");

button.addEventListener('click',fmyfunction=()=>{
    box.style.visibility="visible";
    button.innerText="Download started";
    button.disabled=true;
    // button.style.opacity="0.5";
    button.removeEventListener('click',fmyfunction);
    var ang=5;
    icon.style.animationPlayState="running";
   const interval=setInterval(()=>{
    ang+=Math.floor(Math.random()*36);
        document.documentElement.style.setProperty('--to',ang+"deg");
        if(ang>=360){
            clearInterval(interval);
             icon.style.animationPlayState="paused";
             document.documentElement.style.setProperty('--color',"green");
            box.innerHTML="<i class='bxr  bx-check' style='color:#ffffff'></i> ";
            button.innerText="Download Completed";
            button.style.backgroundColor="rgb(155, 228, 155)";

        }
   },500+Math.floor(Math.random()*100))
})

