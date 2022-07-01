//scope 와 condition을 합해서 사용 가능

let condition = true;
condition = 30 > 6;

let numberFirst = 30;
let numberSecond = 6;

condition = numberFirst > numberSecond;

let conditionSecond = (numberFirst <= numberSecond);
condition = condition || conditionSecond;

if(condition) {
   console.log("in if state");
}

if(!condition) {
    console.log("not in if state");
}

let score = 50;

if(score >= 90){
    console.log("well");
} else if(score >= 50) {
    console.log("good");
} else {
    console.log("not bad");
}

// 동급 : ===

console.clear();