import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import NavBar from '../NavBar';
import MainContent from '../../Content/MainContent';
import MenuItem from '../MenuItem';
import {
  LineChartOutlined,
  ThunderboltOutlined,
  TeamOutlined,
} from '@ant-design/icons';
const { Sider } = Layout;

const Component1 = () => <div>Coming Soon....</div>;
const Component3 = () => <div>Coming Soon....</div>;


const items = [

  {
    key: '1',
    icon: <ThunderboltOutlined />,
    label: <MenuItem label='Menu Item 1' />,
  },
  {
    key: '2',
    icon: <LineChartOutlined />,
    label: <MenuItem label='Boardgames' />,
  },
  {
    key: '3',
    icon: <TeamOutlined />,
    label: <MenuItem label='Users' />,
  },

];

const LayoutContainer = () => {
  const [selectedComponent, setSelectedComponent] = useState('2');

  const renderContent = () => {
    switch (selectedComponent) {
      case '1':
        return <Component1 />;
      case '2':
        return <MainContent />;
      case '3':
        return <Component3 />;
      default:
        return <MainContent />;
    }
  };

  const handleMenuClick = ({ key }) => {
    setSelectedComponent(key);
  };

  return (
    <Layout className="overflow-hidden w-full max-w-full">
      <NavBar />
      <Layout>
        <Sider width="208px" className='bg-white sidebar-shadow'>
          <Menu items={items} defaultSelectedKeys={[selectedComponent]} onClick={handleMenuClick} />
        </Sider>
        {renderContent()}
      </Layout>
    </Layout>


  )
}

export default LayoutContainer;