// define three function
function first() {
  console.log(1);
}

// when you call a function that is apssed as an argument is referred as a callbacck
function second(callback) {
  setTimeout(() => {
    console.log(2);

    // execute the callbacj function
    callback();
  }, 1000);
}

function third() {
  console.log(3);
}

first();
second(third);
