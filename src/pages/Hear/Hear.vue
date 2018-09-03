<template>
    <div id="hear">
      <div class="hear-top">
        <!--<div><img src="../../../static/images/hear/back.png"/></div>-->
        <!--<span></span>-->
        <minHeader title="听"></minHeader>
      </div>
      <div class="hear-content">
          <section class="pc-banner">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide swiper-slide-center none-effect">
                  <img src="../../../static/images/Hear/hear1.png" class="re-lz"/>
                </div>
                <div class="swiper-slide">
                  <img src="../../../static/images/Hear/hear2.png" class="re-lz" />
                </div>
                <div class="swiper-slide">
                  <img src="../../../static/images/Hear/hear3.png" />
                </div>
              </div>
            </div>
          </section>
      </div>
    </div>
</template>
<script>
  import Swiper from './../../../static/js/swiper.min.js'
  import minHeader from '../../components/Base/minHeader.vue'
  export default {
    name: "hear",
    components:{
      minHeader
    },
    mounted(){
      this.onload();
    },
    methods:{
      onload () {
        var swiper = new Swiper('.swiper-container',{
          loop:true,
          centeredSlides : true,//居中
//          slidesPerView: "auto",
          slidesPerView:1.2,//显示个数
          pagination : '.swiper-pagination',//分页效果
          paginationClickable:true,
        });
      }
    }
  }
</script>
<style lang="less" scoped>
  @import url("../../../static/css/swiper.min.css");
  #hear{
    width: 100%;
    background-color: white;
    height: 100%;
  }
  .hear-top{
    width: 100%;
    height: 16%;
    background-color: #28CCC3;
  }
  .hear-content{
    width: 100%;
    color: #00a8e6;
    height: 84%;
    background-color: #28CCC3;
    padding-top: 0.2rem;
  }


  .pc-banner {
    width: 100%;
  }

  @media screen {
    .pc-banner {
     width: 100%;
    }
  }
  .swiper-container {
    width: 100%;
  }
  .swiper-slide {
    -webkit-transition: transform 1.0s;
    -moz-transition: transform 1.0s;
    -o-transition: transform 1.0s;
    -webkit-transform: scale(0.95);
    transform: scale(0.95);
    margin:0 auto;
    width: 16rem;
  }
  @media screen {
    .swiper-slide {
      -webkit-transform: scale(0.95);
      transform: scale(0.95);
      width: 16rem;
    }
  }

  .swiper-slide-active,.swiper-slide-duplicate-active {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  @media screen{
    .swiper-slide-active,.swiper-slide-duplicate-active {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  .none-effect {
    -webkit-transition: none;
    -moz-transition: none;
    -o-transition: none;
  }
  .swiper-slide img {
    width: 100%;
    height: 21.5rem;
    border-radius: 0.4rem;
    display: block;
  }
</style>
