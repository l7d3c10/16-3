import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../HomeScreen';
import CartScreen from '../CartScreen';
import ProfileScreen from '../ProfileScreen';

const Tab = createBottomTabNavigator();

// 1. ĐỔI TÊN HÀM THÀNH MainTab
export default function MainTab() {
  return (
    // 2. BỌC NAVIGATION CONTAINER Ở ĐÂY
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
            else if (route.name === 'Order') iconName = focused ? 'bag-handle' : 'bag-handle-outline';
            else if (route.name === 'Inbox') iconName = focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline';
            else if (route.name === 'Profile') iconName = focused ? 'person' : 'person-outline';

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#6C5CE7',
          tabBarInactiveTintColor: '#A0A0A0',
          headerShown: false, 
          tabBarStyle: { height: 60, paddingBottom: 10, paddingTop: 5 }
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Order" component={CartScreen} />
        <Tab.Screen name="Inbox" component={CartScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
  );
}