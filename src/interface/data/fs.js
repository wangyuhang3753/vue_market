const fs=require('fs')
var mkdir=require('mkdir')
var path='./upload'
fs.stat(path,function(err,data){
    if(err){
        mkdir(path,(err)=>{
          if(err){
              console.log(err);
          }    
        });
        return;
    }
    if(data.isDirectory()){
        console.log('upload文档已存在!');
    }
    else{
        fs.unlink(path,function(err){
            if(!err){
                mkdir(path)
            }
            else{
                console.log('err');
            }
        })
    }
})