// var -> global || function scope only
if (Math.random() > 0.5) {
  var x = 1;
} else {
  var x = 2;
}
console.log(x); // error free x is global

// const & let keywords -> block scoping available
if (Math.random() > 0.5) {
  let x = "let";
} else {
  const x = "const";
}
console.log(x); // x is hoisted
