const {user}=require('../model/user')
module.exports=async(req,res)=>{
    //接受客户端传递过来的信息
    const{username,userpassword}=req.query
    console.log(username,userpassword);
    //根据客户端传递过来的 用户名 查询 数据库 中 是否存在这用户名
    //---bodyParser.json()--解析JSON格式
    // ---bodyParser.raw()--解析二进制格式
    // ---bodyParser.text()--解析文本格式
    // ---bodyParser.urlencoded()--解析文本格式
    const findUser=await user.findOne({where:{username}})
    //创建用户
    const createUser=await user.create({username,userpassword}).then((username)=>{
            console.log(username);
    }).catch(err=>{
        console.log(err);
    })
    if(findUser){
        res.status(400).send({
           data:null,
           meta:{
               msg:"用户已存在",
               status:400
           }
        })
        return
    }
    if(findUser){
        if(username!=findUser.user_name||password!=findUser.user_password){
            res.status(400).send({
                data:null,
                meta:{
                    msg:"用户名或者密码错误",
                    status:400
                }
            })
        }
    }
   
    res.status(201).send({
        data:{
            createUser
        },
        meta:{
            msg:"创建成功",
            status:201
        }
    })
}