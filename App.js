import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Import 3 màn hình bạn vừa tạo (đảm bảo đúng đường dẫn)
import HomeScreen from './src/HomeScreen';
import CartScreen from './src/CartScreen';
import ProfileScreen from './src/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            // Đổi icon dựa trên tên màn hình và trạng thái đang được chọn (focused)
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Order') {
              iconName = focused ? 'bag-handle' : 'bag-handle-outline';
            } else if (route.name === 'Inbox') {
              iconName = focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#6C5CE7', // Màu tím giống thiết kế
          tabBarInactiveTintColor: '#A0A0A0', // Màu xám cho tab không được chọn
          headerShown: false, // Ẩn header mặc định vì trong từng file mình đã tự code header rồi
          tabBarStyle: {
            height: 60,
            paddingBottom: 10,
            paddingTop: 5,
          }
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Order" component={CartScreen} />
        <Tab.Screen name="Inbox" component={CartScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}