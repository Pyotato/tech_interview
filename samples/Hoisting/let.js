// // let x;
// // console.log("변수선언만", x); //undefined
// // let x = 1;//const로 선언한 변수와 마찬가지로 블록 범위의 스코프를 갖기 때문에 재선언 시 에러가 발생한다.
// // console.log("호이스팅", x); //블록 범위의 변수 아래의 x를 선언 전에 접근하려했기 때문에 에러 발생
// // let x = 1;
// {
//   // let x; //console.log("변수 선언만", x); //변수 선언만 undefined
//   let x = 1;
//   console.log("변수 선언과 할당(초기화)", x); //1
// }
// // console.log("변수 선언과 할당(초기화)", x); //error : let으로 선언한 변수는 블록 범위 스코프를 가짐
// console.log("호이스팅", x); // 에러 ! tdz ! 초기화 전에는 접근할 수 없음!

let x1; // 선언만
console.log("변수선언만", x1); //undefined
let x = 1; // 선언 & 초기화
console.log("초기화", x); // 1
