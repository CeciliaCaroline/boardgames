import React from 'react';
import { Tabs } from 'antd';

import { tabs } from './tabs';


const TabContent = () => {
  return (
    <Tabs
      className='tab-bg-light height-55'
      defaultActiveKey="2"
      centered
      items={tabs}
    />
  )
}

export default TabContent