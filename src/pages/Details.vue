<template>
  <div class="container">
    <Menu></Menu>
    <div class="home_container">
      <Header></Header>
      <section class="home_section clearfix">
        <div class="details-content">
          <div class="details-inbox">
            <h2 class="title">【转载】css关于position属性(相对定位和绝对定位)的问题</h2>


              <div class="create_message">
                <span class="mess create_time"><i class="icon iconfont icon-shijian"></i>&nbsp;2018-12-10</span>
                <span class="mess see"><i class="icon iconfont icon-chakan"></i>&nbsp;9000</span>
                <span class="mess commit"><a href=""><i class="icon iconfont icon-pinglun"></i> &nbsp;10</a></span>
              </div>

            <article class="main-content">
              <div class="origin">
                <p>原文地址：<a href="">程序员真的觉得写代码比女朋友重要吗？</a></p>
                <p>原文作者：<a href="">Eric Elliott</a></p>
              </div>
              <p class="content">
              目前几乎所有主流的浏览器都支持position属性（"inherit"除外，"inherit"不支持所有包括IE8和之前版本IE浏览器，IE9、IE10还没测试过）

              其中absolute和relative是最常用的，fixed用得也比较多（其中IE6并不支持fixed）

              1、absolute（绝对定位）
              absolute是生成绝对定位的元素，脱离了文本流（即在文档中已经不占据位置），参照浏览器的左上角通过top,right,bottom,left（简称TRBL） 定位。可以选取具有定位的父级对象（下文将说到relative与absolute的结合使用）或者body坐标原点进行定位，也可以通过z-index进行层次分级。absolute在没有设定TRBL（top,right,bottom,left）值时是根据父级对象的坐标作为始点的，当设定TRBL值后则根据浏览器的左上角作为原始点。

              2、relative（相对定位）
              relative是相对的意思，顾名思义就是相对于元素本身在文档中应该出现的位置来移动这个元素，可以通过TRBL（top,right,bottom,left）来移动元素的位置，实际上该元素依然占据文档中原有的位置，只是视觉上相对原来的位置有移动。

              3、static （默认值）
              在CSS中所有元素的“position”属性的默认值都是“static”，因为不需要显式的为每个元素设置“position:static”。此时大家会问，那这个属性值是不是没有任何意义呢？其实不是的，他在CSS中也会起着很大的作用。我们来看一个实例 比如说你的两个页面，同时存在“div#div-1”，那么此时你在A面中需要对“div#div-1”进行绝对定位；而在B页面中“div#div-1”又不需要进行绝对定位。 A页面中“div#div-1”绝对定位：

              #div-1 { position: absolute; } 此时在B页面中不想在进行绝对定位，那么我们就必须在你的样式中显式的重新设置“#div-1”的postion属性为“static” body.B #div-1 { position: static; }
              4、relative和absolute的结合
              第二步中大家知道元素相对定位“relative”是相对于元素自身定位，而在第三步中大家知道元素绝对定位“absolute”是相对于html。但这种说法只有满足这样的条件才是正常的：“绝对定位元素的任何祖先元素没有进行任何的“relative”或者“absolute”设置，那么绝对定位的元素的参考物就是html”，这样一来，“relative”和“absolute”的结合就能起到很大的作用

              如果一个元素绝对定位后，其参照物是以离自身最近元素是否设置了相对定位，如果有设置将以离自己最近元素定位，如果没有将往其祖先元素寻找相对定位元素，一直找到html为止
              </p>
            </article>
            <div class="tags">
              <i class="icon iconfont icon-biaoqian"></i>
              <a href="">javascript</a>
              <a href="">vuejs</a>
              <a href="">es6</a>
            </div>
            <div class="share">
              <div class="share-icon">
                <span><i class="icon iconfont icon-weixin-copy"></i></span>
                <span><i class="icon iconfont icon-weibo"></i></span>
                <span><i class="icon iconfont icon-pengyouquan-copy"></i></span>
                <span><i class="icon iconfont icon-qq-copy"></i></span>
              </div>
              <div class="givelike">
                <a href=""><i class="icon iconfont icon-dianzan"></i> 20000</a>
              </div>
            </div>
          </div>
          <div class="commit-box">
            <div class="write-commit">
              <h3 class="title">我要留言</h3>
              <div class="commit-form">
                <div class="form-group">
                  <span class="red">*</span>
                  <label>您的姓名：</label>
                  <input type="text" name="visitor" placeholder="请填写您的姓名" class="form-contorl">
                </div>
                <div class="form-group">
                  <span class="red">*</span>
                  <label>您的留言：</label>
                  <textarea name="" id="" class="form-contorl" cols="90" rows="7" placeholder="留言字数不超过200字"></textarea>
                </div>
                <div class="submit-btn">
                  <mt-button type="primary">提交</mt-button>
                </div>
              </div>
            </div>
            <div class="commit-list">
              <h3 class="title">全部留言（45条）</h3>
              <div class="commit">
                <!--一条留言-->
                <div class="commit-item">
                  <div class="user-info">
                    <span class="username">Bella</span>
                    <span class="time">30分钟前</span>
                    <span class="like"><i class="icon iconfont icon-dianzan"></i>20</span>
                  </div>
                  <div class="feedback">
                    <span class="feed-content"> 写的太好了！！！！赞赞赞</span>
                    <span class="reply">【回复】</span>
                  </div>
                  <!--回复-->
                  <div class="quote">
                    <div class="user-info">
                      <span class="username">王二狗</span>
                      <span> 回复 </span>
                      <span class="username">Bella</span>
                      <span class="time">30分钟前</span>
                    </div>
                    <div class="feedback">
                      是的！！！
                    </div>
                  </div>
                  <!--end-->
                </div>
                <!--end-->
                <!--一条留言-->
                <div class="commit-item">
                  <div class="user-info">
                    <span class="username">Bella</span>
                    <span class="time">30分钟前</span>
                    <span class="like"><i class="icon iconfont icon-dianzan"></i>20</span>
                  </div>
                  <div class="feedback">
                    <span class="feed-content"> 写的太好了！！！！赞赞赞</span>
                    <span class="reply">【回复】</span>
                  </div>
                  <!--回复-->
                  <div class="quote">
                    <div class="user-info">
                      <span class="username">王二狗</span>
                      <span> 回复 </span>
                      <span class="username">Bella</span>
                      <span class="time">30分钟前</span>
                    </div>
                    <div class="feedback">
                      是的！！！
                    </div>
                  </div>
                  <!--end-->
                </div>
                <!--end-->
              </div>

            </div>
          </div>
        </div>
        <Right></Right>
      </section>
    </div>
  </div>
</template>

<script>
  import Menu from '../components/Menu'
  import Header from '../components/Header'
  import Right from '../components/Right'
  export default {
    name: "Details",
    components:{
      Menu,
      Header,
      Right
    }
  }
</script>

<style scoped lang="scss">

</style>
