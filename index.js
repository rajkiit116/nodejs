const express = require('express');
const app = express();
app.use((req,res,next)=>{
    res.setHeader('x-server-date', new Date().toString());
    return next();

})
app.get('/',(req,res,next)=>{
    return res.send('Hello i am a webserver');
});
app.get('/time',(req,res,next)=>{
    return res.send(new Date().toString());
});
app.get('/hello',(req,res,next)=>{
    if(!req.rquey.name){
        res.status(400).end();
    }
    return res.send('user Profile Of ${req.query.name}');
});
app.get('/user/:name',(req,res,next)=>{
    return res.send('user Profile Of ${req.params.name}')
});

app.listen(3000);