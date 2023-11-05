var a = "global";

function foo() {
  var b = "local1";
  console.log(a); //global - 전역변수. 출력가능.

  if (true) {
    var c = "local2";
    console.log(b); //local1 - 해당 함수 내 선언한 변수. 출력 가능.
  }

  console.log(c); //local2 - 해당 함수 내 선언한 변수. 출력 가능.
}

function bar() {
  var d = "local3";
  console.log(d); //local3 - 해당 함수 내 선언한 변수. 출력 가능.
  console.log(a); //global - 전역변수. 출력가능.
  try {
    console.log(b); //해당 함수 내 선언한 변수가 아님. Error
  } catch {
    console.log("b is not reachable!");
  }
  try {
    console.log(c); //해당 함수 내 선언한 변수가 아님. Error
  } catch {
    console.log("c is not reachable!");
  }
}

foo();
bar();
