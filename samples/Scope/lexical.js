var x = 1;

// console.log('window의 프로퍼티인 var x : ', window.x); //window의 프로퍼티인 var x :  1
function foo() {
  var x = 10;
  bar();
  function inner() {
    console.log("inner", x);
  }
  debugger;
  inner();
  function hoisted() {
    console.log("hoisted", x); // undefined 렉시컬 환경에 따라서 함수 레벨 스코프가 먼저 호이스팅된 x값을 참조하게 된다.
    // var x = 2;
  }
  hoisted();
}

function bar() {
  console.log(x);
}

foo(); // 1
debugger;
bar(); // 1
