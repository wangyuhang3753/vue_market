const Sequelize=require('sequelize');
const { ModuleFilenameHelpers } = require('webpack');

const sequelize=new Sequelize('login','root','123456',{
        'host':'localhost', //地址
        'dialect':'mysql', //指定数据库
        'port':3306     //数据库端口 
})
//数据库连接
sequelize.authenticate()
//连接成功
.then(()=>{
    console.log('数据库连接成功!');
})
//连接失败
.catch(err=>{
    console.log(err);
})
module.exports={Sequelize,sequelize}