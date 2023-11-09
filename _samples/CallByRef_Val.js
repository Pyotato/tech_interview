// call by val 예시
let num = 1;

const increment = (x) => {
  x++;
};

increment(num);
console.log("call by value : ", num); // 1

// call by ref 예시

const person = { name: "Bob" };

const setName = (person) => {
  person.name = "Alice";
};

setName(person);
console.log("call by reference: ", person.name); // 'Alice'

//

const spreadPerson = { name: "Bob" };

// depth1 예제
const setSpreadPersonName = (person) => {
  const copiedPerson = { ...person };

  copiedPerson.name = "Alice";
};

setSpreadPersonName(spreadPerson);
console.log("spread 연산자를 통해 깊은 복사 :  ", spreadPerson.name); // 'Bob'

// 완전 깊은 복사 예제
const completeDeepCopyPerson = { info: { name: "Bob" } };

// depth1
const setCompleteDeepCopyName = (person) => {
  const copiedPerson = { ...person };

  copiedPerson.info.name = "Alice";
};

setCompleteDeepCopyName(completeDeepCopyPerson);
console.log(completeDeepCopyPerson.info.name); // 'Alice'
