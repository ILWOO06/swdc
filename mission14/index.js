const express = require("express");
const bodyParser = require("body-Parser");
const { response } = require("express");

const app= express();

app.get('/',function(req,res){
    res.send("hellow getMethod");
    console.log(items)   
});

app.post("/", function(req,res) {
    res.send('hellow postMethod')
})

app.patch("/", function(res,req) {
    res.send("hellow patchMethod")
})

app.delete("/", function(res,req) {
    res.send("hellow deleteMethod")
})