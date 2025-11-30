const input=document.querySelector("input");
const buttons=document.querySelectorAll("button");
// const equalbutton=document.querySelector(".equal")

for (const button of buttons) {
    button.addEventListener('click',(e)=>{
        if(input.value==="0"){
            input.value=e.target.value;
        }else{
        if(e.target.value==="="){
            try{
                input.value=eval(input.value);
            }catch{
                input.value="Chutiya Ho Ka";
            }
        }else if(e.target.value==="ac"){
            input.value="0";
        } else if(e.target.value=="del"){
            input.value=input.value.slice(0,-1);
        }else {
            input.value+=e.target.value;
        }
    }
    })
}