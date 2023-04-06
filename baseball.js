const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const random_number1 = Math.floor(Math.random() * 10);
let random_number2 = Math.floor(Math.random() * 10);
let random_number3 = Math.floor(Math.random() * 10);

// 3개의 랜덤번호를 만듬 
while(random_number1 === random_number2) {
  random_number2 = Math.floor(Math.random() * 10);
};
while(random_number1 === random_number3 || random_number2 === random_number3) {
  random_number3 = Math.floor(Math.random() * 10);
};

let tries = 1;
let strikes = 0;
let balls = 0;

function fornodejs_func(user_input) {
  let user_number1 = parseInt(user_input.charAt(0));
  let user_number2 = parseInt(user_input.charAt(1));
  let user_number3 = parseInt(user_input.charAt(2));

  strikes = 0;
  balls = 0;
  if(user_input.length > 3 || user_input.length < 3) {
    console.log('범위 밖의 숫자를 입력하셨습니다. 3자리의 숫자를 입력해주세요')
    rl.question(`${tries}번째 시도:`, fornodejs_func);

  } else {
  if(user_number1 === random_number1) {
    strikes ++; 
  } else if(user_number1 === random_number2 || user_number1 === random_number3) {
    balls ++;
  }

  if(user_number2 === random_number2) {
    strikes ++; 
  } else if(user_number2 === random_number1 || user_number2 === random_number3) {
    balls ++;
  }

  if(user_number3 === random_number3) {
    strikes ++; 
  } else if(user_number3 === random_number1 || user_number3 === random_number2) {
    balls ++;
  }

  console.log(`${balls}:B ${strikes}:S `);
  tries ++;

  if(strikes === 3) {
    console.log(`당신은 ${tries}번째에 맞추셨습니다. 축하드립니다.`);
    rl.close();
  } else {
    rl.question(`${tries}번째 시도:`, fornodejs_func);
  }
}
}




rl.question(`${tries}번째 시도:`, fornodejs_func);

//r1.question("" , 함수실행 및 매개함수) 으로 첫 시작을 할 수 있으며, 입력값을 받을 수 있음
//rl.close 는 while문의 break와 같다
