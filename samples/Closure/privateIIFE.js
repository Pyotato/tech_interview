const counter = (function () {
  // 익명 함수를 통해 생성된 공유된 렉시컬 환경
  let privateCounter = 0; // 외부에서 접근 불가능한 private 변수
  function changeBy(val) {
    // 외부에서 접근 불가능한 private 함수
    privateCounter += val;
  }

  return {
    increment() {
      // public 함수 (익명 wrapper에 의해 리턴됨)
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },

    value() {
      return privateCounter;
    },
  };
})(); // 즉시 실행함수

console.log(counter.value()); // 0.

counter.increment();
counter.increment();
console.log(counter.value()); // 2.

counter.decrement();
console.log(counter.value()); // 1.
