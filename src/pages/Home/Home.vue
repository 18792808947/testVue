<template>
    <!--多加一个盒子为了滚动-->
    <div class="home-scroll">
      <div class="home">
        <div class="header">
          <input type="text"  class="search" placeholder="苍烟巷陌青榕老,白露园林紫蔗甜">
          <div class="search-icon"></div>
          <div class="title">福州</div>
          <div class="my-position">
            <span class="position-icon"></span>
            <span>自动定位:</span>
            <span>三坊七巷入口处</span>
          </div>
          <!--滑动导航部分-->
          <div class="nav">
            <ul ref="navScroll">
              <li :class="{'li-active': currentIndex===-1}">
                <div class="icon-read nav-icon"></div>
                <span>读</span>
              </li>
              <li :class="{'li-active': currentIndex===0}">
                <div class="icon-ing nav-icon"></div>
                <span>榕城ing</span>
              </li>
              <li :class="{'li-active': currentIndex===1}">
                <div class="icon-guan nav-icon"></div>
                <span>观</span>
              </li>
              <router-link :class="{'li-active': currentIndex===2}" tag="li" to="/hear">
                <div class="icon-listen nav-icon"></div>
                <span>听</span>
              </router-link>
              <li :class="{'li-active': currentIndex===3}">
                <div class="icon-yi nav-icon"></div>
                <span>忆</span>
              </li>
            </ul>
          </div>
        </div>
        <!--主体内容部分-->
        <div class="main">
          <div class="main-top">
            <ul>
              <li>
                <router-link to="/home/spots">
                  景点
                </router-link>
              </li>
              <li>
                <router-link to="/home/play">
                  活动
                </router-link>
              </li>
              <li>
                <router-link to="/home/hotel">
                  酒店
                </router-link>
              </li>
              <li>
                <router-link to="/home/food">
                  美食
                </router-link>
              </li>
              <li>
                <router-link to="/home/specity">
                  特产
                </router-link>
              </li>
              <li>
                <router-link to="/home/notes">
                  游记
                </router-link>
              </li>
              <li>
                <router-link to="/home/reservation">
                  预订
                </router-link>
              </li>
              <li>
                <router-link to="/home/private">
                  我的
                </router-link>
              </li>
            </ul>
          </div>
          <div class="main-bottom">
            <div class="tabView">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  import BScroll from 'better-scroll';
    export default {
        data() {
            return {
              NavScroll: {},
              NavScrollX: 0,
              tops: []
            }
        },
      mounted() {
        this.$nextTick(()=> {
          this.initNavScroll();
          this.initTop();
          new BScroll('.main-top', {
            click: true,
            scrollX: true
          });
          new BScroll('.home-scroll', {
            click: true,
          });
        })
      },
      methods: {
        initNavScroll() {
          this.NavScroll = new BScroll('.nav', {
              scrollX: true,
              click: true,
              probeType: 3
            });
          this.NavScroll.on("scroll", ({x,y})=> {
            this.NavScrollX = Math.abs(x);
          });
          this.NavScroll.on("scrollEnd", ({x,y})=> {
            this.NavScrollX = Math.abs(x);
          });
          },
        /*收集X轴的距离*/
        initTop() {
          const tops = [];
          let top = 0;
          tops.push(top);
          const lis = this.$refs.navScroll.getElementsByTagName("li");
          Array.prototype.slice.call(lis).forEach(li => {
            top = top+li.clientWidth + 18;
            tops.push(top);
          });
          this.tops = tops;
        }
      },
      computed: {
          currentIndex() {
            const {NavScrollX,tops } = this;
            const index = tops.findIndex((top, index)=> {
              return NavScrollX >= top && NavScrollX < tops[index+1]
            });
            return index;
          }
      },
    }
</script>
<style lang="less" scoped>
  /*路由动画*/
  .fadeIn-enter {
    opacity: 0;
  }
  .fadeIn-enter-active {
    transition: all .3s linear;
    opacity: 1;
  }
  .fadeIn-leave-active {
    transition: all .3s linear;
    opacity: 0;
  }
  .home-scroll {
    height: 100%;
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .home {
    .header {
      width: 750/50rem;
      height: 750/50rem;
      background: url("../../../static/images/Home/home_header.jpg") no-repeat;
      background-size: 100% 100%;
      position: relative;
      .search {
        width: 90%;
        height: 70/50rem;
        margin-left: 5%;
        margin-top: 1rem;
        font-size: 24/50rem;
        color: #989a99;
        padding-left: 80/50rem;
        box-sizing: border-box;
        border: none;
        border-radius: 8/50rem;
        background: rgba(255,255,255,.7);
      }
      .search-icon {
        position: absolute;
        left: 57/50rem;
        top: 70/50rem;
        width: 30/50rem;
        height: 30/50rem;
        background: url("../../../static/images/Home/search.png") no-repeat;
        background-size: 100% 100%;
      }
      .title {
        position: absolute;
        left: 38/50rem;
        top: 175/50rem;
        font-size: 72/50rem;
      }
      .my-position {
        position: absolute;
        left: 36/50rem;
        top: 277/50rem;
        font-size: 24/50rem;
        .position-icon {
          display: inline-block;
          width: 20/50rem;
          height: 24/50rem;
          background: url("../../../static/images/Home/position.jpg") no-repeat;
          background-size: 100% 100%;
        }
      }
      .nav {
        position: absolute;
        left: 0;
        top: 410/50rem;
        width: 100%;
        height: 310/50rem;
        /*不加有bug*/
        overflow: scroll;
        /*利用 css 3 的新特性  -webkit-scrollbar可以滚动,同时隐藏滚动条*/
        &::-webkit-scrollbar {
          display: none;
        }
        ul {
          display: flex;
          width: 30rem;
          li {
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            color: #696868;
            background: #fff;
            margin-right: 1rem;
            transition: all .5s;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            &.li-active {
              transition: all .5s;
              width: 5rem;
              height: 5rem;
              margin-top: .3rem;
            }
            .nav-icon {
             /* width: 90/50rem;
              height: 75/50rem;*/
              width: 60/50rem;
              height: 55/50rem;
              margin-bottom: 5/50rem;
            }
            .icon-read {
                background: url("../../../static/images/Home/du.jpg") no-repeat;
                background-size: 100% 100%;
              }
            .icon-guan {
              background: url("../../../static/images/Home/guan.jpg") no-repeat;
              background-size: 100% 100%;
            }
            .icon-ing{
                background: url("../../../static/images/Home/ing.jpg") no-repeat;
                background-size: 100% 100%;
              }
            .icon-listen{
              background: url("../../../static/images/Home/listen.jpg") no-repeat;
              background-size: 100% 100%;
            }
            .icon-yi{
              background: url("../../../static/images/Home/yi.jpg") no-repeat;
              background-size: 100% 100%;
            }

            &.moveDown {
              width: 6rem;
              height: 6rem;
              margin-top: .8rem;
            }
          }
        }
      }
    }
    .main {
      width: 95%;
      margin-left: 2.5%;
      .main-top {
        height: 60/50rem;
        ul {
          display: flex;
          height: 60/50rem;
          width: 135%;
          li {
            flex: 1;
            height: 60/50rem;
            color: #696868;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
            a {
              font-size: 34/50rem;
              padding-bottom: 5/50rem;
              border-bottom: 4/50rem solid transparent;
              &.router-link-active {
                font-size: 38/50rem;
                color: #2e2d2d;
                border-bottom-color: #27cfc0;
              }
            }
          }
        }
      }
      .main-bottom {
        .tabView {
          height: 100%;
        }
      }
    }
  }

</style>
