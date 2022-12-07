function multiply(x, y) {
  return x * y;
}

function squared(n) {
  return multiply(n, n);
}

function printSquare(n) {
  return squared(n);
}

let numberSquared = printSquare(5);
console.log(numberSquared);
