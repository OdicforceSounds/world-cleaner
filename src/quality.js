let input = document.querySelector("input");
let log = document.getElementById("log");

input.onchange = handleChange;

function handleChange(e) {
  log.textContent = `The field value is ${e.target.value.length}  characters long`;
  if (log.tentContent === input) {
    console.log("passwd is equal");
  } else if (log.textContent !== input) {
    console.log("passwd is not equal");
  }
}
