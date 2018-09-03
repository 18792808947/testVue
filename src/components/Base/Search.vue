<template>
    <div class="search">
        <div class="my-container">
            <div class="near" :class="{bg: isBgClass==='near'}"
                 @click = "isBgClass = 'near' "
            >附近</div>
            <div class="recommend" :class="{bg: isBgClass==='recommend'}"
                 @click = " isBgClass = 'recommend' "
            >推荐
            </div>
            <div class="rank">
              <select v-model="selectRank">
                <option value="rank">类别等级</option>
                <option value ="5A">5A</option>
                <option value="4A">4A</option>
                <option value="3A">3A</option>
              </select>
            </div>
            <div class="area" >
              <select v-model="selectArea">
                <option value="area">区域</option>
                <option value ="fuZhou">福州市</option>
                <option value="changLe">长乐</option>
                <option value="ningDe">宁德</option>
              </select>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
              selectRank: "rank",
              selectArea: "area",
              isBgClass: "recommend"
            }
        },
      watch: {
        selectRank(value) {
            this.$emit("changShow")
        },
        selectArea(value) {
          this.$emit("changShow")
        }

      }
    }
</script>
<style lang="less" scoped>
  select {
    //清除select的边框样式
    border: none;
    //清除select聚焦时候的边框颜色
    outline: none;
    background: #f7f9fa;
  }
  option{
    color: #969696;
    background: #f7f9fa;
  }

  .search {
    position: fixed;
    width: 100%;
    top: 115/50rem;
    height: 110/50rem;
    background: #f7f9fa;
    .my-container {
      width: 100%;
      height: 100%;
      padding-top: 15/50rem;
      padding-left: 40/50rem;
      box-sizing: border-box;
      display: flex;
      span {
        display: inline-block;
        width: 20/50rem;
        height: 10/50rem;
        margin-left: 7/50rem;
        background: url("../../../static/images/minHeader/arrow.jpg") no-repeat;
        background-size: 100% 100%;
      }
      .near, .recommend, .rank, .area {
        font-size: 26/50rem;
        color: #969696;
        height: 60/50rem;
        line-height: 60/50rem;
        padding: 0 22/50rem;
        box-sizing: border-box;
        border: 2/50rem solid #969696;
        border-radius: 20/50rem;
        margin-right: 16/50rem;
      }
      .bg {
        color: #fff;
        background: #27c7c5;
      }
    }
  }

</style>
