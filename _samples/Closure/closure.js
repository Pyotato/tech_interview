function makeFunc() {
  const name = "makeFunc ! outer local variable";
  function displayName() {
    console.log("displayName:", name);
  }
  return displayName;
}

const myFunc = makeFunc();

myFunc();

function init() {
  var name = "init ! outer local variable"; // name은 지역 변수, 정확히는 함수 스코프를 가진 지역변수
  function displayName() {
    // init() 내부에 선언된 중첩함수, closure를 만듦
    console.log("displayName:", name); // 상위 함수의 스코프에 참조 가능
  }
  displayName();
}
init();
