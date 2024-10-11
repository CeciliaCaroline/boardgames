import React from 'react';
import { Layout } from 'antd';
import TabContent from '../TabContent';


const { Content } = Layout;

const MainContent = () => {
  return (
    <Content className='text-center text-white bg-white overflow-y-auto h-screen h-auto'>
      <TabContent />
    </Content>

  )
}

export default MainContent