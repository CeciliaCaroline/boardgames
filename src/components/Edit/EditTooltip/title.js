import React from 'react';

import { Divider, Button } from 'antd';
import {
  DeleteFilled,
  EditFilled
} from '@ant-design/icons';


const EditTooltipTitle = ({ handleSetModalOpen }) => {

  return (
    <div>
      <h1 className='font-semibold text-green-dark'>Actions</h1>
      <Divider className='m-2.5' />
      <p className='text-black'> <DeleteFilled className='text-red' /> {" "}Delete</p>
      <Divider className='m-2.5' />
      <Button type='text' className='text-black p-0' onClick={() => handleSetModalOpen(true)}>
        <EditFilled className='text-green' />{" "}
        Edit
      </Button>
    </div>


  );
};
export default EditTooltipTitle
  ;