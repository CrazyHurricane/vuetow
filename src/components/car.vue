<template>
    <div id="container">
        <div id="top">
            <a href="###">
                <div id="top-left" class="top-son">
                    <div>
                        <h3 class="top-h3">金币商城</h3>
                        <span class="top-span">0元好物在这里</span>
                        <div class="box">
                            <img src="../assets/images/car1.jpeg" alt="">
                        </div>
                    </div>
                </div>
            </a>
            <a href="###">
                <div id="top-right" class="top-son">
                    <div class="top-right-son">
                        <div>
                            <h3 class="top-h3 H3-1">推荐有奖</h3>
                            <span class="top-span">20元现金拿不停</span>
                            <img src="../assets/images/car2.jpeg" alt="" class="top-img">
                        </div>
                    </div>
                    <div class="top-right-son">
                        <div>
                            <h3 class="top-h3 H3-2">周边优惠</h3>
                            <span class="top-span">领取口碑好券</span>
                            <img src="../assets/images/car3.jpeg" alt=""  class="top-img IMG">
                        </div>
                    </div>
                </div> 
            </a>
        </div>
        <div id="main">
            <div id="main-top">
                <h3>——<i class="icon iconfont icon-zan-copy"></i>为你推荐——</h3>
                <div>你的口味,我都懂得</div>
            </div>
            <div class="main-center">
                <a href="###">
                    <div>
                        <img src="../assets/images/car4.jpeg" alt="">
                        <div class="box-main">
                            <h3>香干小炒肉</h3>
                            <div>月售<span>13</span>份&nbsp;&nbsp;&nbsp;&nbsp;好评率<span>0</span>%</div>
                            <div>￥<span>9</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>满80减15</span></div>
                            <div>香锅里辣</div>
                        </div>
                    </div> 
                </a>
                <a href="###">
                    <div>
                        <img src="../assets/images/car5.jpeg" alt="">
                        <div class="box-main">
                            <h3>碎椒炒蛋</h3>
                            <div>月售<span>20</span>份&nbsp;&nbsp;&nbsp;&nbsp;好评率<span>0</span>%</div>
                            <div>￥<span>9</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>满80减15</span></div>
                            <div>香锅里辣</div>
                        </div>
                    </div>  
                </a>
                <a href="###">
                    <div>
                        <img src="../assets/images/car6.jpeg" alt="">
                        <div class="box-main">
                            <h3>脆皮全鸡</h3>
                            <div>月售<span>4</span>份&nbsp;&nbsp;&nbsp;&nbsp;好评率<span>100</span>%</div>
                            <div>￥<span>21.8</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>满50减8</span></div>
                            <div>欢乐基</div>
                        </div>
                    </div>  
                </a>
                <a href="http://baidu.com">
                    <div>
                        <img src="../assets/images/car7.jpeg" alt="">
                        <div class="box-main">
                            <h3>蜜汁手扒鸡</h3>
                            <div>月售<span>3</span>份&nbsp;&nbsp;&nbsp;&nbsp;好评率<span>100</span>%</div>
                            <div>￥<span>21.9</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>满70减15</span></div>
                            <div>欢乐基</div>
                        </div>
                    </div>  
                </a>
                
            </div>
            <div id="main-footer">
                查看更多>
            </div>
        </div>
        <div id="footer">
            <div id="main-top">
                <h3>——<i class="icon iconfont icon-icon-test"></i>限时好礼——</h3>
                <div>金币换好礼</div>
            </div>
            <div class="main-center" id="footer-center">
                <a href="###">
                    <div>
                        <span>限时优惠</span>
                        <img src="../assets/images/car8.jpeg" alt="">
                        <h3>3元品质联盟红包</h3>
                        <div><span>90金币</span><span>￥3</span></div>
                    </div> 
                </a>
                <a href="###">
                    <div>
                        <span>限时优惠</span>
                        <img src="../assets/images/car9.jpeg" alt="">
                        <h3>数码经络按摩仪</h3>
                        <div><span>9金币</span><span>￥239</span></div>
                    </div> 
                </a>
                <a href="###">
                    <div>
                        <span>限时优惠</span>
                        <img src="../assets/images/car10.jpeg" alt="">
                        <h3>悬浮机械手感套装</h3>
                        <div><span>9金币</span><span>￥139</span></div>
                    </div> 
                </a>
            </div>
            <div id="main-footer">
                查看更多>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#footer {
    background-color: #fff;
}
#main-footer {
    text-align: center;
    font-size: 14px;
    padding: 0 0 15px;
}
.box-main {
    padding: 0 10px 8px;
}
.box-main>h3 {
    font-size: 16px;
}
.box-main>div:nth-child(3) {
    color: red;
    border-bottom: 1px dashed rgb(237,237,237);
    padding-bottom: 8px;
    margin: 5px 0;
}
.box-main>div:nth-child(3)>span:nth-child(2) {
    border: 1px solid red;
    padding: 0 5px;
}
.main-center {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 10px 0;
    font-size: 12px;
}
.main-center img {
    width: 100%;
}
.main-center>a {
    display: inline-block;
    width: 47%;
}
#footer-center>a {
    display: inline-block;
    width: 30%;
    position: relative;
}
#footer-center>a>div {
    border: none;
}
#footer-center>a>div>span {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #000;
    color: #fff;
    padding: 0 5px;
}
#footer-center>a>div>div>span:nth-child(1) {
    color: red;
}
.main-center>a>div {
    width: 100%;
    margin-bottom: 10px;
    border: 1px solid rgb(237,237,237);
}
#main-top {
    text-align: center;
    border-top: 1px solid rgb(237,237,237);
}
#main-top>h3 {
    padding: 15px 0 0;
}
#main-top>h3>i {
    margin: 0 5px;
    color: red;
}
#main-top>div {
    font-size: 12px;
    color: rgb(186,177,177);
}
#main {
    margin-bottom: 15px;
    background-color: #fff;
}
.box {
    height: 80px;
}
.top-img {
    position: absolute;
    width: 26%;
    top: 15px;
    right: 10px;
}
.IMG {
    width: 21%;
    right: 15px;
    top: 18px;
}
.top-right-son {
    border-bottom: 1px solid rgb(237,237,237);
    padding: 15px;
    height: 44px;
    position: relative;
}
#top {
    overflow: hidden;
    background-color: rgb(245,245,245);
    padding:0 0 10px;
}
#top-left>div{
    margin: 15px;
}
.top-h3 {
    font-size: 16px;
    color: orange;
}
.H3-1 {
    color: blue;
}
.H3-2 {
    color: rgb(237, 102, 96);
}
.top-span {
    font-size: 12px;
    color: #ccc;
    display: block;
    margin-top: 2px;
}
#top-left img {
    float: right;
    margin-top: 12px;
    width: 40%;
}
.top-son {
    float: left;
    width: 49.4%;
    background-color: #fff;
    border: 1px solid rgb(237,237,237);
}
#abs {
    background-color: rgb(245,245,245);
    padding-bottom: 20px;
    margin-bottom: 47px;
}
</style>
