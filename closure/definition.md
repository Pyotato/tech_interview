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

## 블록 스코프의 변수 클로저

```js
function outer() {
  let getY;
  {
    const y = 6;
    getY = () => y;
  }
  console.log(typeof y); // undefined
  console.log(getY()); // 6
}

outer();
```

- 위의 함수 `outer()`는 변수 `getY`가 있고, 내부에는 {}(중괄호 블록)로 감싸진 클로저에 `getY`가 화살표 함수로 내부 스코프의 y값을 리턴한다.
- 따라서 변수 `getY` 화살표함수를 통해 `y` 변수에 접근가능하다.
- 하지만 직접적으로 `y`변수에 접근하는 것은 불가능하다 (undefined)

## 모듈 스코프의 변수 클로저

```js
// myModule.js
let x = 5;
export const getX = () => x;
export const setX = (val) => {
  x = val;
};
```

- 위의 모듈은 `getter와 setter함수`로 이루어져 있다.
- 모듈 스코프 변수를 지닌 x는 다른 모듈에서 직접 접근은 불가능하지만 `모듈 내부의 함수에 의해` 읽고(get) 쓰기(set)가 가능하다.
- 외부에서 set해준 변수에 의해 import해온 원래 값이 [바인딩]()될 수도 있다.
- myModule.js

```js
// myModule.js
export let x = 1;
export const setX = (val) => {
  x = val;
};
```

- closureCreator.js

```js
import { x } from "./myModule.js";

export const getX = () => x; // 모듈 스코프의 클로저로 외부 모듈에서 x를 받아 리턴해줌
```

```js
import { getX } from "./closureCreator.js";
import { setX } from "./myModule.js";

console.log(getX()); // 1
setX(2);
console.log(getX()); // 2
```

- 위의 콘솔을 찍어보면 getX()는 closureCreator myModule의 모듈 스코프 변수인 x에 접근한다.
- setX에서

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

