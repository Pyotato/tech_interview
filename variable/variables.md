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

### var, let , const 비교

## Literals

>

## Naming rules

## Related Topics

- [[변수] TDZ (Temporal Dead Zone)](https://github.com/Pyotato/tech_interview/blob/JS/variable/TDZ.md)
- [[변수] const 키워드는 어떤 특징이 있나요?]()
- [[변수] var 키워드는 뭔가요?]()
- [[변수] 식별자란 무엇인가요?](https://github.com/Pyotato/tech_interview/blob/JS/variable/variables.md#vs-identifier%EC%8B%9D%EB%B3%84%EC%9E%90)
- [[변수] 변수란 무엇인가요?]()
- [[변수] let 키워드는 var 키워드와 어떤 점이 다른가요?]()

## References

- [mdn Identifier](https://developer.mozilla.org/en-US/docs/Glossary/Identifier)
- [wiki/Literal](<https://en.wikipedia.org/wiki/Literal_(computer_programming)>)
- [ssi02014/Front-Interview](https://github.com/ssi02014/Front-Interview/blob/master/documents/JavaScript/value-literal-statement.md)
