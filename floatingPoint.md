# 부동소수점 계산 오류

## WHAT?

> 컴퓨터가 숫자(이진법 : 0 과 1)를 표현하는 방식과 우리가 숫자로 표현하는 방식(10진법)이 다르다. 따라서 소수점을 표현할 때도 아래와 같은 문제들을 맞이 할 때가 있다.

```js
let x = 0.1;
let y = 0.2;
console.log(x + y === 0.3); // false
console.log(new BigNumber(x + y)); // 0.30000000000000004
```

## WHY?

> 내부적으로 `64비트 형식(IEEE-754)`로 숫자를 표현하는 자바스크립트(52비트의 정수부+11비트의 소수점 위치+1개의 양음수 표현 부호)한다.
>
> - 2를 이진수로 표현하면 10<sub>(2)</sub>으로 표현이 가능하지만, 0.2를 표현하기 위해서는 아래와 같이 무한 소수로 표현이 되어 오차가 발생한다.

```
    0  .  0   0     1  1
   (+) .                                            => 0.
          -
          0.2*2 = 0.4 의 정수 부분은 0              => 0
              -
              0.4*2 = 0.8 의 정수 부분은 0          => 0
                    -
                    0.8*2 = 1.6의 정수 부분은 1     => 1
                        -
                        0.6*2 = 1.2의 정수부분은 1  => 1

(반복이므로 생략)

```

따라서 `64비트 형식(IEEE-754)`로만 숫자를 표현하려는 경우 오차로 인한 계산 오류가 발생한다.

## [Solution](https://github.com/Pyotato/tech_interview/blob/JS/samples/floatingPoint.js)

> 정수부로만 이루어져 있다고 생각하고 계산을 한 뒤 소수점을 입혀주기

- `toFixed()` 사용

  ```js
  console.log((x + y).toFixed(1)); // '0.3'
  ```

  - 이 방법을 사용하면 인자로 소수점 몇 자리로 표현할 지를 String 타입으로 반환해준다.

- `Math 매서드` 사용

  ```js
  console.log(Math.round((x + y) * 10) / 10); // 0.3
  ```

  - `Math.floor`, `Math.ceil`, `Math.trunc`,` Math.round` 등의 매서드들을 활용할 수 있다.

- `라이브러리` 사용
  - Big.js(더 작고 간단한 라이브러리가 필요할 경우), [BigNumber.js](https://github.com/MikeMcl/bignumber.js), Decimal.js(정수가 아닌 지수 지원해줌, 매우 큰 단위의 수를 다룰 때 사용하기 좋음) math.js 등이 있다.
  - 그중 아래는 [BigNumber.js를 활용해본 예](https://github.com/Pyotato/tech_interview/blob/JS/samples/floatingPoint.js#L17C1-L17C61)다.
    ```js
    console.log(new BigNumber(x).plus(new BigNumber(y))); // 0.3
    ```

## References

- [💻 자바스크립트 부동소수점 계산 문제](https://github.com/ssi02014/Front-Interview/blob/master/documents/JavaScript/floating-point.md)
- [bignumber.js readme](https://github.com/MikeMcl/bignumber.js)
