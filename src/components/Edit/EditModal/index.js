import React from 'react';

import { Button, Divider, Modal, Form } from 'antd';
import EditForm from '../EditForm';
import { useModalContext } from '../../../context/ModalContext';

const EditModal = ({ data }) => {
  const [form] = Form.useForm();
  const { modalOpen, setModalOpen } = useModalContext(); // Use modal context


  const handleOk = async () => {
    try {
      await form.validateFields(); // validate form fields before submit
      form.submit();
      setModalOpen(false);
    } catch (e) { console.log(e, "error") }
  };

  return (
    <>

      <Modal
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        centered
        title="Edit boardgame in Collection"
        width={700}
        footer={[
          <Divider key='divider' />,
          <Button key="submit" type="submit" onClick={() => handleOk()} className='bg-green hover:bg-green-hover text-white'>
            OK
          </Button>,

        ]}
      >
        <Divider />
        <EditForm initialValues={data} form={form} />

      </Modal>

    </>
  );
};
export default EditModal;