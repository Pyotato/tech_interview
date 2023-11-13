# Const

## WHAT?

> `const` 키워드로 선언된 변수들은 블록 레벨 스코프를 지닌 지역 변수가 된다/
> 상수 값이므로 값을 재할당(`=`)을 통해 변경 불가능하지만 상수가 `객체`라면 프로퍼티 추가,수정,제거가 가능하다.

## vs let

- 공통점

  - **스코프** : 모두 블록 레벨 스코프를 지닌다.
  - **TDZ** : `let`과 `const`로 선언한 변수 모두 선언부 이후에 접근 가능하다.
  - **globalThis** : script 최상단에 선언 시 globalThis에 프로퍼티를 생성하지 않는다.
  - **재선언** : 모두 같은 스코프 내에서는 재선언이 불가능하다.
  - **declaration**: `statement`인 `var`과 달리 `let`과 `const` 모두 `statement`이므로 블록 바디에 단독으로 선언이 불가능하다. (WHY? 블록 스코프를 가졌는데 블록 바디에 단독으로 선언되면 접근할 수 있는 방식도 없고 쓸모도 없기 떄문)

- 차이점
  - **초기화** : `let`과 달리 `const`는 선언 시 초기화를 해줘야한다.
  - **immutable binding** : `const`값을 변경하는 것이 불가능한게 아니라 바인딩 변경이 불가능함. 즉, 변수 식별자를 `=`연산자로 재할당하는 것이 불가능하다.
  - 스타일 가이드에 따르면, 스코프 내에서 재할당이 이루어지지 않는 경우, 변수의 타입 불변성 명확히 해주므로 `const` 키워드를 `let` 키워드보다 쓰이길 권장한다.

## Related Topics

- [[변수] let 키워드는 var 키워드와 어떤 점이 다른가요?](https://github.com/Pyotato/tech_interview/blob/JS/variable/variables.md#keywords)

## References

- [mdn const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
