# DOCTYPE

## WHAT?

> DOCTYPE은 **Doc**ument **Type**의 약자로 HTML의 어떤 버전으로 작성되었는 지를 미리 선언해서 웹브라우저가 내용을 올바르게 표시하도록 해주는 것
![Chrome's element of 'https://github.com/Pyotato/tech_interview/edit/HTML/DOCTYPE.md'](https://github.com/Pyotato/tech_interview/assets/102423086/88bee1cc-5eb6-4b5d-a323-48f0c537f6f7)

> 위와 같이 개발자도구를 열어보면 `<!DOCTYPE html>` 으로 선언을 해주는 걸 볼 수 있다. 철자 대소문자는 무관함.

## WHY?
[**호환모드(quirks mode)**](https://github.com/Pyotato/tech_interview/edit/HTML/DOCTYPE.md#Quirks_mode)로 동작하지 않게 하기 위해서. doctype을 명시하지 않으면 호환모드로 동작하게 되는데 호환모드는 strictmode에서 처럼 W3C에서 명세한 코드 작성법과 어긋난 코드 에러를 더 엄격히 체크하지 않고 옛날 브라우저 버젼에 호환성을 고려한다.
이러한 느슨한 코드 체크와 HTML5를 지원하지 않는 브라우저의 경우, html 버전에 대한 혼란을 일으킬 수 있고, 특정 태그들이 반응을 하지 않아 잘못된 디스플레이를 할 수 있다. 따라서 [크로스 브라우징 호환성](https://github.com/Pyotato/tech_interview/edit/HTML/CrossBrowsingIncompatibility.md) 이슈가 커질 수 있다. 

### DTD (Document Type Definition)
#### WHAT ?
>  HTML 문서가 어떤 문서 형식을 따르는 지 DOCTYPE에서 문서 형식을 정의해 놓은 것
#### WHY?
* 웹역사를 따지면 페이지는 두가지 버전으로 작성이 되었었는데, `Netscape Navigator`용과 `Microsoft Internet Explorer`용으로 나눠졌었음. W3C에 의해 웹표준이 만들어지던 당시 브라우저는 그냥 이 표준을 따를 수 없었음 (레거시 사이트들이 오작동할 수 있었으므로).
* 이제는 웹브라우저 레이아웃 엔진들이 사용하는 모드는 **3가지**이다.
    * quirks mode : Navigator4와 Internet Explorer 5에서 주로 동작. 웹표준 도입이 시작되기 전에 만들어진 웹사이트들을 지원하기 위해 필요함
    * limited-quirks mode : 호환성을 위한 몇 가지 기능들이 있음
    * **no-quirks mode**:  현대 HTML와 CSS 표준에 맞게 동작
### HOW?
* HTML4.01 선언 방법 3가지
  |선언 방식|HTML 요소 & 속성 포함|정식 X 요소 포함|프레임셋(frameset) 허용|
  |-------------------|--|---|---|
  |`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">`|O|X|X|
  |`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">`|O|O|X|
  |`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">`|O|O|O|
* HTML5에서 DOCTYPE 선언 방법
  ```
  <!DOCTYPE html>
  ```
## Related Topics
* [XHTML]()

## References
* [크로스브라우징 문제들](https://www.browserstack.com/guide/common-cross-browser-compatibility-issues)
* [Quirks mode & standard mode mozilla docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)
* [HTML <!DOCTYPE> Declaration](https://www.w3schools.com/tags/tag_doctype.ASP)

