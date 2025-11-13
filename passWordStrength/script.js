const eye=document.querySelector("#eye");
const input=document.querySelector("input");
const pass=document.querySelector('input');
const status=document.querySelector(".status")
const message=document.querySelector(".message")

input.addEventListener("input", (e) => {
    e.preventDefault();
    let score = 0;
  const password = pass.value;

  
  let hasUpper = /[A-Z]/.test(password);
  let hasLower = /[a-z]/.test(password);
  let hasNumber = /[0-9]/.test(password);
  let hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  let isLong = password.length >= 8;

  document.querySelector(".upper").style.color = hasUpper ? "green" : "black";
  document.querySelector(".lower").style.color = hasLower ? "green" : "black";
  document.querySelector(".number").style.color = hasNumber ? "green" : "black";
  document.querySelector(".symbol").style.color = hasSymbol ? "green" : "black";
  document.querySelector(".len").style.color = isLong ? "green" : "black";

  if (hasUpper){
      score++;
  }
  if (hasLower){
    score++;
  }

  if (hasNumber) {
    score++;
  }
  if (hasSymbol){
      score++;
    } 
  if (isLong){
      score++;
  }

  getStrength(score);
});

function getStrength(score) {
    console.log(score)
    if(score==1){
         status.style.width="20%";
         status.style.border="2px solid rgb(200, 0, 0)";
         message.innerText="Very Weak";
         message.style.color="rgb(200, 0, 0)";
    }
    if(score==2){
         status.style.width="40%";
         status.style.border="2px solid rgb(255, 0, 0)";
         message.innerText="Weak";
         message.style.color=" rgb(255, 0, 0)";
    }
    if(score==3){
        status.style.width="60%";
        status.style.border="2px solid rgba(236, 106, 31, 1)";
        message.innerText="Medium";
        message.style.color="rgba(236, 106, 31, 1)";
    }
    if(score==4){
        status.style.width="80%";
        status.style.border="2px solid rgba(177, 235, 43, 1)";
        message.innerText="Strong";
        message.style.color="rgba(177, 235, 43, 1)";
    }
    if(score==5){
         status.style.width="100%";
         status.style.border="2px solid rgba(4, 85, 19, 1)";
         message.innerText="Very Strong";
         message.style.color="rgba(4, 85, 19, 1)";r
    }
 }    

eye.addEventListener('click',()=>{
    if(input.type==='text'){
     eye.classList.replace('bx-eye','bx-eye-closed');   
     input.type="password";
    }else if(input.type==='password'){
    eye.classList.replace('bx-eye-closed','bx-eye'); 
        input.type="text";
    }
})
