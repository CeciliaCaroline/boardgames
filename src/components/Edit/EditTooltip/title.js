import React from 'react';

import { Divider } from 'antd';
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
      <p className='text-black' onClick={() => handleSetModalOpen(true)}>
        <EditFilled className='text-green' />{" "}
        Edit
      </p>
    </div>


  );
};
export default EditTooltipTitle
  ;