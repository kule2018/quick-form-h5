<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>


<script>
export default {
  name: 'app',

  data () {
      return {
          transitionName: 'slide'
      }
  },

  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length;
      const fromDepth = from.path.split('/').length;
      console.log(to.path,from.path,toDepth,fromDepth);

      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  },

  beforeRouteUpdate(to,from,next){
        let isBack = this.$router.isBack;
        if( isBack ){
            this.transitionName = 'slide-right'
        }else{
            this.transitionName = 'slide-left'
        }
        console.log(isBack);
        this.$router.isBack = false;
    }
};
</script>

<style>
</style>
