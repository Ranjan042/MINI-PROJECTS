const baseUrl=`https://v6.exchangerate-api.com/v6/6cee06f4ba5285584f56e94a/latest`
const selects=document.querySelectorAll("select");
const button=document.querySelector('button');
const currFrom=document.querySelector(".from select");
const currTo=document.querySelector(".to select");
const msg=document.querySelector(".message ")
for (const select of selects) {
  for (const currCode in countryList) {
    let option=document.createElement('option');
    option.value=currCode;
    option.text=currCode;
    select.append(option);
  }
  if(select.name==='from') select.value="USD";
  if(select.name==='to') select.value="INR";

  select.addEventListener('change',(e)=>{
    getFalg(e.target);
  })
}

function getFalg(element){
   let currCode=element.value;
   let countryCode=countryList[currCode];
   let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`
   let img=element.parentElement.querySelector('img');
   img.src=newSrc;
}

button.addEventListener('click',async ()=>{
  let amount=document.querySelector('input').value;
  if(amount==="" || amount<1){
    document.querySelector('input').value="1";
  }


  const url=`https://v6.exchangerate-api.com/v6/6cee06f4ba5285584f56e94a/latest/${currFrom.value}`
  let response=await fetch(url);
  let data= await response.json();
  let rate=data.conversion_rates[currTo.value];
  const finalAmount=(amount*rate).toFixed(2);
  msg.innerHTML=`${amount} ${currFrom.value} = ${finalAmount} ${currTo.value}`;
})