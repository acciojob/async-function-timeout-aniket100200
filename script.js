//your JS code here. If required.
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
 
}

function displayText(text,delay) {
  setTimeout(() => {
    output.innerText=text;
  }, delay);
}