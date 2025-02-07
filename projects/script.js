// Utility function to highlight negative results
function highlightIfNegative(value) {
  const output = document.getElementById("output");
  if (value < 0) {
    // Example: red text
    output.style.color = "red";
  } else {
    // back to normal color
    output.style.color = "black";
  }
}

function myPow() {
  let first = Number(document.getElementById("first").value);
  let second = Number(document.getElementById("second").value);

  let startNumber = 1;
  for (let i = 0; i < second; i++) {
    startNumber = startNumber * first;
  }

  // Use quotes/backticks around <h3>...
  document.getElementById("output").innerHTML = `<h3>${startNumber}</h3>`;
  highlightIfNegative(startNumber);
}

function addition() {
  let first = Number(document.getElementById("first").value);
  let second = Number(document.getElementById("second").value);

  let result = first + second;

  document.getElementById("output").innerHTML = `<h3>${result}</h3>`;
  highlightIfNegative(result);
}

function subtraction() {
  let first = Number(document.getElementById("first").value);
  let second = Number(document.getElementById("second").value);

  let result = first - second;

  document.getElementById("output").innerHTML = `<h3>${result}</h3>`;
  highlightIfNegative(result);
}

function multiplication() {
  let first = Number(document.getElementById("first").value);
  let second = Number(document.getElementById("second").value);

  let result = first * second;

  document.getElementById("output").innerHTML = `<h3>${result}</h3>`;
  highlightIfNegative(result);
}

function division() {
  let first = Number(document.getElementById("first").value);
  let second = Number(document.getElementById("second").value);

  // watch for dividing by zero if you want
  let result = second === 0 ? "∞ (Cannot divide by zero)" : first / second;

  document.getElementById("output").innerHTML = `<h3>${result}</h3>`;
  // If result is not a number (like the "∞ ..." string), skip highlight. 
  if (!isNaN(result)) {
    highlightIfNegative(result);
  } else {
    document.getElementById("output").style.color = "black";
  }
}

function clearing() {
  document.getElementById("first").value = "";
  document.getElementById("second").value = "";
  document.getElementById("output").innerHTML = "";
  document.getElementById("output").style.color = "black";
}
