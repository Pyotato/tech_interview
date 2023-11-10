import data from "./JSON.json" assert { type: "json" };
console.log(data);
const patrick = { ...data }; // 복사
console.log(patrick === data); // false

const setName = (person) => {
  const copiedPerson = { ...person };

  copiedPerson.info.name = "Patrick";
};

setName(patrick);
console.log("Patrick", patrick.info.name);
console.log("Bob :", data);
