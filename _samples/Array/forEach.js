const arr = ["a", "b", "c"];

arr.forEach((e) => console.log(e));

console.table(arr);

//for ... of

for (let i of arr) {
  console.log(i);
}

//for ... in

for (let i in arr) {
  console.log(i);
}

// synced

const join = async (a, b) => a + b;
let str = "";
arr.forEach(async (e) => {
  str = await join(str, e);
});

console.log("str: ", str);

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

// thisArg 사용

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
