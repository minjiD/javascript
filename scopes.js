//var - 자유도가 높은 변수 선언 - 사용X

let varFirst = 1;
console.log(varFirst);

{
    var varSecond = 2;
    console.log(varSecond);
}
console.log(varSecond);
{
    let varThird = 3;
    console.log("Third - First : " + varThird);
}
console.log("Next");
{
    let varThird = 4;
    console.log("Third - Second : " + varThird);
    {
        console.log("Third : " + varThird);
        let varFifth = 5;
        console.log("Fifth : " + varFifth);
        //console.log("First : " + varFirst);
    }
    console.log("Thire - fourth : " + varThird);
}
console.log("End");

//function  - 함수