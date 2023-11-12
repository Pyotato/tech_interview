# Variables

## WHAT?

> 하나의 값을 저장하기 위해 확보한 메모리 공간 자체/메모리 공간을 식별하기 위해 붙인 이름
> 따라서 변수에 할당되는 것은 `값`이다.

```js
// sum이라는 변수에 10+20(식)이 평가되어 생성된 숫자 값 30이 할당됨
var sum = 10 + 20;
```

## vs Identifier(식별자)

> 식별자란 코드 내에 함수,변수나 속성들을 구분지어주는 문자열이다.

### 특징

- 자바스크립트의 식별자들은 `유니코드 문자`, `$`, `_`, `0부터 9까지의 숫자`들로 이루어질 수 있지만 숫자로 시작할 수 없다
- string은 데이터지만 식별자들은 코드의 일부라는 점에서 다르다.
- 자바스크립트로는 식별자들을 string으로 전환할 수 없지만 [string을 식별자로 parse]()하는 방식은 있다.

## Keywords

### [var](), [let]() , [const]() 비교

| 구분       |                               var                     |                                                              let                   |                const                |
|---- | :-------------------------: | :------------------------------: |  :-------------------------: |                
| 함수 레벨 스코프(Function Level Scope):함수 내부에서 선언한 변수는 지역 변수, 함수 외부에서 선언한 변수는 모두 전역 변수 | 블록 레벨 스코프(Block Level Scope) 코드 블록 내부에서 선언한 변수는 지역 변수이며, 코드 블록 외부에서 선언한 변수는 전역 변수 | 블록 레벨 스코프(Block Level Scope) | 블록 레벨 스코프(Block Level Scope) |
| **Hoisting (호이스팅)**                              |                                            선언과 동시에 `undefined`로 초기화                                            |                             선언만 호이스팅, 값이 할당 되기 전까지는 어떤 값도 초기화 🙅, 접근 🙅                              |            `let`과 동일             |
| **초기값 필수**                                      |                                                            🙅                                                            |                                                               🙅                                                               |                 🙆‍♀️                  |
| **재할당**                                           |                                                            🙆‍♀️                                                            |                                                               🙆‍♀️                                                               |                 🙅                  |
| **글로벌 객체 바인딩 (strict mode가 아니라는 가정)** |                                                            🙆‍♀️                                                            |                                                               🙅                                                               |                 🙅                  |
| **Redeclaration (재선언)**                           |                                                            🙆‍♀️                                                            |                                                               🙅                                                               |                 🙅                  |
|**statement or declaration**|declaration|statement|statement|
## Literals

### WHAT?

> 리터럴은 사람이 이해할 수 있는 문자/약속된 기호를 사용해 값을 생성하는 `표기법(notation)`이다.
> 자바스크립트 엔진은 코드기 실행되는 시점인 `런타임`에 리터럴을 평가해 값을 생성한다.

| 리터럴      |                       예시                        |            비고            |
| ----------- | :-----------------------------------------------: | :------------------------: |
| 정수        |                       `100`                       |                            |
| 부동소수점  |                      `10.5`                       |                            |
| 2진수       |                   `0b010000001`                   |         0b로 시작          |
| 8진수       |                      `0o101`                      | ES6에서 도입 `0o`으로 시작 |
| 16진수      |                      `0x41`                       | ES6에서 도입 `0x`으로 시작 |
| 문자열      |                  `'Hi' "there"`                   |                            |
| 불리언      |                   `true false`                    |                            |
| null        |                      `null`                       |                            |
| undefined   |                     undefined                     |                            |
| 객체        | `{name : 'pyotato',email:'pyotato.dev@gmail.com}` |                            |
| 배열        |                     `[1,2,3]`                     |                            |
| 함수        |                  `function (){}`                  |                            |
| 정규 표현식 |                    `/[A-z]+/g`                    |                            |

## Naming rules

## Related Topics

- [[변수] TDZ (Temporal Dead Zone)](https://github.com/Pyotato/tech_interview/blob/JS/variable/TDZ.md)
- [[변수] const 키워드는 어떤 특징이 있나요?]()
- [[변수] var 키워드는 뭔가요?]()
- [[변수] 식별자란 무엇인가요?](https://github.com/Pyotato/tech_interview/blob/JS/variable/variables.md#vs-identifier%EC%8B%9D%EB%B3%84%EC%9E%90)
- [[변수] 변수란 무엇인가요?](https://github.com/Pyotato/tech_interview/blob/JS/variable/variables.md#what)
- [[변수] 리터럴이 뭔가요?](https://github.com/Pyotato/tech_interview/blob/JS/variable/variables.md#Literals)
- [[변수] let 키워드는 var 키워드와 어떤 점이 다른가요?](https://github.com/Pyotato/tech_interview/blob/JS/variable/variables.md#keywords)

## References

- [mdn Identifier](https://developer.mozilla.org/en-US/docs/Glossary/Identifier)
- [wiki/Literal](<https://en.wikipedia.org/wiki/Literal_(computer_programming)>)
- [ssi02014/Front-Interview](https://github.com/ssi02014/Front-Interview/blob/master/documents/JavaScript/value-literal-statement.md)
- [모던 자바스크립트 Deep Dive](https://www.yes24.com/Product/Goods/92742567)
