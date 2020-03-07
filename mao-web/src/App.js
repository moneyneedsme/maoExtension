import React,{useState,createContext } from 'react';
import './App.css';
import axios from 'axios'
import Banner from './component/banner'
import Body from './component/body'
import Mask from './component/mask'
import { message } from 'antd';
export const BannerContext =createContext();
export const MaskContext =createContext();
function App() {
  const [bannerList] = useState([
    {img:require('./images/pc_banner1.png'),title:'一站式自助售货机',title1:'零售解决方案',items:['运营系统SAAS','智能物联中间件','个性开发服务']},
    {img:require('./images/pc_banner2.png'),title:'多平台零售应用',title1:'智能系统',detail:'SAAS平台+APP+小程序+A端售卖'},
    {img:require('./images/pc_banner3.png'),title:'无缝兼容，快速接入',detail:'自助吐袋机/售药机/咖啡机/棉花糖机...'},
  ])
  const [visible,setVisible] = useState(false)
  const submit = (data)=>{
    let {userName:name,phone,wx:remark} = data;
    if(!name){
      message.error('请先填写联系人~');
    }else if(!phone){
      message.error('请先填写手机号码~');
    }else if (!/^1[3456789]\d{9}$/.test(phone)) {
      message.error('电话号码格式错误~');
    }else{
      const url = `https://zgm-platform-test.zigoumao.com/system/IntentionalChannel/addIntentionalChannel`;
      const data = {
        name,
        phone,
        remark
      }
      axios.post(url,data).then(res=>{
        if(parseInt(res.data.code)===200){
          message.success('提交成功！');
          setVisible(false)
        }
      }).catch(error=>{
        message.error(error);
      })
    }
  }
  return (
    <div className="App">
        <BannerContext.Provider value={{bannerList,setVisible}}>
          <Banner></Banner>
        </BannerContext.Provider>
        <Body></Body>
        <MaskContext.Provider value={{visible,setVisible,submit}}>
          <Mask></Mask>
        </MaskContext.Provider>
    </div>
  );
}

export default App;
