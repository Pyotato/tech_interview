# Closure : 장단점

## 장점

> 1. 함수와 데이터(렉시컬 환경)을 긴밀하게 엮어준다. 하나의 함수 바디로 각각의 렉시컬 환경을 만들기 때문에 재활용에 용이하다.
> 2. 자바와 같은 언어에서 private 메소드(같은 클래스의 메소드에서만 호출 가능한 메소드)를 선언할 수 있는 기능을 모방해서 외부에서 함수 접근을 통제하기에 유용하고, 전역 네임 스페이스를 관리하는데 용이하다.

## 1. 특정 데이터(렉시컬 환경)을 참조하는 함수와 그 데이터를 유기적으로 만들어준다

- [OOP(객체지향 프로그래밍)]()처럼 객체를 통해 데이터(프로퍼티)와 한개 이상의 메소드를 긴밀하게 엮어주는 역할을 할 수 있다.
- 따라서, 하나의 메소드를 가진 객체 대신 클로저를 활용할 수 있다.

  - 웹 프론트엔드이 자바스크립트 코드는 `이벤트 기반`을 위주로 작성된다.
  - 특정 행동을 정의하고, 사용자가 이벤트를 트리거(클릭/키누름)하면 그 행동이 이벤트에 의해 `콜백`(이벤트에 대한 응답으로 실행되는 하나의 함수)으로 동작하도록 한다.

### 클로저를 통해 객체와 메소드 밀접하게 해주는 예시

```html
<!DOCTYPE html>
<style type="style">
  body {
    font-family: Helvetica, Arial, sans-serif;
    font-size: 12px;
  }

  h1 {
    font-size: 1.5em;
  }

  h2 {
    font-size: 1.2em;
  }
</style>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>closure example</title>
    <p>Some paragraph text</p>
    <h1>some heading 1 text</h1>
    <h2>some heading 2 text</h2>

    <button id="size-12">12</button>
    <button id="size-14">14</button>
    <button id="size-16">16</button>
  </head>
  <body></body>
</html>
```

```js

<script>
  function makeSizer(size) {
    return function () {
      document.body.style.fontSize = `${size}px`;
    };
  }

  const size12 = makeSizer(12);
  const size14 = makeSizer(14);
  const size16 = makeSizer(16);

  document.getElementById("size-12").onclick = size12;
  document.getElementById("size-14").onclick = size14;
  document.getElementById("size-16").onclick = size16;
</script>

```

- 버튼을 클릭하면 body의 폰트 크기를 각각 12,14,16 픽셀로 변경 가능하다는 걸 볼 수 있다.

## 2. private 메소드 모방

- 자바스크립트의 [Class]() 도입 이전에는 자체적으로 private 메소드를 선언하는 방벙이 없었다.
- 하지만 `클로저`를 통해 private 메소드를 모방할 수 있다.
- `private` 메소드는 코드 접근을 제한하는 것뿐만 아니라, 전역 네임스페이스를 관리하는데 유용하다.

### private 메소드 모방 예시

- 아래의 코드는 클로저를 통해 public 함수들이 private 함수와 변수에 접근할 수 있는 방식을 나타낸다.
- 이런 클로저들은 [모듈 디자인 패턴]()을 따른다.

### IIFE를 활용해 private 함수 모방

```js
const counter = (function () {
  // 익명 함수를 통해 생성된 공유된 렉시컬 환경
  let privateCounter = 0; // 외부에서 접근 불가능한 private 변수
  function changeBy(val) {
    // 외부에서 접근 불가능한 private 함수
    privateCounter += val;
  }

  return {
    increment() {
      // public 함수 (익명 wrapper에 의해 리턴됨)
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },

    value() {
      return privateCounter;
    },
  };
})(); // 즉시 실행함수

console.log(counter.value()); // 0.

counter.increment();
counter.increment();
console.log(counter.value()); // 2.

counter.decrement();
console.log(counter.value()); // 1.
```

- 위의 코드에서 하나의 렉시컬함수를 지닌 함수 3개가 있다 :
  - `counter.increment`
  - `counter.decrement`
  - `counter.value`
- 렉시컬 환경에는 두개의 private 아이템이 있다:
  - `privateCounter` 변수
  - `changeBy()` 함수
- 위의 private 멤버들은 외부의 익명 함수로는 접근 불가능하다
- 대신, 익명 wrapper로 리턴되는 세개의 퍼블릭 함수를 통해 접근 가능하다.
- 자바스크립트의 렉시컬 스코핑 덕분에 함수가 선언된 위치인 counter 내부의 변수와 함수들에 각각 접근이 가능하다.

```js
const makeCounter = function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },

    value() {
      return privateCounter;
    },
  };
};

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1.value()); // 0.

counter1.increment();
counter1.increment();
console.log(counter1.value()); // 2.

counter1.decrement();
console.log(counter1.value()); // 1.
console.log(counter2.value()); // 0.
```

- 위의 예시를 보면 makeCounter 함수로 각각의 렉시컬 스코프를 갖는 `counter1()`와 `counter2()`가 있다.
- 두 변수 모두 각각의 렉시컬 스코프의 함수와 변수에 접근 가능하고, 한 렉시컬 환경에서의 변수 값 변경이 다른 렉시컬 환경에 영향을 줄 수 없다는 걸 볼 수 있다.

## 단점

> 1. 함수는 각각의 인스턴스의 스코프와 클로저를 관리해야한다. 따라서, 클로저가 특정 작업을 위해 반드시 필요한 기능이 아니라면 처리 속도와 메모리 소모의 측면에서 부정적인 영향을 미칠 수 있다.
>    예를 들어, 새로운 객체나 클래스를 생성할 때, 메소드들은 일반적으로 `객체의 생성자`에 정의되기보다는 `객체의 프로토타입`과 밀접하게 연관되어야한다. 객체의 생성자가 호출되면, 그 메소드들은 객체를 생성할 때마다 재할당이 도기 떄문이다.

## Related Topics

- [OOP]()
- [클로저의 정의](https://github.com/Pyotato/tech_interview/blob/JS/closure/definition.md)
- [클래스]()
- [IIFE]()
- [상속과 프로토타입 체인]()

## References

- [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

```

```
