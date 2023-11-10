import _ from "lodash";
import user from "./JSON.json" assert { type: "json" };
const copyUser = _.cloneDeep(user);
console.log(copyUser === user); // false

user.info.age = 22;
console.log("user", user);
// user {
//     info: { name: 'Bob', age: 22, email: [ 'spongeBob@squarePants.com' ] },
//     info_type: 'introduction'
//   }
console.log("copyUser", copyUser);
// copyUser {
//     info: { name: 'Bob', age: '32', email: [ 'spongeBob@squarePants.com' ] },
//     info_type: 'introduction'
//   }
user.info.email.push("second@mail.com");
console.log(user.info.email === copyUser.info.email); // false
console.log("user", user);
// user {
//     info: {
//       name: 'Bob',
//       age: 22,
//       email: [ 'spongeBob@squarePants.com', 'second@mail.com' ]
//     },
//     info_type: 'introduction'
//   }

console.log("copyUser", copyUser);
// copyUser {
//     info: { name: 'Bob', age: '32', email: [ 'spongeBob@squarePants.com' ] },
//     info_type: 'introduction'
//   }
