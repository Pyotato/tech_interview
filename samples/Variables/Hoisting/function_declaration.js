console.log(typeof func); //undefined
var func = function () {
  // declaration is hoisted only
  // console.log("declaration hoisted");
  return "declaration hoisted : global";
};
console.log(typeof func); //function

/**
 * 블록 범위로 함수 선언
 */
try {
  console.log(typeof func); //undefined
  let func = function () {
    // declaration is hoisted only
    // console.log("declaration hoisted");
    return "declaration hoisted";
  };
  console.log(typeof func); //function
} catch (e) {
  console.log("선언부 호이스팅", e); //초기화 이전에 접근 ! TDZ
}

/**
 * 블록 범위로 함수 선언 : 즉시 실행 함수로 만들어주기
 */
try {
  console.log(typeof func); //function
  console.log(func); // [Function: func]
  var func = (function () {
    // declaration is hoisted only
    // console.log("declaration hoisted");
    return "declaration hoisted : block";
  })();
  console.log(typeof func); //string
  console.log(func); //declaration hoisted
} catch (e) {
  console.log(e);
}
