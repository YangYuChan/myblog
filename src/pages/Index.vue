<template>
        <section class="home_section clearfix">
          <Note></Note>
          <Right></Right>
        </section>
</template>

<script>
  import Note from '../components/Note'
  import Right from '../components/Right'
    export default {
      name: "Index",
      components:{
        Note,
        Right,
      }
    }
</script>

<style scoped lang="scss">

</style>
