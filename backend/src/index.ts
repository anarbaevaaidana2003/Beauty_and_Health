import express from 'express';
const expressApp=express();
expressApp.get('/hello',(req,res)=>{
    res.send('hi')
})
expressApp.listen(3000,()=>{
    console.info('Listening at http://localhost:3000')
})