<template>
  <div id="profile">
        <div >
      <img id="img" src="http://pic1.zhimg.com/50/v2-cd0e7279f9c0bc66156309d5cbe57ed9_hd.jpg" alt="">
    </div>
    <div id="register">


     <!-- <scroll class="content"> -->
      <div>
      <div>
        <span>用户名: </span><input id="username" autocomplete="true" placeholder="请输入账号" type="text"/><br>
      </div>
      <div id="userpass">
        <span>密&nbsp; 码：</span><input id="password" autocomplete="true" placeholder="请输入密码" type="text"/><br>
      </div>
      <div>

      <button id="btnsummit"  @click="btnsum"  value="登录"/>        
      </div>       
      </div>
    
    </div>
    <!-- </scroll> -->
  </div>
</template>

<script type="text/javascript">
  // import Scroll from 'components/common/scroll/Scroll'
   import {register} from '../../network/register'
  export default {
    name: "Profile",
    data(){
      return {

      } 
    },
    methods:{
        btnsum(){
          let username=(document.getElementById('username').value);
          let userpassword=(document.getElementById('password').value);
          console.log(username);
          console.log(userpassword);
          const params={
            username:String(username),
            userpassword:String(userpassword)
          }
          register(params).then(res=>{
            console.log(res);
          }).catch(err=>{
            console.log(err);
          })
        }
    }
  
    // components: {
    //   Scroll
    // }
  }
</script>

<style scoped>
*{
  margin: 0px;
  padding: 0px;
}
#register{
   padding: 50px;
   width:350px ;
   position: absolute;
   top: 30%;
   left: 50%;
   transform: translate(-50%,-50%);
   font-size: 15px;
   color: black;
}
#profile{
  height: 100vh;
}
#password{
  margin-top: 15px;
}
#btnsummit{
  margin:20px 80px 0px 80px;
  font-weight: bold;
  line-height: 24px;
  color: white;
  background-color: purple;
  border-radius: 10px;
  width: 80px;
  height: 28px;
}
#img{
  position: absolute;
  top: 40px;
  left: 150px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
}
</style>
