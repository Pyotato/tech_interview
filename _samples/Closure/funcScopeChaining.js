// 전역 스코프
const e = 10;
function sum(a) {
  return function sum2(b) {
    return function sum3(c) {
      // 외부 함수 스코프
      return function sum4(d) {
        // 지역 스코프
        return a + b + c + d + e;
      };
    };
  };
}

const sum2 = sum(1);
const sum3 = sum2(2);
const sum4 = sum3(3);
const result = sum4(4);
console.log(result); // 20
