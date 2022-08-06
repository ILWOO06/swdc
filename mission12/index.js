function add(length){
    if(length<10){
        return `0${length}`
    }else{
    return `${length}`
    }
}
var now = new Date();
var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();

console.log(`${add(hours)}:${add(minutes)}:${add(seconds)}`)