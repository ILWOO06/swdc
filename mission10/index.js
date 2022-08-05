const nums=[1,2,3,4,5]
const numsmap=nums.map(val=>val*2)
console.log(ni=numsmap)

const fruits=['banana',"apple","lemon","watermelon"]
const fruitsFilter=fruits.filter(word=>word.length>5)
console.log(fruitsFilter)

const numbers=[1,2,3,4,5];
const numbersSum = numbers.reduce((acc,cur)=>{
    console.log(acc,cur);
    return acc+cur;
},0);  
console.log(numbersSum)