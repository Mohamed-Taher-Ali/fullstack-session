import { Flex, Spin } from 'antd';

export const Loading = () => (
  <Flex className="fixed top-0 left-0 z-50 justify-center items-center h-full w-full">
    <Flex className="gap-4 items-center">
      <Spin />
      <span>Loading ...</span>
    </Flex>
  </Flex>
);
