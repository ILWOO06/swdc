function sleep(t){
    return new Promise(resolve=>setTimeout(resolve, t*1000));
}

(async()=>{
    console.log("까")
    await sleep(3);
    console.log("꿍")
})();


