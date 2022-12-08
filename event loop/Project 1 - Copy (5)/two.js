//define three functions
function first() {
  console.log(1);
}

// when you call a function that is passed as an argument is referred as a callback function

function second(callback) {
  setTimeout(() => {
    console.log(2);
    // execute the callback function
    callback();
  }, 2000);
}

function third() {
  console.log(3);
}

first();
second(third);
