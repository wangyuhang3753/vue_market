const http=require('http');
const url=require('url');
const mysql=require('mysql');
const { rootCertificates } = require('tls');
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'login',
    port:'3306'
})
connection.connect();
            connection.query('select * from login_info where user_name=\'汪宇航\' and user_password=\'123456\'',(err,res)=>{
                if(err)
                {
                    console.log(err);
                }
                else{
                    console.log(res);
                    
                }
            })
            connection.end();

const server =http.createServer()
server.on('requeset',(req,res)=>{
    const url=req.url;
    if(url.startsWith('/login')){
        //get请求
        
        //post请求
        if(req.method=='POST')
        {
            
        }
    }
})
server.listen(3000,'10.84.198.118',()=>{
    console.log('服务器已启动,可以通过http://10.84.198.118:3000/来访问');
})