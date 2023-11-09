function init() {
  var name = "outer local variable"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log("displayName:", name); // use variable declared in the parent function
  }
  displayName();
}
init();
