<template>
<div id="profile">
  <nav-bar class="profile-nav"><div slot="center">我的</div></nav-bar>
  <profile-top></profile-top>
  <scroll class="content" ref="scroll">
  <profile-bottom></profile-bottom>
  <goods-list class="goodslist" :goods="recommends" ></goods-list>
  </scroll>
</div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import ProfileTop from "./childComps/ProfileTop"
import ProfileBottom from "./childComps/ProfileBottom"
import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList"

import {getRecommend} from "network/detail"

export default {
name:"Profile",
components:{
  NavBar,
  ProfileTop,
  ProfileBottom,
  Scroll,
  GoodsList
},
data() {
  return {
    recommends:[]
  }
},
created() {
  //请求推荐数据
  getRecommend().then(res=>{
    this.recommends = res.data.list
  })

  this.$bus.$on('itemImageLoad',()=>{
    this.$refs.scroll.refresh()
  })
},


}
</script>

<style scoped>
.profile-nav {
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.content{
  overflow: hidden;
  position:absolute;
  top: 44px;
  bottom: 49px;
  left: 0px;
  right: 0px;
}
#profile {
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
.goodslist{
  margin-top: 150px;
  background-color: #F7F7F7;
}

</style>