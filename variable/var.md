# Var

# WHAT?

> `var` 로 선언한 변수는 함수 또는 전역 스코프를 가지는 변수다.

## 특징

- 스코프는 변수가 선언된 위치에 따라 결정되는데

  - `{}`로 감싸진 `함수 바디`나 `Static 초기화 블록`
  - 모듈모드로 코드가 실행되면 모듈 스코프를
  - 스크립트 모드로 코드가 실행되면 전역 스코프를 지닌다
  - `블록 문, try catch 문, switch 문 for문` 등은 `var`키워드로 만들어진 변수들은 스코프가 생성되지 않고, **블록 외부에서 접근 가능**하다.
  - `var`로 선언한 변수는 config할 수 없는 전역변수 프로퍼티로 추가된다.

    ```js
    var x = 1;
    console.log(Object.hasOwn(globalThis, "x")); // false : 노드JS commonJS 모듈과 Ecmascript 모듈에서 최상단에 선언된 변수들은 모듈 스코핑이 됨 (따라서 전역 객체의 프로퍼티로 추가되지 않아 false를 띰.) 하지만 브라우저에서 실행한 아래 사진에서와 같이 작동한다.
    delete globalThis.x; // TypeError in strict mode
    // delete x; // SyntaxError: Delete of an unqualified identifier in strict mode.
    ```

  ![Alt text](/images/redeclareVarGoogle.png)

- 호이스팅

  - `var` 변수로 선언한 변수는 스크립트 어디에 선언을 했던 코드가 실행되기 이전에 프로세스된다.
  - 즉, 어디에 변수를 선언했던 맨위에 선언한 거와 같다. 따라서 변수를 선언하기 전에 접근이 되며, 이렇게 변수 선언이 함수나 블록 또는 스크립트 맨위로 끌어올려지는 효과를 호이스팅이라고 한다.
  - cf. `var` 변수들은 현재 스크립트의 최상단으로 끌어올려지므로 한 html내에 스크립트 태그가 두개 이상이라면 다음 스크립트가 프로세스되고 실행되기 전까지 이전의 스크립트에서 다음 스크립트의 변수에 접근할 수 없다.

- 재선언

  - `var`로 선언한 변수는 재선언이 가능하다
  - 할당을 하지 않고 재선언언할 경우, `var`로 선언한 변수는 할당해줬던 값을 잃지 않는다.

    ```js
    var a = 1;
    var a = 2;
    console.log(a);

    var a;

    console.log("재선언: ", a);
    ```

    - `var` 변수 선언의 위치가 함수 선언 위치와 같을 경우 (스코프가 동일)할 경우,`var` 변수선언이 **선언 순서와 무관하게 항상** 함수값을 오버라이딩한다.

      - 이는 함수 선언이 초기화 부분이 평가되기 전에 포이스팅되기 때문이다.
        ![var변수 선언과 함수 선언 스코프가 같다면 변수값으로 오버라이딩된다](/images/varVsfunc.png)

      ```js
      var a = 1;
      function a() {} // SyntaxError: Identifier 'a' has already been declared
      console.log(a);
      ```
