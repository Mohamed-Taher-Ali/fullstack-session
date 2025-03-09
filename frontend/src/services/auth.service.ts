import { ILoginUser, ISignupUser } from '@src/types';
import { apiClient } from '@src/network';
import { applyPrefix } from '@src/utils';

const createUrl = applyPrefix('/auth');

export const me = () => {
  return apiClient.post(createUrl('/me'));
};

export const login = (params: ILoginUser) => {
  return apiClient.post(createUrl('/login'), params);
};

export const signup = (params: ISignupUser) => {
  return apiClient.post(createUrl('/signup'), params);
};

export const logout = () => {
  return apiClient.post(createUrl('/logout'));
};
