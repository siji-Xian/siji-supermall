<template>
  <div class="profile-top">
    <img class="profile" src="~assets/images/profile/avatar.svg" alt="">
    <span class="profile-name">admin</span>
    <div class="profile-my">
      <div class="profile-my-center">
        <p class="top">0</p>
        <span class="bottom">商品收藏</span>
      </div>
      <div class="profile-my-center">
        <p span class="top">0</p>
        <span class="bottom">店铺收藏</span>    
      </div>
      <div class="profile-my-center">
        <p class="top">0</p>
        <span class="bottom">我的足迹</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'ProfileTop'
}
</script>

<style scoped>
  .profile-top{
    width: 100vw;
    height: 180px;
    background-image: linear-gradient(to right,#FF8198,rgb(255, 131, 197));
  }
  .profile{
    width: 60px;
    position: relative;
    top: 10px;
    left: 10px;
  }
  .profile-name{
    position: absolute;
    font-size: 22px;
    left: 80px;
    top: 70px;
    color: white;
  }
  .profile-my{
    display: flex;
    width: 100vm;
    text-align: center;
    color: white;
    margin-top: 30px;
  }
  .profile-my-center{
    flex: 1;
  }
  .top{
    height: 25px;
    line-height: 20px;
    font-size: 18px;
    font-weight: 600;
  }
  .bottom{
    
    font-size: 13px;
  }

</style>