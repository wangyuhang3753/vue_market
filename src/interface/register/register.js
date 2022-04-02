const express= require('express')
const router=express.Router()
const app=new express()
router.get('/',(req,res)=>{
    res.send('hello world')
})

app.use(router)

app.listen(3000,()=>{
    console.log('server listen at 3000')
})