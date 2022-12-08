//define three function
function first() {
  console.log(1);
}
//when you call a function that is passed as a argument ,it is referred to as a callback

function second(callback) {
  setTimeout(() => {
    console.log(2);

    // execute the callback function
    callback();
  }, 1000);
}

function third() {
  console.log(3);
}

first();
second(third);
