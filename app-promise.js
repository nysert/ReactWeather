// "http://api.openweathermap.org/data/2.5/find?q=London&units=imperial&appid=88e4f2e4534bf81c0c58b01af01cab29"

// function getTempPromise() {
//   return new Promise(function(resolve, reject) {
//     reject("error found");
//     resolve(80);
//   });
// }

// getTempPromise("Monterrey").then(
//   function(temp) {
//     console.log("the temp is = ", temp);
//   },
//   function(error) {
//     console.log("error found", error);
//   }
// );


function addPromise(a, b) {
  return(new Promise(function(resolve, reject) {
    if (typeof a == "number" && typeof b == "number") {
      resolve(a+b);
    } else {
      reject("we require numbers");
    }
  }))
}

addPromise(1,2).then(
  function(sum) {
    console.log("sum is ", sum);
  },
  function(error) {
    console.log("error, ", error);
  }
);


addPromise("1",2).then(
  function(sum) {
    console.log("sum is ", sum);
  },
  function(error) {
    console.log("error, ", error);
  }
);


addPromise(1,"2").then(
  function(sum) {
    console.log("sum is ", sum);
  },
  function(error) {
    console.log("error, ", error);
  }
);

addPromise(10,20).then(
  function(sum) {
    console.log("sum is ", sum);
  },
  function(error) {
    console.log("error, ", error);
  }
);