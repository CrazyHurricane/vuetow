<template>
    <div>
        <a href="###">
            <div id="mine-top">
                <div>
                    <img src="../assets/images/tou.png" alt="">
                    <h3>62a6sg1984a</h3>
                    <div>
                        <i class="icon iconfont icon-shouji"></i>
                        138****6574
                    </div>
                    <span>></span>
                </div>
            </div>
        </a>
        <div id="jinbi">
            <a href="###">
                <div>
                    <span><i>0</i>个</span>
                    <span>红包</span>
                </div>
            </a>
            <a href="###">
                <div>
                    <span><i>0</i>个</span>
                    <span>金币</span>
                </div>
            </a>
        </div>
        <div class="mine-list address">
            <div>
                <i class="icon iconfont icon-dingweiweizhi blue"></i>
                <span>我的地址</span>
                <span>></span>
            </div>
        </div>
        <div class="mine-list address">
            <div class="line">
                <i class="icon iconfont icon-weibiaoti-- green"></i>
                <span>金币商城</span>
                <span>></span>
            </div>
            <div>
                <i class="icon iconfont icon-libao orange"></i>
                <span>分享拿20元现金</span>
                <span>></span>
            </div>
        </div>
        <div class="mine-list address">
            <div class="line">
                <i class="icon iconfont icon-kefu blue"></i>
                <span>我的客服</span>
                <span>></span>
            </div>
            <div class="line">
                <i class="icon iconfont icon-eliaomo blue"></i>
                <span>下载饿了么APP</span>
                <span>></span>
            </div>
            <div>
                <i class="icon iconfont icon-guize blue"></i>
                <span>规则中心</span>
                <span>></span>
            </div>
        </div>
        <div id="mine-footer">
            隐私政策
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#abs{
    background-color: rgb(245,245,245);
    padding-bottom: 166px;
}
#mine-footer{
    padding-top:20px;
    text-align: center;
}
.green{
    color:rgb(148,217,74)
}
.orange{
    color:rgb(252,123,83)
}
.blue{
    color:blue;
}
.line{
    padding-bottom: 8px;
    margin-bottom: 8px;
    border-bottom: 1px solid rgb(238,238,238);
}
.mine-list>div>span:nth-child(3){
    float:right;
}
.mine-list{
    background-color: #fff;
    padding:15px;
    margin-top: 10px;
    border-top:1px solid rgb(221,221,221);
    border-bottom:1px solid rgb(221,221,221);
}
#jinbi{
    text-align: center;
    display: flex;
    font-size:14px;
    background-color: #fff;
}
#jinbi a{
    width: 50%;
    padding: 20px 0;
    border-bottom: 1px solid #ccc;
}
#jinbi a:nth-child(1){
    border-right: 1px solid #ccc;
}
#jinbi>a>div>span:nth-child(1){
    display: block;
    color:red;
}
#jinbi>a:nth-child(2)>div>span:nth-child(1){
    display: block;
    color:green;
}
#mine-top {
    background-image: linear-gradient(90deg,#0af,#0085ff);
    padding: 20px 12px;
    height: 60px;
    color:#fff;
}
#mine-top>div {
    position: relative;
    padding-left: 80px;
}
#mine-top>div>img {
    position: absolute;
    top:0px;
    left:15px;
}
#mine-top>div>span {
    position: absolute;
    top:15px;
    right:15px;
}
#mine-top>div>h3 {
    margin:10px 0 10px;
}
</style>
