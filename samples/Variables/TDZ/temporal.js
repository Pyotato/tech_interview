{
  // TDZ starts at beginning of scope
  const func = () => console.log(letVar); // OK

  // Within the TDZ letVar access throws `ReferenceError`
  try {
    console.log("TDZ : can access letVar?", letVar);
  } catch {
    console.log("TDZ : cannot access letVar!");
  }
  let letVar = 3; // End of TDZ (for letVar)
  func(); // Called outside TDZ!
}
