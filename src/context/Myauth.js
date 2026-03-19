import React, { createContext, useState, useContext } from 'react';

// 1. Tạo Context
const AuthContext = createContext();

// 2. Tạo Provider để bọc các component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Hàm xử lý đăng nhập (bạn có thể thêm logic gọi API ở đây)
  const login = () => {
    console.log("--> ĐÃ CHẠY VÀO HÀM LOGIN TRONG AUTH_CONTEXT!");
    setIsAuthenticated(true);
  };

  // Hàm xử lý đăng xuất
  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


// 3. Custom hook để sử dụng Context dễ dàng hơn
export const useAuth = () => {
  return useContext(AuthContext);
};