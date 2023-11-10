const person = { name: "Bob" };

// depth1 예제
const setName = (person) => {
  const copiedPerson = { ...person };

  copiedPerson.name = "Alice";
};

setName(person);
console.log(person.name); // 'Bob'

// depth2 예제

const depth2person = { info: { name: "Bob" } };

// depth1
const setNameDepth2 = (person) => {
  const copiedPerson = { ...person };

  copiedPerson.info.name = "Alice";
};

setNameDepth2(depth2person);
console.log(depth2person.info.name); // 'Alice'
