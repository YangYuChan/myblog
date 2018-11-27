<template>
    <div class="left_wrapper">
      <header>
        <div class="photo">
          <img src="../img/photo.png" alt="">
        </div>
        <div class="logo">
          <img src="../img/logo.png" alt="">
        </div>
      </header>
      <nav class="nav_bar">
        <ul>
          <li class="nav_item">
            <a href="">
              <div class="item_icon"><i class="icon iconfont icon-xiangmu"></i></div>
              <div class="item_name">笔记</div>
            </a>
          </li>
          <li class="nav_item">
            <a href="">
              <div class="item_icon"><i class="icon iconfont icon-ziyuan"></i></div>
              <div class="item_name">作品</div>
            </a>
          </li>
          <li class="nav_item">
            <a href="">
              <div class="item_icon"> <i class="icon iconfont icon-gerendangan"></i></div>
              <div class="item_name">关于我</div>
            </a>
          </li>
        </ul>
      </nav>
      <div class="link">
        <a href=""><i class="icon iconfont icon-GitHub"></i></a>
        <a href=""><i class="icon iconfont icon-weixin-copy"></i></a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Menu"
    }
</script>

<style scoped lang="scss">
  .left_wrapper {
    background-color:#35495e;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 7rem;
    .photo {
      border: 3px solid #41b883;
      background-color: #fff;
      width: 4rem;
      height: 4rem;
      border-radius: 100%;
      margin: 5rem auto 0.5rem;
      img{
        width: 100%;
        height: 100%;
        border-radius: 100%;
      }
    }
    .logo{
      text-align: center;
      width: 5.5rem;
      margin: 0 auto;
      img{
        width: 100%;
        background-size: cover;
      }
    }
    .nav_bar {
      margin: 5rem 0;
      .nav_item {
        margin: 4rem auto;
        text-align: center;
        .item_icon{
          width: 4rem;
          height: 4rem;
          line-height: 4rem;
          margin: 0 auto;
          -webkit-border-radius: 100%;
          -moz-border-radius: 100%;
          border-radius: 100%;
          background: rgba(238,238,238,0.2);
          text-align: center;
          .icon {
            font-size: 30px;
            color: rgba(255, 255, 255, 0.5);
          }
        }
        .item_name{
          font-size: 14px;
          color: rgba(255,255,255,0.5);
          margin: 0.5rem 0;
        }
        &:hover,
        &:active{
          .item_icon{
            background: rgba(238,238,238,0.5);
          }
          .icon,
          .item_name{
            color: rgba(255,255,255,1);
          }
        }
      }
    }
    .link {
      position: fixed;
      width: 7rem;
      left: 0;
      bottom: 3rem;
      padding:0;
      .icon{
        font-size: 20px;
        margin: 0 0.2rem;
        color: #fff;
      }
    }
  }

</style>
