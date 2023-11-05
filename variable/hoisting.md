# HOISTING

## WHAT?

> '호이스터'란 기계는 끌어올려주는 데 쓰인다.

![호이스터](/images/hoister.png)

> 자바스크립트에서의 호이스팅이란 변수나 함수의 선언을 함수나 블록의 스코프 최상단로 끌어올려주는 것이다. 즉, 코드가 실행되기 전에 변수나 함수 선언이 실행되어 메모리 공간이 할당되는 현상을 가르킨다.

## WHY?

> 한마디로 하자면 식별자의 선언은 코드가 실행되기 전에 프로세스되기 때문이다.

> 따라서 `var`와 같은 함수들은 암묵적으로 'undefined'로 초기화가 되기 때문에 할당 전에도 접근이 가능하다(선언부분의 호이스팅!).
> 반면, `let`과 `const`로 선언한 변수들은 선언과 초기화가 분리되어 일시적으로 접근이 불가능한 [TDZ(Temporal Dead Zone)]()에 놓이게 되어 초기화 전에 접근 시 에러가 발생한다.

> 호이스팅의 개념은 [스코프]()와 변수와 밀접한 관계를 갖고 있는데, `var`로 선언한 변수는 [렉시컬 스코프]()를 갖고 `let`과 `const` 변수들은 블록범위의 스코프를 갖는다. 이렇게 다른 스코프를 갖기 때문에 호이스팅이 발생할 때 양상이 다르다. 모두 변수 선언에 있어서는 호이스팅이 발생하지만, 할당에 있어서는 발생하지 않는다.

- var 변수의 호이스팅

```js
console.log("호이스팅", x); // undefined : var 키워드로 선언한 변수는 선언과 함께 undefined로 초기화되기 때문에 실행 이전에 접근 가능하고, 그 값은 선언이 호이스팅된 undefined이 된다.
var x;
console.log("변수선언만", x); // undefined : 아직 할당을 해주지 않았기 때문에 암묵적으로 초기화해줬던 값인 undefined이 된다.
var x = 1;
console.log("변수 선언과 할당 둘다", x); // 1 : 1이라는 값을 할당
```

- let 변수의 호이스팅

  - 선언 이전에 접근 : 에러!! DTZ !!

  ```js
  console.log("변수선언만", x); //ReferenceError: Cannot access 'x' before initialization (TDZ)    at Object.
  let x;
  ```

  - 선언만하고 접근 : 선언부만 호이스팅 되었기 때문에 런타임에는 undefined값

    ```js
    let x;
    console.log("변수선언만", x); //undefined
    ```

    - 초기화하고 접근 : 초기화 해준 값

    ```js
    let x = 1;
    console.log("변수선언만", x); //1
    ```

- const 변수의 호이스팅

  - 선언/초기화 이전에 변수에 접근 : 에러 !! TDZ !!

    ```js
    try {
      // const x ; // const 키워드는 변수 선언시 초기화도 반드시해줘야 에러가 나지 않음
      console.log("블록 범위의 스코프를 갖는 x 호출하기 : ", x); // 선언 전에 호출 시 에러 (선언은 호이스팅되었는데 초기화를 해주지 않았기 때문에 접근을 하려고 하면 TDZ에 도달해서 에러 발생)
      const x = 1;
    } catch (e) {
      console.log("reached TDZ", e);
    }
    ```

- [함수 선언문(변수를 선언하고 함수를 할당해주는 것)](https://github.com/Pyotato/tech_interview/blob/JS/samples/Hoisting/function_declaration.js)의 호이스팅

  - `function func()`식으로 선언한 함수는 변수들에 호이스팅이 발생하는 것과 동일하게 선언이 상단으로 끌어올려짐과 더불어 할당도 호이스팅된다.

    ```js
    console.log(func); // declaration and assignment are hoisted
    function func() {
      return "declaration & assignment both hoisted";
    }
    console.log(func()); //declaration & assignment both hoisted
    ```

  - 반면에 함수 선언식`var func = function()`으로 선언한 함수는 변수와 마찬가지로 선언만 호이스팅이 된다.

    ```js
    console.log(typeof func); //undefined

    var func = function () {
      // declaration is hoisted only
      // console.log("declaration hoisted");
      return "declaration hoisted : global";
    };
    console.log(typeof func); //function
    ```

## Related Topics

- [[변수] TDZ (Temporal Dead Zone)]()
- [[변수] const 키워드는 어떤 특징이 있나요?]()
- [[변수] var 키워드는 뭔가요?]()
- [[변수] 식별자란 무엇인가요?]()
- [[변수] 변수란 무엇인가요?]()
- [[변수] let 키워드는 var 키워드와 어떤 점이 다른가요?]()

## References

- [hoisting wikipedia](https://en.wikipedia.org/wiki/JavaScript_syntax#hoisting)
- [/ssi02014/Front-Interview](https://github.com/ssi02014/Front-Interview/blob/master/documents/JavaScript/hoisting.md)
