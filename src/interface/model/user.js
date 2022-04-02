const{Sequelize,sequelize}=require ('../database/init')
const user=sequelize.define('login_info',{
    username:{
        field:'user_name',
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
        
    },
    userpassword:{
        field:'user_password',
        type:Sequelize.STRING,
        allowNull:false,
    },
},
{
    tableName:'login_info'
}

);
//同步模型
user.sync().then(()=>{
    console.log('模型同步成功');
})
module.exports={user}