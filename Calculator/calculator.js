let display = document.querySelector(".display");
let buttons = document.querySelectorAll("button");

let output = "";

console.log(output);

// add event listeners to buttons and call calculate function on click.

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    //console.log(e.target.innerHTML);
    let input = e.target.innerHTML;

    if (input == "C") {
      output = "";
      display.value = output;
    } else if (input == "=") {
      output = eval(output);
      display.value = output;
    } else {
      output += e.target.innerHTML;
      display.value = output;
    }
  });
});
