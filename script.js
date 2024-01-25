const form=document.querySelector("form"),
button=form.querySelector("#btn"),
output=document.getElementById("output");
	
button.addEventListener('click',(e)=>{
  //I'll have this even objec..
  let text=document.getElementById("text").value;
  let delay=document.getElementById("delay").value;
  synchFun(text,parseInt(delay));

})

async function synchFun(text,delay) {
 await displayText(text,delay);
 output.innerText=text;
 
}

function displayText(text,delay) {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
     resolve(true); //it resolves the promise after delay.. herfe we go..
    }, delay);
  });
}