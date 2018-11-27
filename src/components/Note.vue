<template>
  <ul class="note_list">
    <li class="note_item" v-for="i in 10">
      <a href="">
        <h3 class="note_name">用 npm script 打造超溜的前端工作流</h3>
        <div class="note_content">
          <span class="note_pic"><img src="../img/note_pic.png" alt=""></span>
          <span class="note_details">
            老司机 iOS 周报，只为你呈现有价值的信息。
            你也可以为这个项目出一份力，如果发现有价值的信息、文章、工具等可以到 Issues 里提给我们，
            我们会尽快处理。记得写上推荐的理由哦。有建议和意见也欢迎到 Issues 提出。
          </span>
        </div>
        <div class="note_other">
          <ul class="note_tags">
            <li class="tags_item"><a href="">javascript</a></li>
            <li class="tags_item"><a href="">vuejs</a></li>
            <li class="tags_item"><a href="">es6</a></li>
          </ul>
          <div class="create_message">
            <span class="mess create_time">30分钟前</span>
            <span class="mess see"><i class="icon iconfont icon-chakan"></i>&nbsp;9000</span>
            <span class="mess commit"><i class="icon iconfont icon-pinglun"></i> &nbsp;10</span>
            <span class="mess like"><i class="icon iconfont icon-dianzan"></i> &nbsp;20</span>
          </div>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
    export default {
        name: "Note",
        data(){
          return {

          }
        }
    }
</script>

<style scoped lang="scss">
  .note_list{
    float: left;
    width: 70%;
    .note_item{
      background-color: #fff;
      margin: 1.5rem 3rem;
      padding: 1rem;
      text-align: left;
      .note_name {
        font-size: 16px;
        color: #333;

      }
      .note_content {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin: 1rem 0;
        .note_pic {
          img {
            width: 5rem;
            height: 3rem;
            background-position: center;
          }
        }
        .note_details {
          margin-left: 1rem;
          display: -webkit-box!important;
          overflow: hidden;
          text-overflow: ellipsis;
          word-break: break-all;
          -webkit-box-orient: vertical;
          -webkit-line-clamp:3;
          font-size: 14px;
        }
      }
    }
    .create_message,
    .mess{
      display: flex;
      justify-content: flex-end;
      align-items: center;
      font-size: 12px;
    }
    .create_message {
      margin: 0.5rem 0;
      .mess {
        margin: 0 0.5rem;
      }
    }
    .note_tags {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .tags_item {
        border: 1px solid #41b883;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
        font-size: 12px;
        color: #41b883;
        margin-right: 0.5rem;
        padding: 0.2rem 0.5rem;

      }
    }
  }

</style>
