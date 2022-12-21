//? *********** EXPONENTS ************

let number = +prompt("Enter the number to be exponentiated:");
let power = +prompt("Enter the power of the number:");
let result = 1;

for (i = 1; i <= power; i++) {
  result = result * number;
}

alert(`${number} to the ${power}th power is: ${result}`);

//? ********** by muratozkan **********
