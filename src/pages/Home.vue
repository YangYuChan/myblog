<template>
  <div class="container">
    <Menu></Menu>
    <div class="home_container">
      <Header></Header>
      <section class="home_section clearfix">
        <router-view></router-view>
      </section>

    </div>

  </div>
</template>

<script>
  import Menu from '../components/Menu'
  import Header from '../components/Header'
  export default {
    name: "Home",
    components:{
      Menu,
      Header
    }
  }
</script>

<style scoped lang="scss">
  .home_container {
    position: relative;
    background-color: #f1f1f1;
    height: auto;
    margin-left: 7rem;
  }
  .home_section {
       margin:3rem auto 0;
       width: 70rem;

     }
</style>
