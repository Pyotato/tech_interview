var x = 1;
console.log(Object.hasOwn(globalThis, "x")); // false : 노드JS commonJS 모듈과 Ecmascript 모듈에서 최상단에 선언된 변수들은 모듈 스코핑이 됨 (따라서 전역 객체의 프로퍼티로 추가되지 않아 false를 띰.)
delete globalThis.x; // TypeError in strict mode
// delete x; // SyntaxError: Delete of an unqualified identifier in strict mode.

var a = 1;
var a = 2;
console.log(a);

var a;

console.log("재선언: ", a);
