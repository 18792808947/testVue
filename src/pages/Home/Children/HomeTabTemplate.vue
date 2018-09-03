<template>
  <div class="home-tab">
    <div v-for="(item, index) in templateData"
         :key="item.id"
         :class="{'img-one': item.id===1,
         'img-two': item.id===2,
         'my-img': item.id>=3,
         'img-distance': item.id===4 || item.id===7
         }">
      <img :src=" './static/images/' + item.url" @click="goDetail(item.id)">
      <div class="introduce">
        <p>{{item.spotsName}}</p>
        <p>
          <span class="position-icon"></span>
          <span>{{item.distance}}公里</span>
          <span class="time-icon"></span>
          <span>{{item.time}}小时</span>
        </p>
        <p>
          <span>{{item.rank}}A</span> |
          <span>{{item.ticket}}</span>
          <span v-if="item.id===1 || item.id===2">| 优惠活动</span>
        </p>
      </div>
    </div>
    <div class="my-img last" @click="lookMore()">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>
<script>
  import {homeSpots, homePlay} from "../../../api";
  export default {
    data() {
      return {
        SpotsData: [
          {id: 1, url: "Spots/1.jpg",
            spotsName: "三坊七巷景区", distance: "3.6",
            time: 2, rank: 5, ticket: "免费"},
          {id: 2, url: "Spots/2.jpg",
            spotsName: "金山寺", distance: "3.6",
            time: 3, rank: 5, ticket: "免费"},
          {id: 3, url: "Spots/3.jpg",
            spotsName: "永泰天门山", distance: "3.6",
            time: 2, rank: 5, ticket: "免费"},
          {id: 4, url: "Spots/4.jpg",
            spotsName: "森林公园", distance: "3.6",
            time: 2, rank: 5, ticket: "免费"},
          {id: 5, url: "Spots/5.jpg",
            spotsName: "林阳禅寺", distance: "3.6",
            time: 2, rank: 5, ticket: "免费"},
          {id: 6, url: "Spots/6.jpg",
            spotsName: "方广岩寺", distance: "3.6",
            time: 2, rank: 5, ticket: "免费"},
          {id: 7, url: "Spots/7.jpg",
            spotsName: "公园二", distance: "3.6",
            time: 2, rank: 5, ticket: "免费"},
        ],
        PlayData: [
          {id: 1, url: "Performances/1.jpg",
            spotsName: "温泉高尔夫", distance: "3.6",
            time: 2, rank: 5, ticket: "免费"},
          {id: 2, url: "Performances/2.jpg",
            spotsName: "坊巷音影", distance: "3.6",
            time: 3, rank: 5, ticket: "免费"},
          {id: 3, url: "Performances/3.jpg",
            spotsName: "贵安欢乐世界", distance: "3.6",
            time: 2, rank: 5, ticket: "免费"},
          {id: 4, url: "Performances/4.jpg",
            spotsName: "海洋世界", distance: "3.6",
            time: 2, rank: 5, ticket: "免费"},
          {id: 5, url: "Performances/5.jpg",
            spotsName: "赤壁漂流", distance: "3.6",
            time: 2, rank: 5, ticket: "免费"},
          {id: 6, url: "Performances/6.jpg",
            spotsName: "永泰滑翔", distance: "3.6",
            time: 2, rank: 5, ticket: "免费"},
          {id: 7, url: "Performances/7.jpg",
            spotsName: "源脉温泉", distance: "3.6",
            time: 2, rank: 5, ticket: "免费"},
        ],
        HotelData: [
          {id: 1, url: "Hotel/1.jpg",
            spotsName: "温泉高尔夫", distance: "3.6",
            time: 2, rank: 5, ticket: "免费"},
          {id: 2, url: "Hotel/2.jpg",
            spotsName: "坊巷音影", distance: "3.6",
            time: 3, rank: 5, ticket: "免费"},
          {id: 3, url: "Hotel/3.jpg",
            spotsName: "贵安欢乐世界", distance: "3.6",
            time: 2, rank: 5, ticket: "免费"},
          {id: 4, url: "Hotel/4.jpg",
            spotsName: "海洋世界", distance: "3.6",
            time: 2, rank: 5, ticket: "免费"},
          {id: 5, url: "Hotel/5.jpg",
            spotsName: "赤壁漂流", distance: "3.6",
            time: 2, rank: 5, ticket: "免费"},
          {id: 6, url: "Hotel/6.jpg",
            spotsName: "永泰滑翔", distance: "3.6",
            time: 2, rank: 5, ticket: "免费"},
          {id: 7, url: "Hotel/7.jpg",
            spotsName: "源脉温泉", distance: "3.6",
            time: 2, rank: 5, ticket: "免费"},
        ],
        FoodData: [
          {id: 1, url: "Food/1.jpg",
            spotsName: "温泉高尔夫", distance: "3.6",
            time: 2, rank: 5, ticket: "免费"},
          {id: 2, url: "Food/2.jpg",
            spotsName: "坊巷音影", distance: "3.6",
            time: 3, rank: 5, ticket: "免费"},
          {id: 3, url: "Food/3.jpg",
            spotsName: "贵安欢乐世界", distance: "3.6",
            time: 2, rank: 5, ticket: "免费"},
          {id: 4, url: "Food/4.jpg",
            spotsName: "海洋世界", distance: "3.6",
            time: 2, rank: 5, ticket: "免费"},
          {id: 5, url: "Food/5.jpg",
            spotsName: "赤壁漂流", distance: "3.6",
            time: 2, rank: 5, ticket: "免费"},
          {id: 6, url: "Food/5.jpg",
            spotsName: "永泰滑翔", distance: "3.6",
            time: 2, rank: 5, ticket: "免费"},
          {id: 7, url: "Food/5.jpg",
            spotsName: "源脉温泉", distance: "3.6",
            time: 2, rank: 5, ticket: "免费"},
        ],
      }
    },
    methods: {
       lookMore() {
        let tabType = this.$route.params.id;
        if(tabType) {
          this.$router.push('/home/more/' + tabType)
        }
      },
        goDetail(index) {
            let tabType = this.$route.params.id;
            this.$router.push(`/${tabType}/detail/${index}`);
        }
    },
    computed: {
      /*处理页面数据*/
      templateData() {
        let tabType = this.$route.params.id;
        let  templateData = [];
        if(tabType === "spots") {
          templateData=this.SpotsData;
        } else if(tabType=== "play") {
          templateData=this.PlayData;
        } else if(tabType=== "hotel") {
          templateData=this.HotelData;
        } else if(tabType=== "food") {
          templateData=this.FoodData;
        }
        return templateData;
      }
    },

  }
