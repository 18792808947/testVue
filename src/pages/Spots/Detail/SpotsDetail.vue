<template>
    <div class="detail">
      <div class="detail-scroll" :class="className">
      </div>
      <div class="my-back" @click="Back()"></div>
    </div>
</template>
<script>
    import BScroll from 'better-scroll';
    export default {
        data() {
            return {}
        },
      mounted() {
          this.$nextTick(()=> {
            let scroll = new BScroll('.detail', {
              click: true
            })
          });
      },
      computed: {
          className() {
            let id = this.$route.params.id;
            let type = this.$route.params.type;
            return  `${type}Detail` + id;
          }
      },
      methods: {
        Back() {
          this.$router.go(-1);
        }
      }
    }
</script>
<style lang="less" scoped>
  .detail {
    height: 100%;
    overflow: scroll;
    position: relative;
    .my-back {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 50px;
      z-index: 99;
    }
    .detail-scroll {
        &.spotsDetail1 {
            height: 5357px;
            background: url("../../../../static/images/Temp/detail1.jpg") no-repeat;
            background-size: 100% auto;
          }
        &.spotsDetail2 {
          height: 7370/50rem;
          background: url("../../../../static/images/Temp/detail2.jpg") no-repeat;
          background-size: 100% auto;
        }
        &.spotsDetail3 {
          height: 4440/50rem;
          background: url("../../../../static/images/Temp/detail3.jpg") no-repeat;
          background-size: 100% auto;
        }
        &.spotsDetail4 {
          height: 9143/50rem;
          background: url("../../../../static/images/Temp/detail4.jpg") no-repeat;
          background-size: 100% auto;
        }
        &.spotsDetail5 {
          height: 6530/50rem;
          background: url("../../../../static/images/Temp/detail5.jpg") no-repeat;
          background-size: 100% auto;
        }
        &.spotsDetail6 {
          height: 5530/50rem;
          background: url("../../../../static/images/Temp/detail6.jpg") no-repeat;
          background-size: 100% auto;
        }
    }
    &::-webkit-scrollbar {
      display: none;
    }
    img {
      width: 100%;
    }
  }

</style>
