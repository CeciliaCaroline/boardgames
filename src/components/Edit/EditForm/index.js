import React, { useContext } from 'react';
import { DataContext } from "../../../context/DataContext";

import { Input, Checkbox, Select, Form, DatePicker, InputNumber } from 'antd';
import dayjs from 'dayjs';


const languageOptions = [
  {
    value: 'ENG',
    label: 'English',
  },
  {
    value: 'ITA',
    label: 'Italian',
  },
  {
    value: 'DEU',
    label: 'German',
  },

]

const findChangedFields = (initialValues, submittedValues) => {
  return Object.keys(initialValues)
    .filter(key => initialValues[key] !== submittedValues[key]) // Find keys with changed values
    .reduce((obj, key) => {
      obj[key] = submittedValues[key]; // Create an object with changed key-value pairs
      return obj;
    }, {});
};

const EditForm = ({ initialValues, form }) => {
  const { editItem } = useContext(DataContext);

  const onFinish = (values) => {
    const changedFields = findChangedFields(initialValues, { ...values, key: initialValues.key });
    editItem(initialValues.key, changedFields)

  };

  return (
    <>
      <Form
        form={form}
        layout='inline'
        className='items-center gap-6'
        onFinish={onFinish}
        initialValues={initialValues} >
        <Form.Item
          layout='vertical'
          label="Name"
          name="name"
          rules={[{ required: true, message: 'enter name' }]}
        >
          <Input className='width-200' />
        </Form.Item>

        <Form.Item
          layout='vertical'
          label="Publisher"
          name="publisher"
          rules={[{ required: true, message: 'enter publisher' }]}
        >
          <Input className='width-200' />
        </Form.Item>

        <Form.Item layout='vertical' label="Language" name="language">
          <Select
            className='width-200'
            options={languageOptions}
          />
        </Form.Item>

        <Form.Item layout='vertical' label="BGG Rating" name="bbg_rating">
          <Input disabled />
        </Form.Item>

        <Form.Item layout='vertical' label="Min Players" name="min_players" rules={[
          {
            pattern: /^(?:\d*)$/,
            message: "Invalid number",
          }
        ]}
          validateTrigger="onBlur"
          >
          <Input className='width-100' />

        </Form.Item>

        <Form.Item layout='vertical' label="Max Players" name="max_players" rules={[
          {
            pattern: /^(?:\d*)$/,
            message: "Invalid number",
          }
        ]}
          validateTrigger="onBlur"
          >
          <Input className='width-100' />
        </Form.Item>

        <Form.Item layout='vertical' name="expansion" valuePropName="checked">
          <Checkbox className='mt-6'>Expansion</Checkbox>
        </Form.Item>

        <Form.Item layout='vertical' label="Min Time" name="min_time" rules={[
          {
            pattern: /^(?:\d*)$/,
            message: "Invalid number",
          }
        ]}
          validateTrigger="onBlur">
          <Input className='width-150' addonAfter="min" />
        </Form.Item>

        <Form.Item layout='vertical' label="Max Time" name="max_time" rules={[
          {
            pattern: /^(?:\d*)$/,
            message: "Invalid number",
          }
        ]}
          validateTrigger="onBlur">
          <Input className='width-150' addonAfter="min" />
        </Form.Item>

        <Form.Item layout='vertical' label="Acquired" name="acquired" getValueProps={
          (value) => ({
            value: value && dayjs(value, 'DD/MM/YYYY'),
          })}
        >
          <DatePicker className='width-250' disabled format="DD/MM/YYYY" />
        </Form.Item>

      </Form>
    </>
  );
};
export default EditForm;