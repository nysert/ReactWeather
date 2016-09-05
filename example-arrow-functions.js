// var names = ["Luis", "Angel", "Ponce", "Salazar", "=("]

// names.forEach(function(name) {
//   console.log("my only friend", name);
// });

// names.forEach((name) => {
//   console.log("sad", name);
// });

// names.forEach( (name) => console.log(name) );

// var returnMe = (name) => name + "!";
// console.log(returnMe("Luis"));

// var person = {
//   name: "Luis",
//   greeter: function() {
//     names.forEach( (name) => {
//       console.log(this.name + " says hi to me .-. " + name);
//     } );
//   }
// }

// person.greeter();

function add(a, b) {
  return a + b;
}

var add1 = (a, b) => {
  return a + b;
}

var add2 = (a, b) => a + b;

console.log(add(25,98));
console.log(add1(25,98));
console.log(add2(25,98));