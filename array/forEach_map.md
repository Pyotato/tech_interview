# ForEach vs Map

## Map vs ForEach

|  내용  |     ForEach      |                                                                   Map                                                                   |
| :----: | :--------------: | :-------------------------------------------------------------------------------------------------------------------------------------: |
| 리턴값 | 없음 (undefined) | 새로운 배열 (callbackFn가 배열 원소 각각에 실행된 결과값을 담은 배열), 리턴값 없이 사용할 거면 `forEach`나 `for (원소) of` 를 사용 권장 |
| 제네릭 |        🙆        |                                                                   🙆                                                                    |

## ForEach : WHAT?

> Array 인스턴스의 메소드 중 하나로 배열의 각 원소들에 한번 함수를 실행시켜주는 리턴값이 없는 함수

> - `forEach(callbackFn)`
> - `forEach(callbackFn, thisArg)`

- `callbackFn` : 각 배열의 원소에 실행할 함수.
- `thisArg` : `callbackFn` 실행 시 `this`로 쓰이는 값.
- 쓰임 `forEach(callbackFn)`

  ```js
  const arr = ["a", "b", "c"];

  arr.forEach((e) => console.log(e));
  ```

- 쓰임 `forEach(callbackFn,thisArg)` :`this`rk 파람으로 전달되기 떄문에 각 `callback` 함수가 실행될 때 전달된다.

  ```js
  class Counter {
    constructor() {
      this.sum = 0;
      this.count = 0;
    }
    add(array) {
      // 함수 표현식만 자신만의 `this`바인딩을 가짐
      array.forEach(function countEntry(entry) {
        this.sum += entry;
        ++this.count;
      }, this);
    }
  }
  const myCounter = new Counter();
  myCounter.add([3, 6, 7]);
  console.log("myCounter.count: ", myCounter.count); // 3
  console.log("myCounter.sum", myCounter.sum); // 16
  ```

- 특징

  - 체이닝이 불가능하다.
  - 리턴값이 항상 `undefined`이다.
  - [제네릭]() 이므로 `this`값이 `length`와 `정수 key` 프로퍼티를 요구한다.
  - 예외처리를 하지 않는 이상, forEach() 루프를 멈추거나 빠져나갈 방법은 없다.
    - 만약 조기 중단을 원한다면 `for`, `for (원소) of`, `for (원소) in`방식ㄷ르을 활용해야한다.
    - 특정 시점에서 루프가 중단하기를 원한담ㄴ `every()`, `some()`, `find()`, `findIndex()`를 활용할 수 있다.
  - `callbackFn`은 배열의 원소값이 있는 경우에만 실행된다. (빈 원소 실행 X)
  - 호출한 배열을 변경하지 않지만 `callbackFn`은 변경가능
  - `callbackFn` 호출하기 전에 배열의 길이가 저장되므로

    - 초기 호출된 배열에 추가된 값이 생성되더라도 해당 원소들에 `callbackFn`가 실행되지 않는다.
    - 이미 `callbackFn`가 실행된 배열 원소들이 변경되더라도 `callbackFn`가 재호출되어 실행되지 않는다.
    - 아직 방문하지 않은 배열 원소가 `callbackFn`에 의해 변경되었더라면 `callbackFn`에 전달되는 값은 방문될 때의 값이 전달된다. 삭제된 값들은 방문하지 않는다. (다만 동시에 값을 변경하면서 forEach를 사용하는 건 혼동을 일으킬 수 있으므로 권장하지 않는다.)

    ```js
    // 빈 원소가 있는 배열
    const sparse_arr = ["a", "b" /** empty */, , "d"];
    let numCallbackRuns = 0;
    sparse_arr.forEach((e) => {
      console.log({ e });
      numCallbackRuns++;
    });
    console.log({ numCallbackRuns });
    // { e: 'a' }
    // { e: 'b' }
    // { e: 'd' }
    // { numCallbackRuns: 3 }
    ```

    - `동기적으로 실행하는 함수`이므로 [promise]()를 기다리지 않는다.

      ```js
      const join = async (a, b) => a + b;
      let str = "";
      arr.forEach(async (e) => {
        str = await join(str, e);
      });

      console.log("str: ", str); // ""
      ```

## Map : WHAT?

> Array 인스턴스의 메소드 중 하나로 호출한 배열의 각 원소들에 한번 함수를 실행시켜주고 새로운 배열을 생성하는 함수

> - map(callbackFn)
>   - 배열의 각 원소에 실행되어 새로운 배열의 원소 하나가 리턴 값으로 추가된다.

```js
    const array1 = [1, 4, 9, 16];
    const map1 = array1.map((x) => x \* 2);
    console.log(map1);
    console.table(map1)
```

> - map(callbackFn,thisArg)

- 특징

  - 복사 메소드다(copying method).
  - `this`값을 변경하지 않는다. 하지만 `callbackFn`에 의해 배열 변경이 가능하다.
  - `callbackFn` 호출돼 실행 이전에 배열의 길이가 저장된다
    - 따라서, map()시작점에 배열에 추가된 원소들은 방문하지 않는다.
    - 이미 방문한 원소들은 `callbackFn`가 다시 호출/실행되지 않는다.
    - `callbackFn`

## Related Topics

- [제네릭(generic)]()
- [합성 함수 (프로미스 합성)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#composition)
- [promise]()

## References

- [mdn Array.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [mdn Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
