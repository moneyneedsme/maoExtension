import React,{useEffect,useContext} from 'react'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import './banner.less'
import {BannerContext} from '../App'
export default ()=>{
  let {bannerList,setVisible} = useContext(BannerContext)
  useEffect(()=>{
    new Swiper('.swiper-container', {
      loop: true, 
      autoplay: {
        disableOnInteraction: false,
        delay:4000,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    })
  },[])
  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {
          bannerList.map((item,index)=>{
            return (
              <div className="swiper-slide" key={item.img+index}>
                <img src={item.img} alt='' className='bannerImg'/>
                <img src={require("../images/logo.png")} alt="" className='logo'/>
                <h3 className='title'>{item.title}</h3>
                {
                  item.title1?(<h3 className='title1'>{item.title1}</h3>):null
                }
                {
                  item.items?(<div className='items'>{item.items.map((v,i)=><span key={v+i}>{v}</span>)}</div>)
                  :null
                }
                {
                  item.detail?(<div className='detail'>{item.detail}</div>)
                  :null
                }
                <button onClick={()=>setVisible(true)}>免费试用</button>
              </div>
            )
          })
        }
      </div>
      <div className="swiper-pagination"></div>
    </div>
  )
}


