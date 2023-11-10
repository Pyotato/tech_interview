let num = 1;

const increment = (x) => x++;

console.log("call by value : ", num); // 1

const modify = (x) => {
  let modified = x;
  modified++;
  return modified; // 내부 스코프에 복사한 args 값+1
};
num = modify(num);

console.log("call by value (modify): ", num); // 1
