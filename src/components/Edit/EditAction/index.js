import React from 'react';

import dayjs from 'dayjs';
import EditModal from '../EditModal';
import EditTooltip from '../EditTooltip';
import { ModalProvider } from '../../../context/ModalContext';

const EditAction = ({ data }) => {
  const initialValues = { ...data }
  initialValues.acquired = dayjs(data.acquired).format('DD/MM/YYYY')

  return (
    <>
      <ModalProvider>
        <EditModal data={initialValues} />
        <br />
        <EditTooltip />
      </ModalProvider>
    </>
  );
};
export default EditAction;