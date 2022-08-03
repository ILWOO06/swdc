var a=18   //재선언O
const b=19 //상수, 값 변경 불가
let c=20   //재할당 가능, 재선언 불가능 

function sum1(a,b){
    return a+b;
}

const sum2=(a,b)=> a+b;

console.log(sum1(1,2))
console.log(sum2(1,2))