![스크린샷 2023-11-08 104006](https://github.com/Pyotato/tech_interview/assets/102423086/9d4bf935-91a6-4ac1-9c70-8e8065f48e5c)
![스크린샷 2023-11-08 104047](https://github.com/Pyotato/tech_interview/assets/102423086/3fe4cea6-2fd3-481a-94b5-f2134b474a2c)
![스크린샷 2023-11-08 104153](https://github.com/Pyotato/tech_interview/assets/102423086/cbf03ef9-733d-48cc-a4ab-8ba0536479f0)
![스크린샷 2023-11-08 104222](https://github.com/Pyotato/tech_interview/assets/102423086/2c22fbe4-bf26-42fb-9080-4b1ec1481289)
![스크린샷 2023-11-08 104317](https://github.com/Pyotato/tech_interview/assets/102423086/eb2751a5-18be-40ce-8463-0e90e2613eea)
![스크린샷 2023-11-08 104348](https://github.com/Pyotato/tech_interview/assets/102423086/fc0ef5dd-593b-4142-b306-81c9363fc71c)


## WHY?

> 이러한 특성들을 [클로저 사용의 장단점]()을 만드는데, 이러한 특성들을 잘 활용하고 고려해서 개발을 효율적으로 할 수 있다.

## CAUTION! 클로저 사용 유의 사항!

### 1. 함수 스코프 체이닝

- 모든 클로저에는 3가지 스코프가 있다
  - Local scope : 자기 자신의 스코프
  - Enclosing scope : 블록, 함수, 모듈 스코프
  - Global scope
- 흔한 실수는 외부함수 자체가 중첩된 함수라는 걸 간과하는 것
- 외부함수의 스코프에 접근은 외부함수의 enclosing 스코프에도 접근하는 걸 포함하기 때문에 함수 스코프 체이닝이 발생한다.

#### 예시

```js
// 전역 스코프
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      //외부 함수 스코프
      return function (d) {
        // 지역 스코프
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20

// 익명함수 없이
function sumNonAnon(a) {
  return function sumNonAnon2(b) {
    return function sumNonAnon3(c) {
      // 외부 함수 스코프
      return function sumNonAnon4(d) {
        // 지역 스코프
        return a + b + c + d + e;
      };
    };
  };
}

const sumNonAnon2 = sumNonAnon(1);
const sumNonAnon3 = sumNonAnon2(2);
const sumNonAnon4 = sumNonAnon3(3);
const result = sumNonAnon4(4);
console.log(result); // 20
```

- 위의 예시에서 볼 수 있듯이 여러개의 함수들이 중첩되어 있고, 각각은 외부 함수의 스코프에 접근 가능하다.
- 이 점에서 클로저는 모든 외부 함수 스코프에 접근이 가능하다고 불 수 있다.

### 2. 반복문에서의 클로저 사용

- `let` 키워드의 등장 이전에는 반복문안에 클로저를 생성할 때 문제가 자주 발생했다.
- 아래의 코드에서는 input창 활성화되는 거에 따라 메세지가 달리 보이는 코드를 구현하려고 한다.
- 하지만 예상과는 다르게 `age`에 해당되는 메세지만 나온다.

```js
function showHelp(help) {
  document.getElementById("help").textContent = help;
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Your email address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (you must be over 16)" },
  ];

  for (var i = 0; i < helpText.length; i++) {
    // Culprit is the use of `var` on this line
    var item = helpText[i];
    document.getElementById(item.id).onfocus = function () {
      showHelp(item.help);
    };
  }
}

setupHelp();
```

- 이유는 `onfocus` 함수에 할당된 함수는 모두 같은 같은 클로저를 공유하기 때문이다. setupHelp 함수의 렉시컬 환경을 참조하기 때문에 var로 선언한 item 변수는 호이스팅때문에 함수 스코프를 지니게 된다.
- `item.help`은 onfocus 콜백들이 실행될 때 결정되는데, 이미 이 시점에는 loop가 다 돌고, item 변수는 helpText 리스트의 마지막 값을 가르키게 되어 `age.help`값만 출력되는 것이다.

#### solutions

1. function factory 활용

   - 콜백들이 모두 하나의 렉시컬 환경을 공유하는 대신, `makeHelpCallback()`가 각각의 콜백들의 렉시컬 환경을 만들고, `help`가 helpText 배열에서 id에 맞는 text를 보여줘 예상대로 작동한다.

   ```js
   function showHelp(help) {
     document.getElementById("help").textContent = help;
   }
   function makeHelpCallback(help) {
     return function () {
       showHelp(help);
     };
   }
   function setupHelp() {
     var helpText = [
       { id: "email", help: "Your email address" },
       { id: "name", help: "Your full name" },
       { id: "age", help: "Your age (you must be over 16)" },
     ];
     for (var i = 0; i < helpText.length; i++) {
       var item = helpText[i];
       document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
     }
   }
   setupHelp();
   ```

2. 익명 클로저 활용

```js
function showHelp(help) {
  document.getElementById("help").textContent = help;
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Your email address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (you must be over 16)" },
  ];

  for (var i = 0; i < helpText.length; i++) {
    (function () {
      var item = helpText[i];
      document.getElementById(item.id).onfocus = function () {
        showHelp(item.help);
      };
    })(); // 이벤트 리스너를 즉시함수로하여 현재 아이템의 값이 loop를 돌 때까지 유지되도록해줌
  }
}

setupHelp();
```

3. `let`이나 `const` 키워드 활용

```js
function showHelp(help) {
  document.getElementById("help").textContent = help;
}

function setupHelp() {
  const helpText = [
    { id: "email", help: "Your email address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (you must be over 16)" },
  ];

  for (let i = 0; i < helpText.length; i++) {
    const item = helpText[i];
    document.getElementById(item.id).onfocus = () => {
      showHelp(item.help);
    };
  }
}

setupHelp();
```

4. `forEach()` 사용해서 배열 순회하고 각 `<input>`태그에 리스너를 붙이기

```js
function showHelp(help) {
  document.getElementById("help").textContent = help;
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Your email address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (you must be over 16)" },
  ];

  helpText.forEach(function (text) {
    document.getElementById(text.id).onfocus = function () {
      showHelp(text.help);
    };
  });
}

setupHelp();
```

## Related Topics

- [스코프의 정의](https://github.com/Pyotato/tech_interview/blob/JS/scope/definition.md)
- [[스코프의 종류](https://github.com/Pyotato/tech_interview/blob/JS/scope/definition.md)(ft. [렉시컬 스코프](https://github.com/Pyotato/tech_interview/blob/JS/scope/types.md#%EB%A0%89%EC%8B%9C%EC%BB%AC-%EC%8A%A4%EC%BD%94%ED%94%84lexical-scope-cf-dynamic-scope))]
- [IIFE]()
- [모듈]()
- [바인딩]()

## References

- [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
