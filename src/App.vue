<template>
  <div id="app" class="w-screen max-h-screen overflow-y-hidden">
    <router-view/>
  </div>
</template>

<script>



export default {
  name: 'App',
  components: {
  },
  watch: {
    $route(to){
      document.title=to.name;
    }
  },
  mounted() {
    document.title=this.$route.name
  }

}
</script>

<style>

</style>
