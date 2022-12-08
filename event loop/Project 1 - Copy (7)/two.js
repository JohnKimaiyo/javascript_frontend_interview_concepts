// defien three functions
function first() {
  console.log(1);
}

//when you call a function that is apsed as an argument is referred to as a callback

function second(callback) {
  setTimeout(() => {
    console.log(2);
    // execute the callback
    callback();
  }, 1000);
}

function third() {
  console.log(3);
}

first();
second(third);
