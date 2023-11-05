try {
  // const x ; // const 키워드는 변수 선언시 초기화도 반드시해줘야 에러가 나지 않음
  console.log("블록 범위의 스코프를 갖는 x 호출하기 : ", x); // 선언 전에 호출 시 에러 (선언은 호이스팅되었는데 초기화를 해주지 않았기 때문에 접근을 하려고 하면 TDZ에 도달해서 에러 발생)
  const x = 1;
} catch (e) {
  console.log("reached TDZ", e);
}
