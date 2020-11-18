<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"/>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info :param-info="paramInfo" ref="params"/>
      <detail-comment-info :comment-info="commentInfo" ref="comment"/>
      <goods-list :goods="recommends" ref="recommend"/>
    </scroll>
    <detail-bottom-bar @addCart="addToCart"/>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
  
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'

import {debounce} from "common/utils"

import Scroll from "components/common/scroll/Scroll"



import GoodsList from "components/content/goods/GoodsList"

import {itemListenerMixin,backTopMixin} from "common/mixin"

import {getDetail,Goods,Shop,GoodsParam,getRecommend} from 'network/detail'


export default {
  name:'Detail',
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    // Toast

  },
  mixins:[itemListenerMixin,backTopMixin],
  data() {
    return {
      iid:null,
      topImages:[],
      goods:{} ,
      shop:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{},
      recommends:[],
      themeTopYs:[0,-1000,-2000,-3000],
      currentIndex:0,
      // message:'',
      // show:false
    }
  },
   mounted() {
    //1.监听图片加载完成
   
  
  },
  destroyed() {
    this.$bus.$off('imageLoad',this.itemImgListener)
  },
  created() {
    //1.保存转入的iid
    this.iid= this.$route.params.iid
    //2.根据iid请求详细数据
    getDetail(this.iid).then(res=>{

      //1.获取顶部图片数据
      const data = res.result
      this.topImages = data.itemInfo.topImages
      //2.获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services )
      //3.创建店铺信息
      this.shop = new Shop(data.shopInfo)
      //4.保存商品详细数据
      this.detailInfo = data.detailInfo
      //5.获取参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule) 
      //6.取出评论信息
      if (data.rate.cRate !== 0 ){
        this.commentInfo=data.rate.list[0]
      }
    })

    //3.请求推荐数据
    getRecommend().then(res=>{
      this.recommends=res.data.list
    })

    //4.监听详情图片加载完成
  },
  updated() {

      
  },
  methods: {
    imageLoad(){
      this.$refs.scroll.refresh()
      this.themeTopYs=[]
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.params.$el.offsetTop-45)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop-45)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop-45)
      this.themeTopYs.push(Number.MAX_VALUE)
    },
    titleClick(index){
      this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],500)
    },
    contentScroll(position){
      const positionY = -position.y
      let length = this.themeTopYs.length
      for (let i = 0; i < length-1 ; i++) {
        if (this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])) {
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex
        }
        // if (this.currentIndex !== i && ((i < length - 1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) || (i===length - 1 && positionY >= this.themeTopYs[i]))) {
        //   this.currentIndex = i
        //   this.$refs.nav.currentIndex = this.currentIndex
        // }
      }
      this.isShowBackTop = (-position.y) >1000
    },
    addToCart(){
      //1.获取购物车需要展示的信息
      let rmb = RegExp('¥')
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.oldPrice
      product.oldPrice=(this.goods.oldPrice).replace(rmb,'')
      product.iid = this.iid

      //2.将商品添加到购物车
      // this.$store.commit('addCart', product)
      this.$store.dispatch('addCart',product).then(res => {
        // this.show = true;
        // this.message = res

        // setTimeout(() => {
        //   this.show = false
        //   this.message = ''
        // }, 1500);
        this.$toast.show(res,1500)

        console.log(res);
      })
    }

  },
  
}
</script>

<style scoped>
#detail{
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
  overflow: hidden;
}
.detail-nav{
  position: relative;
  z-index: 10;
  background-color: #fff;
}
.content{
  height: calc(100% - 44px - 59px);
}
</style>