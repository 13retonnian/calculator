//Edited by Christopher Barber 
//Attribution to Tony Grimes' code

// Create a variable for the form
const form = document.querySelector('form');

const handleSubmit = function(event) {
  // Stop form from submitting and refreshing the page
  event.preventDefault();

  const operator = form.operations.value;

  // Assign operands
  let num1 = Number(form.first.value);
  let num2 = Number(form.second.value);
  let total = 0;

  // Calculate total
  if(operator === "add") {
    total = num1 + num2;
  }
  else if(operator === "subtract") {
    total = num1 - num2;
  }
  else if(operator === "multiply") {
    total = num1 * num2;
  }
  else if(operator === "divide") {
    total = num1 / num2;
  }
  else {
    alert("Please enter an operand")
  }

  total = total.toFixed(2);

  // Print total to page
  form.total.value = total;
  // console.log(event);
}

form.addEventListener('submit', handleSubmit);
// console.log(form);