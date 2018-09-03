import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

import Home from "../pages/Home/Home.vue";
/*Home的二级路由页面*/
import HomeTabTemplate from "../pages/Home/Children/HomeTabTemplate.vue";
/*pages*/
import MoreTemplate from "../pages/Spots/More.vue";

import Hear from "../pages/Hear/Hear.vue";

/*景点详情页*/
import SpotsDetail from "../pages/Spots/Detail/SpotsDetail.vue";
export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    /*主页和主页的二级路由*/
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children:[
        { path: '/home/:id', component: HomeTabTemplate},
        {path: "", redirect: "/home/spots"}
      ],
    },
    /*主页的二级路由点击查看更多部分的路由*/
    {
      path: '/home/more/:id',
      name: 'MoreTemplate',
      component: MoreTemplate,
    },
    /*主页的图片,点击查看景点的详情路由*/
    {
      /*this.$route.params.id或者.type获取type和id,在决定跳转到具体的页面*/
      path: '/:type/detail/:id',
      name: 'detail',
      component: SpotsDetail,
    },
    {
      path: '/hear',
      name: 'Hear',
      component: Hear,
    },
  ]
})
