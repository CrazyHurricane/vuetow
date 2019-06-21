<template>
  <div class="Box">
    <div id="Div">
      <p id="dingwei">
        <router-link to="/address">
          <i class="icon iconfont icon-dingweiweizhi"></i>
          <span class="three">江堤中路</span>
        </router-link>
      </p>
    </div>
    <form action="#" id="form1">
        <i class="icon iconfont icon-fadajing"></i>
        <input type="text" placeholder="输入商家/商品名称" id="inp">
      </form>
    <div id="Mani">
      <mt-swipe :auto="0">
        <mt-swipe-item>
          <div class="banner">
            <div>
              <a href="http://taobao.com">
                <img src="../assets/images/rou.png" alt="">
                <span>美食</span>
              </a>
              <a href="#">
                <img src="../assets/images/1.png" alt="">
                <span>商超便利</span>
              </a>
              <a href="#">
                <img src="../assets/images/2.png" alt="">
                <span>水果</span>
              </a>
              <a href="#">
                <img src="../assets/images/3.png" alt="">
                <span>医药健康</span>
              </a>
              <a href="#">
                <img src="../assets/images/4.png" alt="">
                <span>浪漫鲜花</span>
              </a>
            </div>
            <div>
              <a href="#">
                <img src="../assets/images/5.png" alt="">
                <span>汉堡披萨</span>
              </a>
              <a href="#">
                <img src="../assets/images/6.png" alt="">
                <span>厨房生鲜</span>
              </a>
              <a href="#">
                <img src="../assets/images/7.png" alt="">
                <span>炸鸡炸串</span>
              </a>
              <a href="#">
                <img src="../assets/images/8.png" alt="">
                <span>地方菜系</span>
              </a>
              <a href="#">
                <img src="../assets/images/9.png" alt="">
                <span>麻辣烫</span>
              </a>
            </div>
          </div>
        </mt-swipe-item>
        <mt-swipe-item>
          <div class="banner">
            <a href="#">
              <img src="../assets/images/10.png" alt="">
              <span>素食简餐</span>
            </a>
            <a href="#">
              <img src="../assets/images/11.png" alt="">
              <span>地方小吃</span>
            </a>
            <a href="#">
              <img src="../assets/images/12.png" alt="">
              <span>大牌惠吃</span>
            </a>
            <a href="#">
              <img src="../assets/images/13.png" alt="">
              <span>米粉面馆</span>
            </a>
            <a href="#">
              <img src="../assets/images/14.png" alt="">
              <span>包子粥店</span>
            </a>
            <a href="#">
              <img src="../assets/images/15.png" alt="">
              <span>速食简餐</span>
            </a>
          </div>
        </mt-swipe-item>
      </mt-swipe>
      <a href="http://www.baidu.com">
        <div id="Content">
          <div class="C-top">
            <h3>品质套餐</h3>
            <div>搭配齐全吃得好</div>
            <div>立即抢购></div>
            <img src="../assets/images/content.png" alt="">
          </div>
        </div>
      </a>
      <div id="vip">
        <div>
          <img src="../assets/images/vip.png" alt="">
          <span>超级会员</span><span>·每月领20元红包</span>
          <a href="http://www.sina.com">立即开通></a>
        </div>
      </div>
      <div id="lun">
        <mt-swipe :auto="4000">
          <mt-swipe-item>
            <a href="#"><img src="../assets/images/1.jpeg" alt=""></a>
          </mt-swipe-item>
          <mt-swipe-item>
            <a href="#"><img src="../assets/images/2.jpeg" alt=""></a>
          </mt-swipe-item>
          <mt-swipe-item>
            <a href="#"><img src="../assets/images/3.jpeg" alt=""></a>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div id="tui">
        <div>——&nbsp;&nbsp;推荐商家&nbsp;&nbsp;——</div>
        <div id="fixed2">
          <a href="###"><span>综合排序</span></a>
          <a href="###">距离最近</a>
          <a href="###">品质联盟</a>
          <a href="###">筛选<i class="icon iconfont icon-funnel"></i></a>
        </div>
      </div>
    </div>
    <div id="list">
      <a href="http://baidu.com">
        <div class="list">
          <div class="pic">
            <img src="../assets/images/list1.jpeg" alt="">
          </div>
          <div class="list-container">
            <h3>香锅里辣</h3>
            <div>
              <span class="star">
                <i class="icon iconfont icon-star_full"></i>
                <i class="icon iconfont icon-star_full"></i>
                <i class="icon iconfont icon-star_full"></i>
              </span>
              <span>3.9</span>
              <span>月售<i>545</i>单</span>
            </div>
            <div>
              <span>￥<i>15</i>起送</span>
              <span>|</span>
              <span>配送费￥<i>1</i></span>
              <span><i>439</i>m<span>|</span><i>39</i>分钟</span>
            </div>
            <div>
              <span>盖浇饭</span>
            </div>
            <div>
              <span>减</span>
              <span>满50减2</span>
              <span>3个活动</span>
            </div>
            <div>
              <span>首</span>
              <span>新用户下单立减<i>15</i>元</span>
            </div>
          </div>
        </div>
      </a>
      <a href="###">
        <div class="list">
          <div class="pic">
            <img src="../assets/images/list2.jpeg" alt="">
          </div>
          <div class="list-container">
            <h3>WELL</h3>
            <div>
              <span class="star">
                <i class="icon iconfont icon-star_full"></i>
                <i class="icon iconfont icon-star_full"></i>
                <i class="icon iconfont icon-star_full"></i>
                <i class="icon iconfont icon-star_full"></i>
              </span>
              <span>4.8</span>
              <span>月售<i>453</i>单</span>
            </div>
            <div>
              <span>￥<i>10</i>起送</span>
              <span>|</span>
              <span>配送费￥<i>1</i></span>
              <span><i>776</i>m<span>|</span><i>43</i>分钟</span>
            </div>
            <div>
              <span>炸鸡炸串</span>
              <span>品质联盟</span>
            </div>
            <div>
              <span>减</span>
              <span>满50减25</span>
            </div>
            <div>
              <span>首</span>
              <span>新用户下单立减<i>15</i>元</span>
            </div>
          </div>
        </div>
      </a>
      <a href="###">
        <div class="list">
          <div class="pic">
            <img src="../assets/images/list3.png" alt="">
          </div>
          <div class="list-container">
            <h3>重庆川香楼</h3>
            <div>
              <span class="star">
                <i class="icon iconfont icon-star_full"></i>
                <i class="icon iconfont icon-star_full"></i>
                <i class="icon iconfont icon-star_full"></i>
                <i class="icon iconfont icon-star_full"></i>
              </span>
              <span>4.3</span>
              <span>月售<i>239</i>单</span>
            </div>
            <div>
              <span>￥<i>20</i>起送</span>
              <span>|</span>
              <span>配送费￥<i>2</i></span>
              <span><i>1.8</i>km<span>|</span><i>42</i>分钟</span>
            </div>
            <div>
              <span>川香菜</span>
            </div>
            <div>
              <span>减</span>
              <span>满35减8</span>
              <span>4个活动</span>
            </div>
            <div>
              <span>首</span>
              <span>新用户下单立减<i>14</i>元</span>
            </div>
          </div>
        </div>
      </a>
      <a href="###">
        <div class="list">
          <div class="pic">
            <img src="../assets/images/list4.png" alt="">
          </div>
          <div class="list-container">
            <h3>欢乐基</h3>
            <div>
              <span class="star">
                <i class="icon iconfont icon-star_full"></i>
                <i class="icon iconfont icon-star_full"></i>
                <i class="icon iconfont icon-star_full"></i>
              </span>
              <span>3.8</span>
              <span>月售<i>84</i>单</span>
            </div>
            <div>
              <span>￥<i>20</i>起送</span>
              <span>|</span>
              <span>配送费￥<i>1</i></span>
              <span><i>131</i>m<span>|</span><i>32</i>分钟</span>
            </div>
            <div>
              <span>汉堡薯条</span>
            </div>
            <div>
              <span>减</span>
              <span>满50减8</span>
              <span>4个活动</span>
            </div>
            <div>
              <span id="hui">惠</span>
              <span>特价商品<i>9</i>元起</span>
            </div>
          </div>
        </div>
      </a>
      <a href="###">
        <div class="list">
          <div class="pic">
            <img src="../assets/images/list5.jpeg" alt="">
            <span>商家休息</span>
          </div>
          <div class="list-container">
            <h3>重庆鱼庄</h3>
            <div>
              <span class="star">
                <i class="icon iconfont icon-star_full"></i>
                <i class="icon iconfont icon-star_full"></i>
                <i class="icon iconfont icon-star_full"></i>
                <i class="icon iconfont icon-star_full"></i>
              </span>
              <span>4.0</span>
              <span>月售<i>189</i>单</span>
            </div>
            <div>
              <span>￥<i>30</i>起送</span>
              <span>|</span>
              <span>配送费￥<i>6</i></span>
              <span><i>1.1</i>km<span>|</span><i>38</i>分钟</span>
            </div>
            <div>
              <span>其他菜系</span>
            </div>
            <div>
              <span>减</span>
              <span>满50减12</span>
              <span>3个活动</span>
            </div>
            <div>
              <span id="hui">惠</span>
              <span>特价商品<i>6</i>元起</span>
            </div>
          </div>
        </div>
      </a>
      <a href="###">
        <div class="list">
          <div class="pic">
            <img src="../assets/images/list4.png" alt="">
            <span>商家休息</span>
          </div>
          <div class="list-container">
            <h3>汪记早点铺</h3>
            <div>
              <span class="star">
                <i class="icon iconfont icon-star_full"></i>
                <i class="icon iconfont icon-star_full"></i>
                <i class="icon iconfont icon-star_full"></i>
                <i class="icon iconfont icon-star_full"></i>
                <i class="icon iconfont icon-star_full"></i>
              </span>
              <span>4.9</span>
              <span>月售<i>548</i>单</span>
            </div>
            <div>
              <span>￥<i>15</i>起送</span>
              <span>|</span>
              <span>配送费￥<i>4</i></span>
              <span><i>735</i>m<span>|</span><i>35</i>分钟</span>
            </div>
            <div>
              <span>其他快餐</span>
            </div>
            <div>
              <span>减</span>
              <span>满50减8</span>
              <span>2个活动</span>
            </div>
            <div>
              <span>首</span>
              <span>新用户下单立减<i>8</i>元</span>
            </div>
          </div>
        </div>
      </a>
      <div class="none">没有更多了...</div>
    </div>
    <i class="icon iconfont icon-shangchuanxiangshangjiantou"></i>
  </div>
