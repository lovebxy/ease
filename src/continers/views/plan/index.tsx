import React, { useState } from "react";
import { Button, Modal, Form, Input } from 'antd';

const Plan: React.FC = () => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>新增计划</Button>
      <Modal title="plan" visible={visible} onOk={() => setVisible(false)} onCancel={() => setVisible(false)}>
        <Form form={form}>
          <Form.Item label="分类" name="planText">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
};

export default Plan;
