import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { useAppContext } from '@src/provider';
import { apiClient } from '@src/network';
import { me } from '@src/services';

export const useAuth = () => {
  const { updateUser } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    const interceptor = apiClient.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          updateUser(undefined);
          navigate('/auth');
        }

        return Promise.reject(error);
      },
    );

    me().then(({ data }) => updateUser(data));

    return () => {
      apiClient.interceptors.response.eject(interceptor);
    };
  }, []);
};
