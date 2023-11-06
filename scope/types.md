# SCOPE : Type

## 전역 스코프

- 전역에 선언한 변수는 가능한 전역 스코프를 갖기 때문에 어디서든 참조하다.
- `var` 키워드로 선언한 변수는 `전역 객체(Global Object) window`의 프로퍼티다.

```js
var x = 1;
let y = 2;
console.log(window.y); // undefined
debugger;
console.log(window.x); // 1
```

![Alt text](/images/varIsWindowPropertyDebugger.png)

- [C계열의 언어들]으로 `블록 레벨 스코프`({}안에서 유효한 스코프)를 따른다. [C언어 블록 레벨 스코프 main()예](<(https://github.com/Pyotato/pintos-kaist_/blob/master/threads/init.c#L67C1-L69C14)>)인 아래와 같은 경우 `main(){}`를 시작점으로 한다.

  ```c
  int
  main (void) {
  	uint64_t mem_end;
  	char **argv;
    return 0;
    }

  ```

### 전역 변수 문제점

하지만 자바스크립트는 특별히 시작점 없시 코드가 나타나면 즉시 해석되고 실행된다. 따라서 전역에 변수를 선언하기 쉬워지고, 전역으로 변수를 선언했을 때 `변수 이름 중복`이나 `의도치 않았던 재할당을 통해 코드를 예측하기 어렵게` 만들 거나, `메모리를 효율적으로 쓰지 않게`되는 문제들을 일으킬 수 있다.

```js
var global = "global";
function foo() {
  var local = "local";
  console.log(global); // undefined 호이스팅 : 자바스크립트는 함수레벨 스코프를 따름
  console.log(local); // local
  var global;
}
foo();

console.log(global); //global : 전역 변수를 참조
// console.log(local); // Uncaught ReferenceError: local is not defined
```

### 함수 레벨 스코프

- ECMA6 이전에는 `var` 키워드를 사용해서 변수를 선언했다.
- 함수 안에서는 전역으로 선언한 변수 접근 가능 (전역 레벨 스코프를 가졌기 때문)
- 함수 밖에서는 함수 안에서 선언한 변수는 접근 불가능 (함수 레벨 스코프를 가졌기 때문).

```js
var a = "global";
function foo() {
  var b = "local1";
  console.log(a); //global - 전역변수. 출력가능.
  if (true) {
    var c = "local2";
    console.log(b); //local1 - 해당 함수 내 선언한 변수. 출력 가능.
  }

  console.log(c); //local2 - 해당 함수 내 선언한 변수. 출력 가능.
}

function bar() {
  var d = "local3";
  console.log(d); //local3 - 해당 함수 내 선언한 변수. 출력 가능.
  console.log(a); //global - 전역변수. 출력가능.
  try {
    console.log(b); //해당 함수 내 선언한 변수가 아님. Error
  } catch {
    console.log("b is not reachable!");
  }
  try {
    console.log(c); //해당 함수 내 선언한 변수가 아님. Error
  } catch {
    console.log("c is not reachable!");
  }
}

foo();
bar();
```

### 블록 레벨 스코프

- ECMAScript6부터는 `let`과 `const` 키워드는 블록 스코프 변수를 선언할 때 쓰이는데, 함수 레벨 스코프처럼 `{}`안에서 선언된 변수는 해당 중괄호 안에서만 접근 가능하다.
- 따라서 블록 내의 블록에서도 상위 블록에서 선언된 변수에 접근이 가능하다.

```js
let foo = "I'm foo";
if (true) {
  let bar = "I'm bar";
  console.log("block level foo", foo); //I'm foo
  console.log(bar); //I'm bar
}

console.log(foo); //I'm foo
// console.log(bar); //Uncaught ReferenceError: bar is not defined.
```

### 렉시컬 스코프(Lexical Scope) (cf. Dynamic Scope)

- `어디서 호출(dynamic scope)`했냐 `어디서 선언(lexical scope)`했냐 그것이 문제로다.
- 자바스크립트는 `lexical scope`를 따른다. 따라서 `어디서 선언`했는 지에 따라 상위 스코프가 결정된다.

```js
var x = 1;

function foo() {
  var x = 10;
  bar();
  function inner() {
    console.log("inner", x);
  }
  inner(); // 10
}

function bar() {
  console.log(x);
}

foo(); // 1
bar(); // 1
```

- 위의 코드는 어떤 스코프를 따르느냐에 따라서 `foo()`와 `bar()`값이 다를 수 있다.

  - dynamic scope을 따르는 경우 bar의 상위 스코프는 전역 & foo
  - lexical scope을 따르는 경우 bar의 상위 스코프는 전역

- 자바스크립트는 렉시컬 스코프에 따라서 선언된 위치에 따라서 상위 스코프가 결정되므로, 전역으로 선언한 `var x = 1 `값을 참조하게 된다.
- 따라서 `inner`의 상위 스코프는 foo이므로 foo내부에서 선언한 변수의 값을 참조하게 된다.

  ```js
  var x = 1;
  console.log("window의 프로퍼티인 var x : ", window.x);
  function foo() {
    var x = 10;
    bar();
    function inner() {
      console.log("inner", x);
    }
    debugger;
    inner();
    function hoisted() {
      console.log("hoisted", x); // undefined 렉시컬 환경에 따라서 함수 레벨 스코프가 먼저 호이스팅된 x값을 참조하게 된다.
      // var x = 2;
    }
    hoisted();
  }

  function bar() {
    console.log(x);
  }

  foo(); // 1
  debugger;
  bar(); // 1
  ```

![lexical_scope1](/images/lexical_scope1.png)

- 위의 예시에서 보면
  - `hoisted()`와 `inner()`는 전역 스코프와 상위 스코프인 `foo()`의 [클로저]()이고,
  - 전역으로 선언된 x의 값은 10이다. 전역 스코프를 따라가기 보다는 선언된 위치인 `foo()`의 스코프를 따르게 된다.
  - `var`로 선언한 x는 새로운 지역변수다.

## Related Topics

- [Closure]()
- [[변수] 호이스팅이 뭔가요?](https://github.com/Pyotato/tech_interview/blob/JS/variable/hoisting.md)

## References

- [scope wikipedia](<'https://en.wikipedia.org/wiki/Scope_(computer_science)'>)
- [ssi02014/Front-Interview](https://github.com/ssi02014/Front-Interview/blob/master/documents/JavaScript/scope.md)
