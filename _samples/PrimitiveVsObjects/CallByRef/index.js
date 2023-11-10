const person = { name: "Bob" };

const setName = (person) => {
  person.name = "Alice";
};

setName(person);
console.log("call by reference: ", person.name); // 'Alice'

const other = { ...person };
console.log(other === person); //false
