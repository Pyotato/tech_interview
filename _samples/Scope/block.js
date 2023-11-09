let foo = "I'm foo";
if (true) {
  let bar = "I'm bar";
  console.log('block level foo',foo); //I'm foo
  console.log(bar); //I'm bar
}

console.log(foo); //I'm foo
// console.log(bar); //Uncaught ReferenceError: bar is not defined.
