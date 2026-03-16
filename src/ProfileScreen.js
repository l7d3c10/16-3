import React, { useState } from 'react';
import { 
  View, Text, StyleSheet, SafeAreaView, 
  TouchableOpacity, Image, ScrollView, Switch 
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Tách data menu ra một mảng để render bằng map(), giúp code gọn gàng hơn
  const menuItems = [
    { id: 1, title: 'Home', icon: 'home-outline', type: 'link' },
    { id: 2, title: 'My Card', icon: 'card-outline', type: 'link' },
    { id: 3, title: 'Dark Mode', icon: 'moon-outline', type: 'toggle' },
    { id: 4, title: 'Track Your Order', icon: 'location-outline', type: 'link' },
    { id: 5, title: 'Settings', icon: 'settings-outline', type: 'link' },
    { id: 6, title: 'Help Center', icon: 'help-circle-outline', type: 'link' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="arrow-back" size={24} color="#242424" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Profile</Text>
          {/* View trống để cân bằng nút Back, giúp Title nằm ở giữa */}
          <View style={styles.iconButton} /> 
        </View>

        {/* Profile Info Section */}
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Image 
              source={{uri: 'https://i.pravatar.cc/150?img=11'}} 
              style={styles.avatar} 
            />
            {/* Nút Edit đè lên Avatar */}
            <TouchableOpacity style={styles.editBadge}>
              <MaterialCommunityIcons name="pencil-outline" size={16} color="white" />
            </TouchableOpacity>
          </View>
          
          <Text style={styles.userName}>Rakibul Hasan</Text>
          <Text style={styles.userEmail}>rakibhbrand@gmail.com</Text>
        </View>

        {/* Menu List */}
        <View style={styles.menuContainer}>
          {menuItems.map((item) => (
            <TouchableOpacity 
              key={item.id} 
              style={styles.menuItem}
              activeOpacity={item.type === 'toggle' ? 1 : 0.7} // Không hiện hiệu ứng bấm nếu là dòng chứa toggle
            >
              <View style={styles.menuLeft}>
                <Ionicons name={item.icon} size={24} color="#242424" style={styles.menuIcon} />
                <Text style={styles.menuText}>{item.title}</Text>
              </View>

              {/* Render Switch hoặc Chevron tùy thuộc vào type của item */}
              {item.type === 'toggle' ? (
                <Switch 
                  trackColor={{ false: "#D1D1D1", true: "#4A43EC" }}
                  thumbColor={"#FFF"}
                  onValueChange={() => setIsDarkMode(previousState => !previousState)}
                  value={isDarkMode}
                />
              ) : (
                <Ionicons name="chevron-forward" size={20} color="#242424" />
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutBtn}>
          <Text style={styles.logoutText}>Log Out</Text>
          <Ionicons name="log-out-outline" size={22} color="white" style={{marginLeft: 10}} />
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA' },
  scrollContent: { paddingBottom: 40 },
  
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, paddingVertical: 15 },
  iconButton: { width: 40, height: 40, justifyContent: 'center', alignItems: 'flex-start' },
  headerTitle: { fontSize: 16, fontWeight: '600', color: '#000' },

  profileSection: { alignItems: 'center', marginTop: 20 },
  avatarContainer: { position: 'relative', marginBottom: 15 },
  avatar: { width: 110, height: 110, borderRadius: 55, borderWidth: 4, borderColor: 'rgba(74, 67, 236, 0.1)' },
  editBadge: { position: 'absolute', bottom: 0, right: 0, backgroundColor: '#4A43EC', width: 32, height: 32, borderRadius: 16, justifyContent: 'center', alignItems: 'center', borderWidth: 3, borderColor: '#FAFAFA' },
  
  userName: { fontSize: 22, fontWeight: '700', color: '#242424' },
  userEmail: { fontSize: 13, color: '#686868', marginTop: 4 },

  menuContainer: { marginTop: 30, paddingHorizontal: 24 },
  menuItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: '#F0F0F0' },
  menuLeft: { flexDirection: 'row', alignItems: 'center' },
  menuIcon: { width: 30 },
  menuText: { fontSize: 15, color: '#242424', fontWeight: '500', marginLeft: 10 },

  logoutBtn: { backgroundColor: '#4A43EC', marginHorizontal: 24, marginTop: 40, height: 56, borderRadius: 16, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  logoutText: { color: 'white', fontSize: 16, fontWeight: 'bold' }
});