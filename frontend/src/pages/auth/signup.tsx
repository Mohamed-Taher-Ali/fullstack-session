import React, { useCallback } from 'react';
import { Button, Form, Input } from 'antd';
import { toast } from 'react-toastify';
import type { FormProps } from 'antd';

import { getFieldsRules } from '@src/utils';
import { ISignupUser } from '@src/types';
import { signup } from '@src/services';

type FieldType = ISignupUser;

export function Signup({ onSignup }: { onSignup: () => void }) {
  const onFinish: FormProps<FieldType>['onFinish'] = useCallback(
    (values: FieldType) => {
      signup(values)
        .then(({ data: { userCreated } }) => {
          userCreated && onSignup();
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
        name="name"
        rules={[{ required: true, message: 'Please enter your name!' }]}
      >
        <Input placeholder="Enter your name" />
      </Form.Item>

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
          Register
        </Button>
      </Form.Item>
    </Form>
  );
}
