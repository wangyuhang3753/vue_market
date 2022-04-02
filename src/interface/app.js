const express=require('express')
const app=express()
app.all('*', function(req, res, next) {
    //设为指定的域
    res.header('Access-Control-Allow-Origin', "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header('Access-Control-Allow-Credentials', true);
    res.header("X-Powered-By", ' 3.2.1');
    next();
  });
// const bodyParser=require('body-parser')
const main=require('./router/main')
//接受post请求数据 req.body
app.use(express.urlencoded({extended:false}))
require('./database/init')
require('./model/user')
app.use('/api',main)
app.listen(3000,'10.84.198.118',()=>{
    console.log('服务器已启动,可以通过http://10.84.198.118:3000/来访问');
})