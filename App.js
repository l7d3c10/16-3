import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // 1. Thêm import này
import { AuthProvider, useAuth } from './src/context/Myauth'; 
import LoginForm from './src/temp'; 
import MainTab from './src/navigation/Maintab'; 

const AppNav = () => {
  const { isAuthenticated } = useAuth();
  
  return (
    // 2. Bọc NavigationContainer ở đây để quản lý toàn bộ luồng điều hướng
    <NavigationContainer>
      {isAuthenticated ? <MainTab /> : <LoginForm />}
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}