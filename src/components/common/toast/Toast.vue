<template>
    <div v-show="isShow" class="toast">
      <div>{{message}}</div>
    </div>
</template>

<script>
export default {
  name:'Toast',
  data() {
    return {
      message:'',
      isShow:false
    }
  },
  methods: {
    show(message, duration=2000){
      this.isShow  = true 
      this.message = message

      setTimeout(() => {
        this.isShow = false
        this.message = ''
      }, duration);
    }
  },
}
</script>

<style>
  .toast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50% , -50%);
    color: white;
    padding: 8px 10px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, .7);
    z-index: 999;
  }
</style>
