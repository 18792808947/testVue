<template>
    <div class="minHeader">
          <div class="back" @click="goBack()"></div>
          <div class="title">
            {{title}}
          </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
      props: {
          title: String
      },
      methods: {
        goBack() {
          this.$router.go(-1);
        }
      }
    }
</script>
<style lang="less" scoped>
  .minHeader {
    position: fixed;
    top: 0;
    width: 100%;
    height: 115/50rem;
    background: url("../../../static/images/minHeader/minHeader_bg.jpg") no-repeat;
    background-size: 100% 100%;
    .back {
      position: absolute;
      margin-left: 35/50rem;
      margin-top: 1rem;
      width: 48/50rem;
      height: 35/50rem;
      background: url("../../../static/images/minHeader/header_back.jpg") no-repeat;
      background-size: 100% 100%;
    }
    .title {
      height: 100%;
      font-size: 48/50rem;
      text-align: center;
      padding-top: 40/50rem;
     box-sizing: border-box;
    }
  }

</style>
