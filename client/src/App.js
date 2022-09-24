import 'antd/dist/antd'
import React from "react";
import { Typography } from 'antd';
import { SmileTwoTone } from '@ant-design/icons'
import Chatbot from './Chatbot/Chatbot';
const { Title } = Typography;

function App() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <Title level={2} >CHAT BOT APP&nbsp;<SmileTwoTone type="robot" /></Title>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
       
        <Chatbot />


      </div>
    </div>
  )
}

export default App
