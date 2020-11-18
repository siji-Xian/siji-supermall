<template>
  <div class="profile-bottom">
    <div class="profile-bottom-top">
      <div>
      <img src="~assets/images/profile/The-wallet.svg" alt="">
      <p>待付款</p>
      </div>
      <div>
      <img src="~assets/images/profile/logistics.svg" alt="">
      <p>待收货</p>
    </div>
      <div>
      <img src="~assets/images/profile/after-sales.svg" alt="">
      <p>退换/售后</p>
    </div>
      <div>
      <img src="~assets/images/profile/The-order.svg" alt="">
      <p>全部订单</p>
    </div>
    </div>

    <div class="profile-bottom-center">
      <div>
      <p>0</p>
      <span>优惠券</span>
      </div>
       <div>
      <p>0</p>
      <span>账户余额</span>
      </div>
       <div>
      <p>0</p>
      <span>蘑菇</span>
      </div>
       <div>
      <p>0</p>
      <span>红包</span>
      </div>
      <div>
      <img src="~assets/images/profile/assets.svg" alt="">
      <span class="assets">我的资产</span>
      </div>
    </div>
    <div class="profile-bottom-bottom">
      <p>工具与服务</p>
      <div class="border-bottom"></div>
      <div class="profile-bottom-bottom-item">
        <div>
          <img src="~assets/images/profile/客服.png" alt="">
          <span>客服</span>
        </div>
        <div>
          <img src="~assets/images/profile/预约.png" alt="">
          <span>预约</span>
        </div>
        <div>
          <img src="~assets/images/profile/回收.png" alt="">
          <span>回收</span>
        </div>
        <div>
          <img src="~assets/images/profile/火车.png" alt="">
          <span>火车票</span>
        </div>
        <div>
          <img src="~assets/images/profile/应用.png" alt="">
          <span>应用</span>
        </div>
        <div>
          <img src="~assets/images/profile/飞机.png" alt="">
          <span>机票</span>
        </div>
        <div>
          <img src="~assets/images/profile/酒店.png" alt="">
          <span>酒店</span>
        </div>
        <div>
          <img src="~assets/images/profile/送礼物.png" alt="">
          <span>礼包</span>
        </div>
        <div>
          <img src="~assets/images/profile/86-客车.png" alt="">
          <span>汽车票</span>
        </div>
         <div>
          <img src="~assets/images/profile/联系人.png" alt="">
          <span>联系人</span>
        </div>
      </div>
      
    </div>
    <p class="tuijian">——为您推荐——</p>

  </div>
</template>

<script>

export default {
  name:"ProfileBottom",
  

}
</script>

<style scoped>
  .goodslist{
    position: absolute;
    top: 510px;
  }

  .tuijian{
    position: absolute;
    top: 485px;
    width: 100%;
    text-align: center;
  }
  .profile-bottom{
    position: relative;
    height: 520px;
    width: 100%;
    background-color: #F7F7F7;
    top: 160px;
    margin-top:165px;
    border-radius: 15px;
  }
  .profile-bottom-top{
    position: absolute;
    width: 100%;
    display: flex;
    text-align: center;
    height: 100px;
    background-color: white;
    border-radius: 15px;
  }
  .profile-bottom-top div{
    flex: 1;
    width: 35px;
  }
  .profile-bottom-top img{
    margin-top: 25px;
    width: 25px;
  }
  .profile-bottom-top p{
    font-size: 14px;
  }
  .profile-bottom-center{
    position: absolute;
    width: 100%;
    display: flex;
    text-align: center;
    height: 100px;
    background-color: white;
    border-radius: 15px;
    top: 115px;
  }
  .profile-bottom-center div{
    flex: 1;
    width: 35px;
  }
  .profile-bottom-center img{
    margin-top: 25px;
    width: 25px;
  }
  .profile-bottom-center p{
    font-size: 20px;
    margin-top: 25px;
    font-weight: 600;
    height: 28px;
    line-height: 28px;
  }
  .profile-bottom-center span{
    font-size: 14px;
  }
  .assets{
    display: block;
  }

  .profile-bottom-bottom{
    position: absolute;
    width: 100%;
    display: flex;
    text-align: center;
    height: 250px;
    background-color: white;
    border-radius: 15px;
    top: 230px;
  }
  .profile-bottom-bottom p{
    width: 100%; 
    text-align: left;
    margin: 5px 5px;
      font-size: 16px;
      font-weight: 600;
  }
  .border-bottom{
    border-bottom:1px solid rgb(224, 224, 224);
    width: 100%;
    position: absolute;
    top: 30px;
  }
  .profile-bottom-bottom-item{
    position: absolute;
    top: 32px;
    width: 100%;
    display: flex;
    height: 200px;
    text-align: center;
    flex-wrap: wrap;
  }
  .profile-bottom-bottom img{
    margin:10px 10px 5px 10px ;
    width: 30px;
  }
  .profile-bottom-bottom span{
    display: block;
    font-size: 12px;
  }
  .profile-bottom-bottom-item div{
    flex: 0 0 25%;
  }
</style>