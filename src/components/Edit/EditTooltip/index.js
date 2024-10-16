import React from 'react';
import { useModalContext } from '../../../context/ModalContext';

import { Tooltip, Button } from 'antd';
import {
  MoreOutlined,

} from '@ant-design/icons';
import EditTooltipTitle from './title';


const EditTooltip = () => {
  const { setModalOpen } = useModalContext();

  return (
    <>
      <Tooltip
        color='white'
        overlayInnerStyle={{ padding: '25px', width: '136px' }}
        title={<EditTooltipTitle handleSetModalOpen={setModalOpen} />}
        placement='leftTop'
      >
        <Button
          type="default"
          shape='circle'
          className='bg-green hover:bg-green-hover'
          icon={<MoreOutlined className='text-white' />}
        /></Tooltip>
    </>
  );
};
export default EditTooltip
  ;