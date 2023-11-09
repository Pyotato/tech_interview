function go(n) {
  // n here is defined!
  console.log(n); // { a: [1, 2, 3] }

  for (let n of n.a) {
    console.log(n); // Cannot access 'n' before initialization
  }
  // for (let k of n.a) {
  //   console.log(k);
  // }

  // 1
  // 2
  // 3
}
go({ a: [1, 2, 3] });
