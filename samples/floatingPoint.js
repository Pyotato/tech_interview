import BigNumber from "bignumber.js";
let x = 0.1;
let y = 0.2;

// 부동소수점 오차!
console.log(x + y === 0.3); // false

// toFixed()사용하기
const TOFIXED = (x + y).toFixed(1);
console.log(typeof TOFIXED, TOFIXED); // string '0.3'
console.log(Number(TOFIXED)); // 0.3

// Math 매서드 사용하기
console.log(Math.round((x + y) * 10) / 10); // 0.3

// BigNumberjs 사용해보기
console.log(new BigNumber(x).plus(new BigNumber(y))); // 0.3
