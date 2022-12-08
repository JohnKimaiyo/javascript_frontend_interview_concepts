// define three functions
function first() {
  console.log(1);
}

// when you call a f unction that is passed as an argument itis referred to as a callback function

function second(callback) {
  setTimeout(() => {
    console.log(2);
    // exicute the call back function
  }, 1000);
}

function third() {
  console.log(3);
}

first();
second(third);
