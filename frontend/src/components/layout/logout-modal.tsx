import React, { useState } from 'react';
import { Button, Modal } from 'antd';

import { useAppContext } from '@src/provider';
import { logout } from '@src/services';

export const LogoutModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { updateUser } = useAppContext();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    logout().then(() => {
      updateUser(undefined);
      setIsModalOpen(false);
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal} danger>
        Logout
      </Button>
      <Modal
        title="Logout"
        onOk={handleOk}
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <p>Really you want to leave us!</p>
      </Modal>
    </>
  );
};
