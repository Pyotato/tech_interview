var global = "global";

function foo() {
  var local = "local";
  console.log("hoisted", global); // undefined 호이스팅 : 자바스크립트는 함수레벨 스코프를 따름
  console.log("local_local", local); // local
  var global;
  return global;
}
console.log("global_global", global); //global : 전역 변수를 참조
foo();
