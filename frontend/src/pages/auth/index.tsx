import React, { useState } from 'react';
import { Segmented } from 'antd';

import { Render } from '@src/components';
import { toast } from 'react-toastify';
import { Signup } from './signup';
import { Login } from './login';

export default function AuthPage() {
  const [formType, setFormType] = useState('Login');

  const onSignup = () => {
    setFormType('Login');
    toast.success('User created successfully', {
      position: 'top-center',
      hideProgressBar: true,
      autoClose: 1500,
    });
  };

  return (
    <div className="flex justify-center h-full w-full p-2 pt-[30vh] bg-cyan-600">
      <div className="flex flex-col gap-2 p-2">
        <Segmented
          value={formType}
          onChange={setFormType}
          options={['Login', 'Register']}
          block
        />
        <div className="rounded-lg bg-cyan-900/70 w-[400px] px-8 pt-8">
          <Render
            ifCondition={formType == 'Login'}
            render={<Login />}
            elseRender={<Signup onSignup={onSignup} />}
          />
        </div>
      </div>
    </div>
  );
}
