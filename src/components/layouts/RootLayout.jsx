'use client';
import { Provider } from 'react-redux';
import store from '@/store/store';
import AuthLayout from './AuthLayout';

export default function RootLayout({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AuthLayout>
      </AuthLayout> 
    </Provider>
  );
}