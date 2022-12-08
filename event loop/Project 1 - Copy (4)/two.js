function first() {
  console.log(1);
}
function second(callback) {
  console.log(2), callback();
}
function three() {
  console.log(3);
}
first(), second(three);
