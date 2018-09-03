<template>
    <div class="spot">
      <minHeader :title="HeaderTitle"></minHeader>
      <Search @changShow = "changShowFather()"></Search>
      <!--测试加载动画-->
      <div class="loading" v-show="isShowLoading">
        <img src="../../../static/images/Loading/loading.gif" alt="">
      </div>
      <div class="main" v-show="!isShowLoading">
        <!--景点的html-->
         <ul>
           <li v-for="(item, index) in templateData" :key="item.id"  @click="goDetail(item.id)">
               <div class="spots-img">
                 <img :src=" '../../../static/images/'+ item.url" alt="">
               </div>
               <div class="spots-title">
                   <p>{{item.spotsName}}</p>
                   <span>{{item.rank}}A</span> | <span>福州市景点</span>
               </div>
           </li>
         </ul>
      </div>
    </div>
</template>
<script>
  import minHeader from "../../components/Base/minHeader.vue";
  import Search from "../../components/Base/Search.vue";
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        isShowLoading: false,
        HeaderTitle: "景区",
        SpotsData: [
          {id: 1, url: "Spots/1.jpg", spotsName: "三坊七巷景区", rank: 5},
          {id: 2, url: "Spots/2.jpg", spotsName: "三坊七巷景区", rank: 5},
          {id: 3, url: "Spots/3.jpg", spotsName: "三坊七巷景区", rank: 5},
          {id: 4, url: "Spots/4.jpg", spotsName: "三坊七巷景区", rank: 5},
        ]
      }
    },
    mounted() {
      let scroll = new BScroll('.main', {
        click: true
      });
    },
    methods: {
      changShowFather() {
        this.isShowLoading = true;
        setTimeout(()=> {
          this.isShowLoading = false;
        },500)
      },
      /*景点更多页跳到景点详情页*/
      goDetail(index) {
        let tabType = this.$route.params.id;
        this.$router.push(`/${tabType}/detail/${index}`);
      }
    },
    computed: {
      /*处理页面数据*/
      templateData() {
        let tabType = this.$route.params.id;
        let templateData = [];
        if(tabType==="spots") {
          templateData = this.SpotsData;
          this.HeaderTitle = "景区";
        } else if(tabType==="play") {
          templateData = this.SpotsData;
          this.HeaderTitle = "演出节目";
        }
        return templateData;
      },
    },
    components: {
      minHeader,
      Search
    }
  }
</script>
<style lang="less" scoped>
  .spot {
    height: 100%;
    background: #fff;
    position: relative;
    .loading {
      position: absolute;
      left: 50%;
      top: 30%;
      transform: translateX(-50%);
      width: 10rem;
      height: 10rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .main {
      position: absolute;
      width: 100%;
      top: 225/50rem;
      bottom: 0;
      overflow: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
      /*景点的css样式*/
       ul {
         width: 100%;
         li {
           box-sizing: border-box;
           padding: 0 37/50rem;
           height: 188/50rem;
           display: flex;
           align-items: center;
           border-bottom: 6/50rem solid #f7f9fa;
           .spots-img {
             width: 269/50rem;
             height: 160/50rem;
             img {
               width: 100%;
               height: 100%;
             }
           }
           .spots-title {
             padding-left: 24/50rem;
             color: #b3b3b3;
            p {
              font-size: 32/50rem;
              color: #2e2d2d;
              margin-bottom: 10/50rem;
            }
           }
         }
       }


    }
  }

</style>
