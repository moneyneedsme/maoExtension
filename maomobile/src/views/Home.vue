<template>
  <div class="home">
    <swiper :options="swiperOption" ref="mySwiper" >
      <swiper-slide>
        <div class='banner1'>
          <img class='logoImg' :src="require('../assets/image/logo.png')" alt="自购猫">
          <h1>一站式自助售货机</h1>
          <h2>零售解决方案</h2>
          <button class='trial' @click='mask=true'>免费试用</button>
          <div class='introduce'>
            <i>运营系统SAAS</i>
            <i>智能物联中间件</i>
            <i>个性开发服务</i>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class='banner2'>
          <img class='logoImg' :src="require('../assets/image/logo.png')" alt="自购猫">
          <h1>无缝兼容，快速接入</h1>
          <h2>智能系统</h2>
          <p>SAAS平台+APP+小程序+A端售卖</p>
          <button class='trial' @click='mask=true'>免费试用</button>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class='banner3'>
          <img class='logoImg' :src="require('../assets/image/logo.png')" alt="自购猫">
          <h1>多平台零售应用</h1>
          <h2>自助吐袋机/售药机/咖啡机/棉花糖机...</h2>
          <button class='trial' @click='mask=true'>免费试用</button>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <h6 class='title'>我们服务</h6>
    <div class='service'>
      <div>
        <img :src="require('../assets/image/zhinengxitong.png')" alt="零售应用及智能系统">
        <h4>零售应用及智能系统</h4>
        <p>提供便捷有效率的自助零售设备平台系统以及智能SAAS平台，支持各式自助售货设备。</p>
      </div>
      <div>
        <img :src="require('../assets/image/zhinengyingjian.png')" alt="零售应用及智能系统">
        <h4>智能硬件</h4>
        <p>支持各种自助类设备终端以及智能化终端设备。</p>
      </div>
      <div>
        <img :src="require('../assets/image/shebeijieru.png')" alt="零售应用及智能系统">
        <h4>设备接入</h4>
        <p>免费提供各式设备平台接入，咨询，开发服务。</p>
      </div>
      <div>
        <img :src="require('../assets/image/yingxiaotuiguang.png')" alt="零售应用及智能系统">
        <h4>营销推广</h4>
        <p>提供会员积分、返现，互动抽奖游戏等，可以帮你定制凯纷程序，满足你新形式的互动营销活动需求。</p>
      </div>
    </div>
    <div class='advantage'>
      <h6 class='title'>我们优势</h6>
      <h5>无缝兼容，快速接入</h5>
      <div>
        <p>围绕设备运营场景，重构人、货、场的零售运营流程，</p>
        <p>无论是直营、加盟、联营，都能利用简单快速的感知化功能</p>
        <p>帮助企业完成设备运维、商品管理、营销运营，渠道分销支撑，</p>
        <p>有效提高企业效率的增长和成本的节约</p>
      </div>
    </div>
    <div class='advantageDetail'>
      <div>
        <img :src="require('../assets/image/anquanwending.png')">
        <p>安全稳定</p>
      </div>
      <div>
        <img :src="require('../assets/image/tanxingkuozhan.png')">
        <p>弹性扩展</p>
      </div>
      <div class='top'>
        <img :src="require('../assets/image/dichengben.png')">
        <p>最低成本</p>
      </div>
      <div class='top'>
        <img :src="require('../assets/image/kuaisuyunwei.png')">
        <p>快速运维</p>
      </div>
    </div>
    <h6 class='title'>系统核心功能</h6>
    <div class='core'>
      <div>
        <img :src="require('../assets/image/renjijiaohu.png')">
        <h4>人机交互系统</h4>
        <p>商品展示、营销互动、广告播放、多种支付方式。完美适配多种显示屏幕，自定义显示风格；支持各类促销/营销活动落地；</p>
      </div>
      <div>
        <img :src="require('../assets/image/jiamengshangguanli.png')">
        <h4>加盟商管理</h4>
        <p>发展代理。加盟、分销等</p>
        <p>业务。轻松管理多级组织</p>
        <p>业务体系。</p>
      </div>
      <div>
        <img :src="require('../assets/image/baobiaofenxi.png')">
        <h4>智能数据报表分析</h4>
        <p>一体化智能管理销售，提高整个售卖体系的运转效率；大幅度降低维护成本订单明细、财务核账、收益分析、销量预测。</p>
      </div>
      <div>
        <img :src="require('../assets/image/xiaochengxugoumai.png')">
        <h4>小程序购买</h4>
        <p>提供便捷有效率的自助零</p>
        <p>售设备平台系统以及智能</p>
        <p>SAAS平台，支持各式自助</p>
        <p>售货设备。</p>
      </div>
      <div>
        <img :src="require('../assets/image/appyunwei.png')">
        <h4>APP运维</h4>
        <p>支持APP进行补货、数据</p>
        <p>查看、预警消息接收、</p>
        <p>商品管理、运营管理等。</p>
      </div>
      <div>
        <img :src="require('../assets/image/yunyingguanli.png')">
        <h4>运营管理</h4>
        <p>点位线路分析管理、配货</p>
        <p>管理、库存监控、收退</p>
        <p>款、补货计划、补货记</p>
        <p>录、支付方式管理。</p>
      </div>
      <div>
        <img :src="require('../assets/image/caiwuguanli.png')">
        <h4>财务管理</h4>
        <p>T+1与D+1两种 财务清算 </p>
        <p>体系 ，支持日、月等。</p>
        <p>账单汇总对账。多商家平</p>
        <p>台自动分账。</p>
      </div>
      <div>
        <img :src="require('../assets/image/guanggaoguanli.png')">
        <h4>广告管理</h4>
        <p>远程操作，极简操作“一</p>
        <p>键”发布，同步管理内容</p>
        <p>素材，支持定向广告发</p>
        <p>布，提供海量广告素材库，分类管理，随用随取。</p>
      </div>
      <div>
        <img :src="require('../assets/image/huiyuanguanli.png')">
        <h4>会员管理</h4>
        <p>会员优惠、会员储值、积</p>
        <p>分、优惠券，强大的数据</p>
        <p>分析功能，支持各类型优</p>
        <p>惠活动推送；</p>
      </div>
    </div>
    <div class='footer'>
      <h2>深圳自购猫科技有限公司</h2>
      <p>ICP证沪B2-20180118沪公网安备</p>
      <p>31011502008153号上海工商实名认证</p>
    </div>
    <div class='apply' @touchmove='noMask' v-show='mask'>
      <div>
        <h5>欢迎申请试用</h5>
        <img :src="require('../assets/image/close.png')" @click='mask=false'>
        <div class='inputBox'>
          <label for="name">联系人：</label>
          <input type="text" id='name' v-model='userName'>
        </div>
        <div class='inputBox'>
          <label for="phone">手机号码：</label>
          <input type="text" id='phone' v-model='phone'>
        </div>
        <div class='inputBox'>
          <label for="wx">微信号：</label>
          <input type="text" id='wx' v-model='wx'>
        </div>
        <button @click='submit'>提交 / 注册</button>
        <p>我们会在2个工作日内与您联系</p>
        <h3>198-2124-2347</h3>
        <p>快速联系方式</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'home',
  data(){
    return{
      swiperOption:{
        pagination: {
          el: '.swiper-pagination',
        },
      },
      userName:null,
      phone:null,
      wx:null,
      mask:false
    }
  },
  mounted(){
    
  },
  methods:{
    submit(){
      if(!this.userName){
        alert('请先填写联系人~')
      }else if(!this.phone){
        alert('请先填写手机号码~')
      }else if (!/^1[3456789]\d{9}$/.test(this.phone)) {
        alert("电话号码格式错误")
      }else{
        const url = `https://zgm-platform-test.zigoumao.com/system/IntentionalChannel/addIntentionalChannel`;
        const data = {
          name:this.userName,
          phone:this.phone,
          remark:this.wx
        }
        axios.post(url,data).then(res=>{
          if(res.data.code==200){
            alert('提交成功！');
            this.mask = false
          }
        }).catch(error=>{
          alert(error)
        })
      }
    },
    noMask(event){
      event.preventDefault()
    }
  }
}
</script>
<style lang="less" scoped>
.home{
  .banner1{
    overflow: hidden;
    height: 922px;
    background: url('../assets/image/phone_banner1.png') no-repeat;
    background-size: 100% 100%;
    >h1{
      margin-top: 62px;
    }
    >h1,>h2{
      font-size:48px;
      font-family:Microsoft YaHei;
      font-weight:400;
      color:rgba(255,255,255,1);
      text-align: center
    }
    >button{
      margin-top: 44px;
    }
    .introduce{
      overflow: hidden;
      font-size: 0px;
      margin-top: 46px;
      >i{
        margin-left: 40px;
        font-size:24px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(255,255,255,1);
        &::before{
          content: '';
          display: inline-block;
          vertical-align:-3px;
          margin-right: 10px;
          width: 26px;
          height: 26px;
          background: url('../assets/image/circle.png') no-repeat;
          background-size: 100% 100%
        }
      }
    }
  }
  .banner2{
    overflow: hidden;
    height: 922px;
    background: url('../assets/image/phone_banner2.png') no-repeat;
    background-size: 100% 100%;
    >h1{
      margin-top: 51px;
    }
    >h1,>h2{
      font-size:48px;
      font-family:Microsoft YaHei;
      font-weight:400;
      color:rgba(255,255,255,1);
      text-align: center
    }
    >p{
      font-size:24px;
      font-family:Microsoft YaHei;
      font-weight:400;
      color:rgba(255,255,255,1);
      text-align: center;
      margin-top: 28px;
    }
    >button{
      margin-top: 50px;
    }
  }
  .banner3{
    overflow: hidden;
    height: 922px;
    background: url('../assets/image/phone_banner3.png') no-repeat;
    background-size: 100% 100%;
    >h1{
      font-size:48px;
      font-family:Microsoft YaHei;
      font-weight:400;
      color:rgba(255,255,255,1);
      text-align: center;
      margin-top: 84px;
    }
    >h2{
      font-size:24px;
      font-family:Microsoft YaHei;
      font-weight:400;
      color:rgba(255,255,255,1);
      text-align: center;
      margin-top: 25px;
    }
    >button{
      margin-top: 48px;
    }
  }
  .logoImg{
    width: 269px;
    margin: 29px 0 0 36px;
  }
  .trial{
    display: block;
    outline: none;
    width:268px;
    height:74px;
    line-height:74px;
    background:rgba(255,187,18,1);
    border-radius:4px;
    border:none;
    margin:0px auto 0;
    font-size:27px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
  }
  /deep/.swiper-pagination-bullet{
    width:36px;
    height:10px;
    background:rgba(255,255,255,0.2);
    border-radius:5px;
    margin:0 7px;
  }
  /deep/.swiper-pagination-bullet-active{
    background:rgba(255,255,255,1);
  }
  .title{
    font-size:50px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(67,115,232,1);
    text-align: center;
    margin-top: 64px;
    margin-bottom: 28px;
    &::after{
      content: '';
      display: block;
      width:52px;
      height:4px;
      background:rgba(255,187,18,1);
      margin:20px auto 0;
    }
  }
  .service{
    font-size: 0px;
    overflow: hidden;
    padding:0 29px 60px;
    >div{
      display: inline-block;
      vertical-align: top;
      width: 48%;
      height: 378px;
      margin-right: 4%;
      margin-top: 28px;
      box-shadow:0px 0px 20px 0px rgba(89,93,215,0.2);
      >img{
        width: 116px;
        height: 116px;
        display: block;
        margin:19px auto 0;
      }
      >h4{
        font-size:25px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(102,102,102,1);
        margin-top:30px;
        text-align: center
      }
      >p{
        text-align: center;
        font-size:19px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(102,102,102,1);
        margin-top: 40px;
        padding:0 19px;
      }
    }
    >div:nth-of-type(2n){
      margin-right: 0
    }
  }
  .advantage{
    background:rgba(89,93,215,1);
    height: 476px;
    text-align: center;
    overflow: hidden;
    padding-bottom: 80px;
    >h6{
      color: white;
      margin-top: 60px;
    }
    >h5{
      font-size:21px;
      font-family:Microsoft YaHei;
      font-weight:400;
      color:rgba(255,255,255,1);
      margin-top: 35px;
    }
    >div{
      overflow: hidden;
      margin-top: 20px;
      >p{
        font-size:17px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(255,255,255,0.5);
        line-height:40px;
      }
    }
  }
  .advantageDetail{
    width:568px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 20px 0px rgba(89,93,215,0.2);
    margin:-120px auto 0;
    overflow: hidden;
    padding:44px;
    >div{
      width: 50%;
      display: inline-block;
      vertical-align: top;
      box-sizing: border-box;
      text-align: center;
      >img{
        width:73px;
        height:64px;  
        vertical-align: top;
      }
      >p{
        font-size:25px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(67,115,232,1);
        margin-top: 26px;
      }
      &.top{
        margin-top: 76px;
      }
    }
  }
  .core{
    padding:29px;
    font-size: 0px;
    overflow: hidden;
    display:flex;
    justify-content: space-between;
    flex-wrap: wrap;
    >div{
      width: 48.5%;
      text-align: center;
      display: inline-block;
      vertical-align: top;
      box-sizing: border-box;
      padding:29px 25px;
      min-height: 436px;
      margin-bottom: 20px;
      box-shadow:0px 0px 20px 0px rgba(89,93,215,0.2);
      >img{
        width:128px;
        height:128px;
        vertical-align: top;
      }
      >h4{
        font-size:25px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(102,102,102,1);
        margin-top: 25px;
        margin-bottom: 54px;
      }
      >p{
        font-size:19px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(102,102,102,1);
        line-height:35px;
      }
    }
  }
  .footer{
    background:rgba(39,39,39,1);
    padding:33px 0;
    text-align: center;

    >h2,>p{
      font-size:18px;
      font-family:Microsoft YaHei;
      font-weight:400;
      color:rgba(255,255,255,1);
    }
    >p{
      margin-top:8px;
    }
  }
  .apply{
    width: 100%;
    height: 100%;
    background:rgba(0,0,0,0.5);
    position: fixed;
    top:0px;
    left: 0px;
    z-index: 99999;
    overflow: hidden;
    >div{
      width:648px;
      height:968px;
      background:rgba(255,255,255,1);
      position: absolute;
      top: 250px;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      >h5{
        font-size:60px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(102,102,102,1);
        margin-top: 70px;
        margin-bottom: 83px;
      }
      >img{
        width: 56px;
        height: 56px;
        position: absolute;
        top:21px;
        right: 21px;
      }
      .inputBox{
        margin:0 35px;
        border:1px solid rgba(153,153,153,1);
        height:91px;
        line-height: 91px;
        text-align: left;
        padding-left: 30px;
        margin-bottom: 45px;
        >label{
          font-size:24px;
          font-family:Microsoft YaHei;
          font-weight:400;
          color:rgba(153,153,153,1);
        }
        >input{
          border:none;
          height: 50px;
        }
      }
      >button{
        display: block;
        height:91px;
        background:rgba(67,115,232,1);
        font-size:36px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(255,255,255,1);
        border:none;
        outline: none;
        width:578px;
        margin:0 auto;
        +p{
          font-size:24px;
          font-family:Microsoft YaHei;
          font-weight:400;
          color:rgba(153,153,153,1);
          margin-top: 17px;
        }
      }
      >h3{
        font-size:48px;
        font-family:Arial;
        font-weight:400;
        color:rgba(67,115,232,1);
        margin-top: 53px;
        +p{
          font-size:24px;
          font-family:Microsoft YaHei;
          font-weight:400;
          color:rgba(153,153,153,1);
        }
      }
    }
  }
}
</style>
