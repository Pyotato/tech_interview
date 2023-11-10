# SCOPE : Definition

## WHAT?

> scope라는 단어의 뜻은 '어떠한 것이 유관한 범위'다. 즉 변수가 유효(참조가능한) 범위다.
>
> - 자바스크립트의 관점에서는
>   - `전역스코프 (Global scope)` : 코드 어디에서든 참조 가능
>   - `지역스코프 (Local/Function-level)` : 함수 코드 블록이 만든 스코프, 함수 자신과 하위 함수에서만 참조 가능
> - 변수의 관점에서는
>   - `전역 변수 (Global scope)` : 전역에서 선언된 변수, 어디에든 참조 가능
>   - `지역 변수 (Local/Function-level)` : 지역 내에서 선언된 변수, 그 지역과 그 하위 지역에서만 참조 가능한 변수

## Type : [전역 스코프](https://github.com/Pyotato/tech_interview/blob/JS/scope/types.md#%EC%A0%84%EC%97%AD-%EC%8A%A4%EC%BD%94%ED%94%84), [함수 레벨 스코프](https://github.com/Pyotato/tech_interview/blob/JS/scope/types.md#%ED%95%A8%EC%88%98-%EB%A0%88%EB%B2%A8-%EC%8A%A4%EC%BD%94%ED%94%84), [블록 레벨 스코프](https://github.com/Pyotato/tech_interview/blob/JS/scope/types.md#%EB%B8%94%EB%A1%9D-%EB%A0%88%EB%B2%A8-%EC%8A%A4%EC%BD%94%ED%94%84), [렉시컬 스코프(Lexical Scope)](https://github.com/Pyotato/tech_interview/blob/JS/scope/types.md#%EB%A0%89%EC%8B%9C%EC%BB%AC-%EC%8A%A4%EC%BD%94%ED%94%84lexical-scope-cf-dynamic-scope)

## Related Topics

- [Closure]()

## References

- [scope wikipedia](<https://en.wikipedia.org/wiki/Scope_(computer_science)>)