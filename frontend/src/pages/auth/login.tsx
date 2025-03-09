import React, { useCallback } from 'react';
import { Button, Form, Input } from 'antd';
import { toast } from 'react-toastify';
import type { FormProps } from 'antd';

import { useAppContext } from '@src/provider';
import { getFieldsRules } from '@src/utils';
import { ILoginUser } from '@src/types';
import { login } from '@src/services';

type FieldType = ILoginUser;

export function Login() {
  const { updateUser } = useAppContext();

  const onFinish: FormProps<FieldType>['onFinish'] = useCallback(
    (values: FieldType) => {
      login(values)
        .then(({ data }) => {
          updateUser(data);
        })
        .catch(
          ({
            response: {
              data: { message },
            },
          }) => {
            toast.error(message, { position: 'top-center' });
          },
        );
    },
    [],
  );

  return (
    <Form
      name="basic"
      autoComplete="off"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
    >
      <Form.Item<FieldType>
        name="email"
        rules={[
          { required: true, message: 'Please enter your email!' },
          { type: 'email', message: 'Invalid email format!' },
        ]}
      >
        <Input placeholder="Enter your email" />
      </Form.Item>

      <Form.Item<FieldType>
        name="password"
        rules={[
          ...getFieldsRules('password'),
          { required: true, message: 'Please enter your password!' },
        ]}
      >
        <Input.Password placeholder="Enter your password" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
}
