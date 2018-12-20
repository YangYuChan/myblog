<template>
  <div class="container">
    <Menu></Menu>
    <div class="home_container">
      <Header></Header>
      <section class="home_section clearfix">
        <Note></Note>
        <Right></Right>
      </section>
    </div>
  </div>
</template>

<script>
  import Menu from '../components/Menu'
  import Header from '../components/Header'
  import Note from '../components/Note'
  import Right from '../components/Right'
  export default {
    name: "Index",
    components:{
      Menu,
      Header,
      Note,
      Right,
    }
  }
</script>

<style scoped lang="scss">

</style>
