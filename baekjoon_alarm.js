const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) { // 문자열 입력 받기
    // 입력 시 동작들
    const words = line.split(' '); // 입력 받은 문자열 쪼개기
    const A = parseInt(words[0]); // 쪼갠 문자열 + 문자열을 숫자로 변환
    const B = parseInt(words[1]);
    //console.log(A+B); // 연산 + 출력

    const seconds = (+A) * 60 * 60 + (+B) * 60; 
    const num = 2700;
    console.log(seconds);
    const alarm = seconds - num;
    console.log(alarm);

    const hour = parseInt(seconds/3600);
    const min = parseInt((seconds%3600) / 60);


    rl.close(); // 종료
}).on("close", function() {
    // 입력 마친 후 동작
    process.exit(); // 프로그램 종료
});1.