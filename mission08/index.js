let num=0
while(num<10){
    console.log(num)
    num=num+1;
}

for(let num=0;num<10;num=num+1){
    console.log(num);  
}

let numbers=[0,1,2,3,4,5,6,7,8,9];
for(let number of numbers){
    console.log(number);
}

let dog={
    name: '흰둥이',
    sound: '멍멍',
    age:1
};

for(let key in dog){
    console.log(`${key}: ${dog[key]}`)
}