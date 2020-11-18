import BackTop from "components/content/backTop/BackTop"
import {debounce} from "common/utils"

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener:null,
      
    }
  },
  mounted() {
    let refresh = debounce(this.$refs.scroll.refresh,100)
      this.itemImgListener = ()=>{
      refresh()
      } 
      this.$bus.$on('itemImageLoad',this.itemImgListener)
  },
}

export const backTopMixin = {
  components:{
    BackTop
  },
  data() {
    return {
      isShowBackTop:false
    }
  },
  methods: {
    backClick(){
      this.$refs.scroll.scrollTo(0,0)
    },
  },
}