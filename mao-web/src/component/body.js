import React, { } from 'react';
import  './body.less';
export default ()=>{
  return(
    <div className='body'>
      <h4 className='tabTitle'>我们服务</h4>
      <div className="serve">
        <div>
          <img src={require('../images/zhinengxitong.png')} alt=""/>
          <h5>零售应用及智能系统</h5>
          <p>支持各种自助类设备终端以及智能化终端设备。</p>
        </div>
        <div>
          <img src={require('../images/zhinengyingjian.png')} alt=""/>
          <h5>智能硬件</h5>
          <p>提供便捷有效率的自助零售设备平台系统以及智能SAAS平台，支持各式自助售货设备。</p>
        </div>
        <div>
          <img src={require('../images/shebeijieru.png')} alt=""/>
          <h5>设备接入</h5>
          <p>免费提供各式设备平台接入，咨询，开发服务。</p>
        </div>
        <div>
          <img src={require('../images/yingxiaotuiguang.png')} alt=""/>
          <h5>营销推广</h5>
          <p>提供会员积分、返现，互动抽奖游戏等，可以帮你定制凯纷程序，满足你新形式的互动营销活动需求。</p>
        </div>
      </div>
      <div className="advantage">
        <h4 className='tabTitle'>我们优势</h4>
        <h5>无缝兼容，快速接入</h5>
        <p>围绕设备运营场景，重构人、货、场的零售运营流程，无论是直营、加盟、联营，都能利用简单快速的感知化功能 </p>
        <p>帮助企业完成设备运维、商品管理、营销运营，渠道分销支撑，有效提高企业效率的增长和成本的节约</p>
      </div>
      <div className="advantageDetail">
        <div>
          <img src={require('../images/anquanwending.png')} alt=""/>
          <p>安全稳定</p>
        </div>
        <div>
          <img src={require('../images/tanxingkuozhan.png')} alt=""/>
          <p>弹性扩展</p>
        </div>
        <div>
          <img src={require('../images/dichengben.png')} alt=""/>
          <p>低成本</p>
        </div>
        <div>
          <img src={require('../images/kuaisuyunwei.png')} alt=""/>
          <p>快速运维</p>
        </div>
      </div>
      <div className="core">
        <h4 className='tabTitle'>系统核心功能</h4>
        <div>
          <img src={require('../images/renjijiaohu.png')} alt=""/>
          <h5>人机交互系统</h5>
          <p>商品展示、营销互动、广告播放、</p>
          <p>多种支付方式。完美适配多种显示</p>
          <p>屏幕，自定义显示风格；支持各</p>
          <p>类促销/营销活动落地；</p>
        </div>
        <div>
          <img src={require('../images/jiamengshangguanli.png')} alt=""/>
          <h5>加盟商管理</h5>
          <p>发展代理。加盟、分销等</p>
          <p>业务。轻松管理多级组织</p>
          <p>业务体系。</p>
        </div>
        <div>
          <img src={require('../images/baobiaofenxi.png')} alt=""/>
          <h5>智能数据报表分析</h5>
          <p>一体化智能管理销售，提高整个售卖</p>
          <p>体系的运转效率；大幅度降低维护成</p>
          <p>本订单明细、财务核账、收益分析、</p>
          <p>销量预测。</p>
        </div>
        <div>
          <img src={require('../images/xiaochengxugoumai.png')} alt=""/>
          <h5>小程序购买</h5>
          <p>提供便捷有效率的自助零</p>
          <p>售设备平台系统以及智能</p>
          <p>SAAS平台，支持各式自助</p>
          <p>售货设备。</p>
        </div>
        <div>
          <img src={require('../images/appyunwei.png')} alt=""/>
          <h5>APP运维</h5>
          <p>支持APP进行补货、数据查</p>
          <p>看、预警消息接收、商品</p>
          <p>管理、运营管理等。</p>
        </div>
        <div>
          <img src={require('../images/yunyingguanli.png')} alt=""/>
          <h5>运营管理</h5>
          <p>点位线路分析管理、配货</p>
          <p>管理、库存监控、收退</p>
          <p>款、补货计划、补货记</p>
          <p>录、支付方式管理。</p>
        </div>
        <div>
          <img src={require('../images/caiwuguanli.png')} alt=""/>
          <h5>财务管理</h5>
          <p>T+1与D+1两种 财务清算 </p>
          <p>体系 ，支持日、月等。</p>
          <p>账单汇总对账。多商家平</p>
          <p>台自动分账。</p>
        </div>
        <div>
          <img src={require('../images/guanggaoguanli.png')} alt=""/>
          <h5>广告管理</h5>
          <p>远程操作，极简操作“一键”</p>
          <p>发布，同步管理内容素材，</p>
          <p>支持定向广告发布，提供</p>
          <p>海量广告素材库，分类管理，</p>
          <p>随用随取。</p>
        </div>
        <div>
          <img src={require('../images/huiyuanguanli.png')} alt=""/>
          <h5>会员管理</h5>
          <p>会员优惠、会员储值、积</p>
          <p>分、优惠券，强大的数据</p>
          <p>分析功能，支持各类型优</p>
          <p>惠活动推送；</p>
        </div>
      </div>
      <div className="footer">
        <p>深圳自购猫科技有限公司 </p>
        <p>ICP证沪B2-20180118沪公网安备 31011502008153号上海工商实名认证</p>
      </div>
    </div>
  )
}