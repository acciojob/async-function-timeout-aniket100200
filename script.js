let form = document.querySelector("form");
let outputDiv = document.getElementById("output");

form.addEventListener('submit', (event) => {
  let text = event.target.text.value;
  let delay = event.target.delay.value;
  //we have the Mannat
  displayText(text, delay);
})

async function displayText(text, delay) {
  try {
    let promise = await getPromise(text,delay);
   outputDiv.innerText=promise;
  }
  catch (err) {
    console.log(err);
  }
}

function getPromise(text,delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, delay);
  });
}
