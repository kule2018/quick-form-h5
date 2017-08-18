<template>
  <div class="share">
    这是一个分享页面{{id}},姓名{{name}}
    <div v-if="show" v-bind:title="name">
      拉到数据
    </div>
  </div>
</template>


<script>
  import Share from '../utils/share';
  export default {
    name: 'share',

    data: () => ({
      name: '',
      show: false
    }),

    props: ['id'],

    //拉取后台数据显示并且设置分享
    mounted() {
      this.$axios.get('').then((res) => {

        res = {
          response: {
            code: 0
          },
          data: {
            title: "测试",
            message: "分享文案",
            name: "这个哈巴"
          }
        };

        this.name = res.data.name;
        this.show = true;
        Share.setShare({
          title: res.data.title,
          message: res.data.message,
          url: location.href.split('?')
        });
      });
    },

    watch: {
      id() {
        console.log(this.id);
      }
    },
  };
</script>


<style scoped>

</style>
