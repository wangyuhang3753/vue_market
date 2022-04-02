<template>
    <div v-if="Object.keys(goods).length!==0" class="base-info">
        <div class="info-title">
            {{goods.title}}
        </div>
        <div class="info-price">
            <span class="n-price">{{goods.newPrice}}</span>
            <span class="o-price">{{goods.oldPrice}}</span>
            <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
        </div>
        <div class="info-other">
            <span>{{goods.columns[0]}}</span>
            <span>{{goods.columns[1]}}</span>
            <span>{{goods.services[goods.services.length-1].name}}</span>
        </div>
        <div class="info-service">
            <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
                    <img :src="goods.services[index-1].icon" alt="">
                    <span>{{goods.services[index-1].name}}</span>
            </span>
        </div>
    </div>
</template>
<script>
export default {
    name:'detailInfo',
    props:{
        goods:{
            type:Object,
        }
    }
}
</script>
<style scoped>
.info-service-item img{
    position: relative;
    top: 1px;
    left: 3px;
}
.info-price{
    margin-top: 10px;
}
.info-service{
    display: flex;
    justify-content: space-between;
    line-height: 60px;
}
.info-other{
    line-height: 30px;
    margin-top: 10px;
    display: flex;
    font-size: 10px;
    color: gray;
    /*justify-content靠边对齐，平分空间*/
    justify-content: space-between;
     border-bottom: 1px solid rgba(100,100,100,.1);

}

.discount{
     font-size: 12px;
    padding: 2px 5px;
    color: #fff;
    background-color: var(--color-high-text);
    border-radius: 8px;
    margin-left: 5px;

    /*让元素上浮一些: 使用相对定位即可*/
    position: relative;
    top: -8px;
}
.o-price{
    font-size: 10px;
    text-decoration: line-through;
}
.n-price{
    font-size: 18px;
    font-weight: bold;
    color: palevioletred;
}
.info-title{
 font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
 font-weight: bold;
}
.base-info{
    margin-top: 15px;
    padding: 0 8px;
    border-bottom: 5px solid #f2f5f8;
}
.info-service{
    display: flex;
}
.info-service-item {
    flex: 1;
}
.info-service-item span{
    font-size: 1px;
}
 .info-service-item img{
        width: 12px;
 }
</style>