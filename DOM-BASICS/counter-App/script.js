const button=document.querySelector(".btn");
const countBox=document.querySelector(".count");
let count=0;
button.addEventListener('click',countF);

function countF(){
count++;
countBox.innerHTML=count
}