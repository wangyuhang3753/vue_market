const express=require('express')
const main=express.Router()
main.get('/',(req,res)=>{
    res.send('ok')
})
main.post('/register',require('./register'))
module.exports=main
