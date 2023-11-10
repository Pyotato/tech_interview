import user from "./Sol/JSON.json" assert { type: "json" };

const copyUser = Object.assign({}, user);

// assign 메소드에 대상객체에 빈 객체를 넣어 새로운 메모리 주소로 복사
console.log(copyUser === user); // false

// 얕은 복사기 떄문에 depth가 두개 이상 있는 경우 같은 메모리 주소를 다시 참조하는 문제가 발생한다.
console.log(copyUser.info === user.info); // true
console.log(copyUser.info.email === user.info.email); // true
