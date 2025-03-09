import { createRoot } from 'react-dom/client';
import { Suspense } from 'react';

import './index.css';
import 'antd/dist/reset.css';
import "react-toastify/dist/ReactToastify.css";

import { Loading } from './components';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <Suspense fallback={<Loading />}>
    <App />
  </Suspense>,
);
