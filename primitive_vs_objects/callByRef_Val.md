# 값에 의한 호출(call by value)과 참조에 의한 호출(call by reference)

## WHAT?

> 자바스크립트 함수 호출 시 arg은 `원시 타입(primitive type)`과 `객체타입(object type)`으로 구분돼서 전달 되는데,
>
> - 이 때 `원시 타입`으로 arg이 전달되는 경우 `Call by value(값에 의한 호출)`이라고 하며 **값**이 복사되어 전달된고,
> - `객체 타입`으로 arg이 전달되는 경우 `Call by reference(참조에 의한 호출)`이라고 하며 **참조 값 (reference)**가 복사 되어 전달된다.

## Call by value (값에 의한 호출)

> 값에 의한 호출을 할 경우, arg값을 변경하더라도 원래 변수의 값은 변경되지 않는다.
> `원시 값`은 **immutable value(변경 불가능한 값)**이기 때문에 원시값이 복사되어 매개 변수 num으로 전달 되기 떄문이다.

```js
let num = 1;

const increment = (x) => x++;

console.log("call by value : ", num); // 1
```

> 값에 의한 호출을 했을 때, 값을 변경하고 싶다면 함수 내부에서 변수를 생성하고 해당 값을 변경헤서 리턴을 해서 `num`에 재할당을 해줘야한다.

```js
const modify = (x) => {
  let modified = x;
  modified++;
  return modified;
};
num = modify(num);

console.log("call by value (modify): ", num); // 2
```

## Call by reference (참조에 의한 호출)

> 참조에 의한 호출을 할 경우, arg값을 변경하면 원래 객체가 변경된다.
> 모든 `객체 값`은 **mutable value(변경 불가능한 값)**이기 떄문이다.

## 참조 데이터 복사

- 객체의 불변성을 지키기 위해서는 `Object.assign`, `...연산자 (spread 문법) 사용`, `JSON`, `lodash 모듈 (clone Deep) 재귀함수 사용` 등을 통해 객체의 `깊은 복사` 후에 사용 가능

### Object.assign

> `assign` 메소드를 통해 객체를 복사하여 새로운 메모리 주소 공간에 할당하는 방법

```js
const user = {
  name: "bob",
  age: 99,
  emails: "spongeBob@square.pants",
};
const copyUser = Object.assign({}, user);
console.log(copyUser === user); // false

user.age = 22;
console.log("user", user.age); // 22
console.log("copyUser", copyUser.age); // 99
```

### ...연산자 (spread 문법) 사용

- depth가 한 단계만 깊은 복사되므로 불완전하다.

```js
const person = { name: "Bob" };

// depth1 예제
const setName = (person) => {
  const copiedPerson = { ...person };

  copiedPerson.name = "Alice";
};

setName(person);
console.log(person.name); // 'Bob' : depth가 한 단계일 때는 spread 연산자를 사용해서 깊은 복사를 통해 불변성 지킴
```

- 하지만 객체의 깊이가 2 이상이 되면 불완전하게 복사되어 값이 변경된다.

```js
const depth2person = { info: { name: "Bob" } };

// depth1
const setNameDepth2 = (person) => {
  const copiedPerson = { ...person };

  copiedPerson.info.name = "Alice";
};

setNameDepth2(depth2person);
console.log(depth2person.info.name); // 'Alice'
```

- 아래의 방법을 통해 완전한 `깊은 복사`가 가능하다.

### lodash 모듈 (clone Deep) 재귀함수 사용

- [lodash]()의 모듈 메소드들은 `배열/객체나 String을 순회`하거나 `값 조작/테스트`, `함수 합성 (Function Composition)`을 개발하는데 도움을 준다.
- 메소드들 중 `cloneDeep`을 사용하면 깊은 복사가 가능하다. 따라서 depth가 여러개인 객체를 재귀적으로 복사

```js
import _ from "lodash";
import user from "./JSON.json" assert { type: "json" };
const copyUser = _.cloneDeep(user);
console.log(copyUser === user); // false

user.info.age = 22;
console.log("user", user);
// user {
//     info: { name: 'Bob', age: 22, email: [ 'spongeBob@squarePants.com' ] },
//     info_type: 'introduction'
//   }
console.log("copyUser", copyUser);
// copyUser {
//     info: { name: 'Bob', age: '32', email: [ 'spongeBob@squarePants.com' ] },
//     info_type: 'introduction'
//   }
user.info.email.push("second@mail.com");
console.log(user.info.email === copyUser.info.email); // false
console.log("user", user);
// user {
//     info: {
//       name: 'Bob',
//       age: 22,
//       email: [ 'spongeBob@squarePants.com', 'second@mail.com' ]
//     },
//     info_type: 'introduction'
//   }

console.log("copyUser", copyUser);
// copyUser {
//     info: { name: 'Bob', age: '32', email: [ 'spongeBob@squarePants.com' ] },
//     info_type: 'introduction'
//   }
```

## Related Topics

- [깊은 복사 vs 얕은 복사]()
- [데이터 타입]()
- [lodash]()
- [JSON]()
- [스프레드 문법]()
- [구조 분해 할당]()
- [불변성]()

## References

- [siot0](https://siot0.tistory.com/48)
- [ssi02014/Front-Interview](https://github.com/ssi02014/Front-Interview/blob/master/documents/JavaScript/callbyvalue-reference.md)
