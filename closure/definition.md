# Closure

## WHAT

> `클로저란 함수가 선언된 함수의 렉시컬 환경과의 조합이라고 한다.`
> 직관적이지 않아서 말을 풀어보자면, 클로저는 함수 안에 함수가 선언되었다면 그 함수는 렉시컬 스코프를 따르는 자바스크립트의 특징에 따라서 상위스코프의 변수에 접근할 수 있다.

## 렉시컬 스코핑

> 함수 스코프 예시 : 오로지 변수가 선언된 함수와 그 함수 내부의 위치에서만 접근 가능

```js
function init() {
  var name = "outer local variable";
  function displayName() {
    console.log("displayName:", name); // displayName: outer local variable
  }
  displayName();
}
init();
```

- `init()`함수는 `name`이라는 지역변수와 `displayName()`이라는 함수를 생성한다.
- `displayName()`함수는 `init()`내부에서 정의된 내부함수고, `init()` 내부에서만 접근가능하다.
- `displayName()`은 지역변수가 없는데 어떻게 name에 접근할 수 있을까?
  - [렉시컬 스코프](https://github.com/Pyotato/tech_interview/blob/JS/scope/types.md#%EB%A0%89%EC%8B%9C%EC%BB%AC-%EC%8A%A4%EC%BD%94%ED%94%84lexical-scope-cf-dynamic-scope)에서 봤듯이 변수가 **선언된 위치**에 따라 접근 가능한 지가 결정된다. 따라서 중첩 함수들은 선언되었던 외부 스코프의 변수에 접근이 가능하다.

```js
function makeFunc() {
  const name = "makeFunc ! outer local variable";
  function displayName() {
    console.log("displayName:", name);
  }
  return displayName;
}

const myFunc = makeFunc();
```

- 두 `makeFunc()`이 동일한 실행결과가 나온다.
- 차이점이라면, 이전의 함수와 달리 위의 내부 함수인 `displayName()`가 실행 이전에 외부함수에서 리턴을 한다는 점이다.
- 어떻게 실행하기 전에 name 변수를 올바르게 출력할 수 있는 거지? `클로저` 때문!
- [클로저의 정의](#정의)에서 봤듯이 중첩함수가 선언된 내부함수는 함수가 선언된 위치에 따라 렉시컬 스코프가 적용되어 상위의 외부함수의 변수에 접근이 가능하다.
- 즉, 변수 `myFunc`는 `makeFunc()`가 실행하면서 생성된 `displayName()` 인스턴스를 참조하게 된다.
- `displayName()` 인스턴스는 렉시컬 환경(선언된 위치의 환경)을 참조하기 때문에 상위 함수의 `name`변수에 접근이 가능하다.

## let과 const로 스코핑하기

> ECMASCRIPT6 이전에는 자바스크립트는 2개의 스코프만 존재했다.
>
> - 함수 스코프
> - 전역 스코프

- `var` 키워드로 선언된 함수는 함수 내에서 선언되면 함수 스코프를 갖거나 함수 밖에서 선언되면 전역 스코프를 갖는데, {} (블록 스코프)로는 스코프가 생성되지 않아서 혼란스러웠다.

  ```js
  // var -> global || function scope only
  if (Math.random() > 0.5) {
    var x = 1;
  } else {
    var x = 2;
  }
  console.log(x); // error free x is global
  ```

  - 위의 코드에서 함수 밖에서 `var`키워드로 선언한 전역변수이기 때문에 x에 접근이 가능하다.

    ```js
    // const & let keywords -> block scoping available
    if (Math.random() > 0.5) {
      let x = "let";
    } else {
      const x = "const";
    }
    console.log(x); // ReferenceError: x is not defined
    ```

  - 블록 스코프인 let/const 키워드로 선언한 변수는 if문의 {}에서만 접근 가능하다.
  - ECMA6부터는 블록레벨 스코프가 사용가능해졌다. 또한 ECMA6부터는 블록 스코핑 말고도 [모듈]()을 통해 새로운 종류의 스코프를 만들 수 있게 되었다.

## Function factory : 여러 독립된 렉시컬 환경

```js
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log("typeof add5,", typeof add5); //typeof add5, function
console.log(add5(2)); // 7
console.log(add10(2)); // 12
```

- 위의 코드에서 `add5`의 타입을 출력해보면 함수다. `makeAdder(x)`함수 스코프가 생성될 때, arg x를 받아 새로운 함수를 리턴해준다. 리턴되는 함수는 arg y를 받아 x+y를 리턴해준다.
- `makeAdder()`는 *function factory*다. 즉, 같은 함수 body를 갖지만, 각각의 렉시컬 환경을 따로 갖고 있다.

- 실제로 작동하는 과정을 debugger로 찍어보면, 함수 `add5`와 `add10`가 각각 다른 렉시컬 환경을 갖고 있다는 걸 볼 수 있다.
  ![Alt text](image-1.png)

![Alt text](image-2.png)

![Alt text](image-3.png)

![Alt text](image-4.png)

![Alt text](image-5.png)

![Alt text](image-6.png)

## WHY?

> 이러한 특성들을 [클로저 사용의 장단점]()을 만드는데, 이러한 특성들을 잘 활용하고 고려해서 개발을 효율적으로 할 수 있다.

## Related Topics

- [스코프의 정의](https://github.com/Pyotato/tech_interview/blob/JS/scope/definition.md)
- [[스코프의 종류](https://github.com/Pyotato/tech_interview/blob/JS/scope/definition.md)(ft. [렉시컬 스코프](https://github.com/Pyotato/tech_interview/blob/JS/scope/types.md#%EB%A0%89%EC%8B%9C%EC%BB%AC-%EC%8A%A4%EC%BD%94%ED%94%84lexical-scope-cf-dynamic-scope))]
- [IIFE]()

## References

- [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
