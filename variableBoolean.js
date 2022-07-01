// false : 0, null, NaN, undefined, ''
// true : 1, any others value

let flag = true; //1
flag = false; //0

let condition = 20 > 5; //true, boolean
condition = 20 < 5;

let conditonFirst = 15 > 5;
let conditionSecond = 15 > 7;

// ||(or),  &&(and), !(not)
let result = conditonFirst || conditionSecond;
result = conditonFirst && conditionSecond;
!result;
console.clear();