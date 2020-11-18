<template>
  <scroll class="content" ref="scroll">
    <div>
      <cart-list-item v-for="(item ,index) in cartList" :key="index" :item-info="item"></cart-list-item>
    </div>
  </scroll>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll"
  import CartListItem from "./CartListItem"

  import { mapGetters } from "vuex"

	export default {
		name: "CartList",
    components: {
      Scroll,
      CartListItem
    },
    computed: {
      ...mapGetters(['cartList'])
    },
    activated() {
      this.$refs.scroll.refresh()
    },
    
	}
</script>

<style scoped>
.content{
  overflow: hidden;
  position:absolute;
  top: 44px;
  bottom: 88px;
  left: 0px;
  right: 0px;
}

</style>
