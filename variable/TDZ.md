# TDZ

## WHAT?

> - `let`, `const`, `class` 키워드로 선언한 변수는 변수를 선언하고 초기화를 하기 전까지는 `temporal dead zone`에 있다고 한다.

> - TDZ 안에 있는 동안, 변수는 초기값이 할당되지 않은 상태이며, 접근 시 `reference Error(참조 에러)`가 발생한다. 변수 선언 시 초기값이 없는 상태에서 호출된다면 `undefined`값으로 초기화 된다.

## vs var

- `const`, `let`, `class`와는 달리 `var` 키워드로 선언된 변수는 선언 전에 접근시 `undefined`값을 리턴한다.

```js
{
  // TDZ starts at beginning of scope
  console.log(bar); // "undefined"
  console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
  var bar = 1;
  let foo = 2; // End of TDZ (for foo)
}
```

- `temporal`(시간상)이라는 단어에서 유추가능하듯이 `코드가 작성된 순서`가 아닌 `코드가 실행된 순서`에 따라 TDZ가 생성된다.

```js
{
  {
    // TDZ starts at beginning of scope
    const func = () => console.log(letVar); // OK

    // Within the TDZ letVar access throws `ReferenceError`
    try {
      console.log("TDZ : can access letVar?", letVar);
    } catch {
      console.log("TDZ : cannot access letVar!"); // TDZ : cannot access letVar!
    }
    let letVar = 3; // End of TDZ (for letVar)
    func(); // Called outside TDZ!
  }
}
```

- 선언되지 않은 변수를 참조할 때와 달리 `let`, `const`, `class`로 선언된 변수들은 참조 에러가 발생하지 않고 `undefined`를 반환한다.

  ```js
  typeof i; // ReferenceError: Cannot access 'i' before initialization
  let i = 10;
  console.log(typeof undeclaredVariable); // "undefined"
  ```

## 렉시컬 스코프와 TDZ

- 블록레벨 스코프 변수(let) 초기화 이전에 참조

```js
function test() {
  var foo = 33; // text 함수 스코프를 갖는 지역 변수
  if (foo) {
    // 33
    let foo = foo + 55; // ReferenceError
    // 렉시컬 환경에 따라 블록 레벨 스코프를 갖는 변수 let foo는 초기화가 되기 이전에 참조를 한 것이되기 떄문에 TDZ에서 참조한 것!
  }
}
test();
```

- for문 안의 스코프
  - `let n of n.a`에서 보면 `for...of` 반복문 블록의 스코프를 갖게 된다.
  - 따라서 `n.a`는 `let n`값을 참조하게 되는 건데, `let n`이 아직 초기화가 되지 않은 상태에서 접근을 하려는 것이 때문에 참조 에러가 발생하는 것이다.

```js
function go(n) {
  // n 정의 되는 시점
  console.log(n); // { a: [1, 2, 3] }

  //   for (let n of n.a) {
  //     //          ^ ReferenceError
  //     console.log(n);
  //   }

  for (let k of n.a) {
    console.log(k);
  }

  // 1
  // 2
  // 3
}
go({ a: [1, 2, 3] });
```

## Related Topics

- [[변수] 호이스팅이 뭔가요?](https://github.com/Pyotato/tech_interview/blob/JS/variable/hoisting.md)
- [[스코프] 렉시컬 스코프를 아나요? 안다면 렉시컬 스코프는 무엇을 의미하나요?](https://github.com/Pyotato/tech_interview/blob/JS/scope/types.md#%EB%A0%89%EC%8B%9C%EC%BB%AC-%EC%8A%A4%EC%BD%94%ED%94%84lexical-scope-cf-dynamic-scope)

## References

- [scope wikipedia](<https://en.wikipedia.org/wiki/Scope_(computer_science)>)
- [Temporal dead zone (TDZ) mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)
