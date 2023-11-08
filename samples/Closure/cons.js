// 인스턴스 생성을 통해 만든 클로저를 활용하지 않음
// 굳이 클로저를 사용해서 메모리 공간이랑 실행시간을 소요하는데 낭비할 필요가 없음

// function MyObject(name, message) {
//   this.name = name.toString();
//   this.message = message.toString();

//   this.getName = function () {
//     return this.name;
//   };

//   this.getMessage = function () {
//     return this.message;
//   };
// }

// function MyObject(name, message) {
//   this.name = name.toString();
//   this.message = message.toString();
// }
// MyObject.prototype = {
//   getName() {
//     return this.name;
//   },
//   getMessage() {
//     return this.message;
//   },
// };
// 위와 같이 클로저를 활용하지 않고 코드를 작성할 수 있지만
// 프로토타입을 직접 재정의하는 건 바람직하지 않다.

// 아래와 같이 프로토타입을 추가해줄 수 있다.
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype.getName = function () {
  return this.name;
};
MyObject.prototype.getMessage = function () {
  return this.message;
};