</template>

<script>
$(function(){
  $(window).scroll(function(){
    if($(window).scrollTop() >= 30&&$(window).scrollTop()<551){
      $('#form1').css({
        'position':'fixed',
        'top':'0',
        'z-index':'10',
        'width':'94.2%'
        })
      $('#fixed2').css('position','static')
    }else if($(window).scrollTop()>=551){
      $('#form1').css({
        'position':'fixed',
        'top':'0',
        'z-index':'10',
        'width':'94.2%'
        })
      $('#fixed2').css({
        'position':'fixed',
        'top':'53px',
        'width':'100%',
        'margin-left':'-12px',
        'z-index':'9',
        'color':'#ccc',
        'background-color':'#fff',
        'padding':'8px 0',
        'font-size':'14px'
        })
    }
    else{
      $('#form1').css({'position':'static','width':'94.2%'})
      $('.mint-tabbar').css('position','fixed')
    }

    if($(window).scrollTop() >= 300){
      $('.icon-shangchuanxiangshangjiantou').css('display','block')
    }else{
      $('.icon-shangchuanxiangshangjiantou').css('display','none')
    }
  })
  $(".icon-shangchuanxiangshangjiantou").click(function(){
    $('body,html').animate({scrollTop:0},500);
  });
})
export default {

}
</script>

