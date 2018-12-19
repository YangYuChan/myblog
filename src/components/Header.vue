<template>
  <header class="breadcrumb">
    <div class="breadcrumb_content">
      <div class="notebook">笔记</div>
      <div class="serach">
        <input type="text" class="search_input">
        <a href=""><i class="icon iconfont icon-search"></i></a>
      </div>
    </div>
  </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped lang="scss">
  .breadcrumb {
    position: fixed;
    top: 0;
    left: 7rem;
    right: 0;
    background-color: #fff;
    border-bottom: 1px solid #dcdcdc;
    .breadcrumb_content {
      height: 5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 4rem;
      .notebook {
        font-size: 28px;
        color: #888;
        font-weight: 200;
      }
      .serach {
        position: relative;
        .search_input {
          padding: 0.8rem;
          width: 15rem;
          border-radius: 7px;
          border: 1px solid #bbb;
        }
        .icon{
          position: absolute;
          right: 0.5rem;
          top: 0.5rem;
          color: #bbb;
          font-size: 24px;
        }
      }

    }
  }
</style>
