function calc(a, b, op) {
  switch (op) {
    case "+":
      return a + b;

    case "-":
      return a - b;

    case "*":
      return a * b;

    case "/":
      return b != 0 ? a / b : "Cannot divide bu zero";

    default:
      break;
  }
}

console.log(calc(7, 8, "+"));
console.log(calc(2, 3, "-"));
console.log(calc(20, 5, "/"));
console.log(calc(6, 2, "*"));
console.log(calc(6, 0, "/"));
