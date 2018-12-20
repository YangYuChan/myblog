<template>
    <div class="right_wrapper">
      <div class="hot_order">
        <h3 class="title">热门文章</h3>
        <ul>
          <li class="order_item"><span class="num">1.</span><span class="tit">用 npm script 打造超溜的前端工作流</span></li>
          <li class="order_item"><span class="num">2.</span><span class="tit">用 npm script 打造超溜的前端工作流</span></li>
          <li class="order_item"><span class="num">3.</span><span class="tit">用 npm script 打造超溜的前端工作流</span></li>
          <li class="order_item"><span class="num">4.</span><span class="tit">用 npm script 打造超溜的前端工作流</span></li>
          <li class="order_item"><span class="num">5.</span><span class="tit">用 npm script 打造超溜的前端工作流</span></li>

        </ul>
      </div>
        <div class="hot_tags">
          <h3 class="title">标签搜索</h3>
          <ul class="tags_list">
            <li class="tags_item"><a href="">html5</a></li>
            <li class="tags_item"><a href="">javascript</a></li>
            <li class="tags_item"><a href="">vuejs</a></li>
            <li class="tags_item"><a href="">es6</a></li>
            <li class="tags_item"><a href="">elementui</a></li>
            <li class="tags_item"><a href="">小程序</a></li>
            <li class="tags_item"><a href="">服务号</a></li>

          </ul>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Right"
    }
</script>

<style scoped lang="scss">
  .right_wrapper{
    float: right;
    width: 30%;
    height: 500px;
    .hot_order,
    .hot_tags{
      padding: 1rem 1rem 0.5rem;
      box-sizing: border-box;
      background-color: #fff;
      font-size: 14px;
      margin-bottom: 1.5rem;
      .title{
        text-align: left;
        padding-bottom:1rem;
        border-bottom: 1px solid #ddd;
      }
    }
    .hot_tags {
      .tags_list {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        flex: 1;
        .tags_item {
          a{
            display: block;
            padding: 0.5rem;
            background-color: #fff;
            border-radius: 4px;
            color: #666;
            margin: 1rem 1rem 0 0;
            border: 1px solid #ddd;
            transition: all 1s ease;
            &:hover{
              transform: rotate(360deg);
              border: 1px solid #41b883;
              color: #41b883;
            }
          }
        }
      }
    }
    .hot_order {
      .order_item{
        padding: 0.5rem 0;
        text-align: left;
        .num{
          display: inline-block;
          width: 24px;;
          text-align: center;
          background-color: #fff;
          border-radius: 100%;
        }
        .tit{
          margin-left: 0.5rem;
        }
      }
    }
  }

</style>
