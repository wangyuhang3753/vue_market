const http=require('http')
const fs=require('fs')
const url = require('postcss-url')
const path = require('path')
const url=require('url')
const server=http.createServer()
let readFile=(url,res)=>{
    //__dirname表示当前文件夹
    fs.readFile(path.join(__dirname,'www',url),'utf8',(err,fileContent)=>{
        if(err)
        {
            res.end('页面被粗鲁的沸羊羊摧毁了')
        }
        else{
            res.end(fileContent)
        }
    })
}
server.on('request',(req,res)=>{
    // 获取url的各个变量的参数
    // let obj=url.parse(req.url,true);
    // obj.query.username; obj.query.password;
    //setHeader 设置响应类型和编码
    res.setHeader('Content-Type','text/plain;charset=utf-8')
    // console.log('收到客户端的请求了,请求路径是：'+require.url);
    //req.url可以获取端口号之后的部分url的值
    const url=req.url
    if(url==='/'){
        res.end('index首页')
    }
    else if(url==='/login'){
        res.end('login登录')
    }
    else if(url==='/register')
    {
        res.end('register注册')
    }
    else if(url==='/product')
    {
        var product=[
            {
                name:'苹果X',
                price:'1999'
            },
            {
                name:'苹果X',
                price:'1999'
            },
            {
                name:'苹果X',
                price:'1999'
            },
            {
                name:'苹果X',
                price:'1999'
            }
        ]
        res.end(JSON.stringify(product))
    }
    //通过url响应不同资源
    //一定要结束，否则服务器会一直等待
})
//绑定端口号2,启动服务器
//可以同时开启多个服务,但要保证端口号不重复，选用3000,5000这种没有特殊含义的
//server.listen方法的第一个参数是端口号，第二个是ip地址，第三个是回调函数
server.listen(3000,'10.84.198.118',()=>{
    console.log('服务器启动成功了,可以通过http://10.84.198.118:3000/来访问');

})