<style scoped>
.icon-shangchuanxiangshangjiantou {
  position: fixed;
  bottom: 100px;
  right: 40px;
  font-size: 40px;
  display: none;
}
#Div {
  background-color: lightblue;
  padding: 12px 12px 5px;
}
#form1 input {
  width: 100%;
  height: 30px;
  border-radius: 20px;
  border: none;
  text-indent: 35px;
  outline: none;
}
#form1 {
  position: relative;
  background-color: lightblue;
  padding: 12px;
  transform: translateY(-1px);
}
#Div>p {
  margin: 0px;
}
#form1>i {
  position: absolute;
  top: 20px;
  left: 29px;
  font-size: 14px;
}
#dingwei>a,#dingwei>a>i {
  color: #fff;
  text-decoration: none;
  font-size: 14px;
}
.three {
  position: relative;
}
.three::after{
  content: '';
  width: 0;
  height: 0;
  border: 4px solid transparent;
  border-top: 4px solid #fff;
  position: absolute;
  right: -13px;
  top: 6px;
}
.none {
  text-align: center;
  font-size: 12px;
  padding: 10px 0;
}
#hui {
  background-color: orange;
}
.star {
  display: inline-block;
  overflow: hidden;
  transform: translateY(1px)
}
.icon-star_full {
  font-size: 12px;
  color: orange;
  float: left;
}
.list {
  padding: 20px 12px 10px;
  display: flex;
  font-size: 12px;
  border-bottom: 1px solid #eee;
}
.pic {
  position: relative;
}
.pic>img {
  width: 50px;
  border: 1px solid #dde;
}
.pic>span {
  position: absolute;
  background-color: rgb(192, 192, 192);
  width: 50px;
  text-align: center;
  color: #fff;
  top: 36px;
  left: 1px;
}
.list-container {
  margin-left: 10px;
  flex-grow: 1;
}
.list-container>div {
  margin-bottom: 10px;
}
.list-container>div:nth-child(2)>span:nth-child(2) {
  margin: 0 5px;
}
.list-container>div:nth-child(3)>span:nth-child(2) {
  margin: 0 5px;
}
.list-container>div:nth-child(3)>span:nth-child(4) {
  float: right;
}
.list-container>div:nth-child(3)>span:nth-child(4)>span:nth-child(2) {
  margin: 0 5px;
}
.list-container>div:nth-child(4)>span {
  padding: 1px;
  border: 1px solid #bbb;
  color: #666;
}
.list-container>div:nth-child(5)>span:nth-child(1),.list-container>div:nth-child(6)>span:nth-child(1) {
  background-color: red;
  color: #fff;
  margin-right: 3px;
}
.list-container>div:nth-child(5)>span:nth-child(3) {
  float: right;
  position: relative;
  margin-right: 12px;
}
.list-container>div:nth-child(5)>span:nth-child(3):after {
  content: '';
  width: 0;
  height: 0;
  border: 4px solid transparent;
  border-top: 4px solid #000;
  position: absolute;
  right: -11px;
  top: 6px;
}
.list-container>div:nth-child(6)>span:nth-child(1) {
  background-color: lightgreen;
}
#tui {
  text-align: center;
}
#tui>div:nth-child(1) {
  margin: 15px 0 20px;
}
#tui>div:nth-child(2) {
  overflow: hidden;
}
#tui>div:nth-child(2)>a {
  float: left;
  width: 25%;
}
#tui>div:nth-child(2)>a:nth-child(1)>span {
  position: relative;
}
#tui>div:nth-child(2)>a:nth-child(1)>span::after {
  content: '';
  width: 0;
  height: 0;
  border: 4px solid transparent;
  border-top: 4px solid #000;
  position: absolute;
  right: -11px;
  top: 6px;
}
#lun {
  margin:5px 0 0;
}
#lun img {
  width: 100%;
}
#lun .mint-swipe {
  height: 97px;
}
#vip {
  height: 30px;
  line-height: 30px;
  background-image: linear-gradient(90deg,#ffefc4,#f3dda0);
  margin: 5px 0 0;
  border-radius: 2px;
  font-size: 14px;
}
#vip img {
  width: 14px;
  margin:0 0 0 15px;
}
#vip span:nth-of-type(2) {
  font-size: 12px;
  color: #644f1b;
  margin-top: -5px;
}
#vip a{
  width: 70px;
  height: 30px;
  float: right;
  font-size: 12px;
  text-align: center;
  color: #644f1b;
}
.C-top {
  background-color: #fafafa;
  padding: 15px 0px 15px 15px;
  position: relative;
}
.C-top>div:nth-of-type(1) {
  margin:3px 0px 8px;
  font-size: 14px;
}
.C-top>div:nth-of-type(2) {
  color: #af8260;
  font-size: 12px;
}
.C-top>img {
  position: absolute;
  width: 140px;
  top: 4px;
  right: 10px;
}
.banner {
  overflow: hidden;
}
.banner>div {
  display: flex;
}
.banner a {
  float: left;
  width: 20%;
  text-align: center;
  padding-top: 3px;
}
.banner a>img {
  display: block;
  width: 65%;
  margin: 0 auto;
}
.banner span {
  font-size: 12px;
}
#Mani {
  padding:0 12px;
}
</style>