</script>
<style lang="less" scoped>
  .home-tab {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .my-img {
      width: 33%;
      height: 190/50rem;
      position: relative;
      .introduce {
        position: absolute;
        left: 0;
        bottom: 0;
        color: #000;
        p {
          color: #fffeff;
          font-size: 30/50rem;
          span {
            font-size: 24/50rem;
            color: #fff;
          }
        }
      }
      img {
        width: 100%;
        height: 100%;
      }
      &.img-distance {
        margin: 0 .5%;
      }
    }
    .last {
      color: #666;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #eee;
      span {
        display: inline-block;
        width: .3rem;
        height: .3rem;
        margin-right: .1rem;
        border-radius: 50%;
        background: #27c8c4;
      }
    }
  }
  .img-one {
    width: 59%;
    height: 270/50rem;
    position: relative;
    .introduce {
      position: absolute;
      left: 0;
      bottom: 0;
      color: #000;
      p {
        color: #fffeff;
        font-size: 30/50rem;
        span {
          font-size: 24/50rem;
          color: #fff;
        }
      }
    }
    img {
      width: 100%;
      height: 100%;
    }
    margin-right: 1%;
  }
  .img-two {
    width: 40%;
    height: 270/50rem;
    position: relative;
    .introduce {
      position: absolute;
      left: 0;
      bottom: 0;
      color: #000;
      p {
        color: #fffeff;
        font-size: 30/50rem;
        span {
          font-size: 24/50rem;
          color: #fff;
        }
      }
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
