import React, {useState,useContext} from 'react';
import './mask.less'
import { Modal } from 'antd';
import {MaskContext} from '../App'

export default ()=>{
  let {visible,setVisible,submit} = useContext(MaskContext)
  let [userName,setUserName] = useState('')
  let [phone,setPhone] = useState('')
  let [wx,setWx] = useState('')
  return(
    <div>
      <Modal
        visible={visible}
        closable={false}
        footer={null}
        width={408}
      >
        <div className='mask'>
          <h5>欢迎申请试用</h5>
          <img src={require('../images/close.png')} alt='' onClick={()=>setVisible(false)} />
          <div className='inputBox'>
            <label htmlFor="name">联系人：</label>
            <input type="text" id='name' value={userName} onChange={(e)=>setUserName(e.target.value)}></input>
          </div>
          <div className='inputBox'>
            <label htmlFor="phone">手机号码：</label>
            <input type="text" id='phone' value={phone} onChange={(e)=>setPhone(e.target.value)}></input>
          </div>
          <div className='inputBox'>
            <label htmlFor="wx">微信号：</label>
            <input type="text" id='wx' value={wx} onChange={(e)=>setWx(e.target.value)}></input>
          </div>
          <button onClick={()=>submit({userName,phone,wx})}>提交 / 注册</button>
          <p>我们会在2个工作日内与您联系</p>
          <h3>198-2124-2347</h3>
          <p>快速联系方式</p>
        </div>
      </Modal>
    </div>
  )
}