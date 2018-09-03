import axios from "axios";
axios.defaults.baseURL = " https://www.easy-mock.com/mock/5b508623b027bd30a3136cd3/example";

axios.interceptors.response.use((res)=>{
  // 在这里统一拦截结果 把结果处理成res.data.data
  return res.data.data;
});

/*首页的景点*/
export let homeSpots = ()=> {
  return axios.get("/home/spots");
};

/*首页的活动*/
export let homePlay = ()=> {
  return axios.get("/home/play");
};
