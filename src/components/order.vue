<template>
    <div>
        <div id="content">
            <img src="../assets/images/order.png" alt="">
            <h3>近三个月无外卖点单记录</h3>
            <div>查看三个月前的外卖订单</div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>
<style scoped>
#content{
    text-align: center;
    margin-top:200px;
}
#content h3{
    margin: 10px 0
}
#content div{
    position: relative;
}
#content div:after{
    content: '';
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top:5px solid #ccc;
    position: absolute;
    top:10px;
    right:105px;
}
</style>
