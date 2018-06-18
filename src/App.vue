<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
  import navbar from "./layouts/navigation";
export default {
  name: 'App',
  components:{
    navbar
  }
}
</script>

<style lang="sass">
  @import "assets/sass/app"
</style>
