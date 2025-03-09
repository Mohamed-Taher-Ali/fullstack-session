import { apiClient } from '@src/network';
import { applyPrefix } from '@src/utils';

const createUrl = applyPrefix('/dashboard');

export const getContent = () => {
  return apiClient.get(createUrl('/'));
};
