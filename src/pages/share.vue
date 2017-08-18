<template>
  <div class="share">
    这是一个分享页面{{id}}
  </div>
</template>


<script>
  export default {
    name: 'share',

    data: () => ({
    }),

    props: ['id'],

    mounted() {
      console.log('mounted', this.$el, this.id)
    },

    watch: {
      id(){
        console.log(this.id);
      }
    },

  };
</script>


<style scoped>

</style>
