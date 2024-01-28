// Selecting elements from the DOM
const textInput = document.getElementById('text');
const delayInput = document.getElementById('delay');
const outputDiv = document.getElementById('output');
const submitBtn = document.getElementById('btn');

// Asynchronous function to wait for a specified time
async function delayMessage(message, delay) {
  // Using Promise to wait for the specified time
  await new Promise(resolve => setTimeout(resolve, delay));
  return message;
}

// Event listener for button click
submitBtn.addEventListener('click', async () => {
  const message = textInput.value; // Get the message from the text input
  const delay = parseInt(delayInput.value); // Get the delay from the number input
  if (isNaN(delay) || delay < 0) {
    alert('Please enter a valid delay');
    return;
  }

  // Call the asynchronous function with the provided message and delay
  const result = await delayMessage(message, delay);

  // Display the message on the webpage
  outputDiv.textContent = result;
});
