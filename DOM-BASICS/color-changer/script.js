document.querySelector(".box").addEventListener("click",()=>{
    console.log("Eorking\n")
    var randColor=getRandomColor();
    console.log(randColor);
    document.body.style.backgroundColor=randColor;
})

function getRandomColor() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

console.log(getRandomColor());
