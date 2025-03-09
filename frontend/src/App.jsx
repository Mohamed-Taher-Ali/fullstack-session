import { ToastContainer } from 'react-toastify';
import { ConfigProvider } from 'antd';

import { AppRouter } from './components';
import Provider from './provider';

export default function App() {
  return (
    <ConfigProvider>
      <Provider>
        <AppRouter />
        <ToastContainer />
      </Provider>
    </ConfigProvider>
  );
}
