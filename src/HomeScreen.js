import React from 'react';
import { 
  View, Text, StyleSheet, SafeAreaView, TextInput, 
  ScrollView, Image, TouchableOpacity 
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Header Section */}
        <View style={styles.header}>
          <Image 
            source={{uri: 'https://i.pravatar.cc/150?img=11'}} 
            style={styles.avatar} 
          />
          <View style={styles.locationContainer}>
            <Text style={styles.locationLabel}>Your Location</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.locationText}>Savar, Dhaka</Text>
              <Ionicons name="chevron-down" size={16} color="#4A43EC" style={{marginLeft: 5}} />
            </View>
          </View>
          <TouchableOpacity style={styles.notificationBtn}>
            <Ionicons name="notifications-outline" size={24} color="#1A1A1A" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={20} color="#FFF" style={styles.searchIcon} />
          <TextInput 
            placeholder="Search your food" 
            placeholderTextColor="rgba(255,255,255,0.7)"
            style={styles.searchInput} 
          />
        </View>

        {/* Categories */}
        <View style={styles.categoriesWrapper}>
          <TouchableOpacity style={[styles.categoryItem, styles.categoryActive]}>
            <Ionicons name="pizza-outline" size={32} color="white" />
            <Text style={[styles.categoryText, {color: 'white'}]}>PIZZA</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.categoryItem}>
            <MaterialCommunityIcons name="hamburger" size={32} color="#1A1A1A" />
            <Text style={styles.categoryText}>BURGER</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryItem}>
            <Ionicons name="wine-outline" size={32} color="#1A1A1A" />
            <Text style={styles.categoryText}>DRINK</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryItem}>
            <MaterialCommunityIcons name="rice" size={32} color="#1A1A1A" />
            <Text style={styles.categoryText}>RICE</Text>
          </TouchableOpacity>
        </View>

        {/* Promo Banner */}
        <View style={styles.promoBanner}>
          <View style={styles.promoContent}>
            <Text style={styles.promoTitle}>BURGER</Text>
            <Text style={styles.promoSubtitle}>Today's Hot offer</Text>
            
            <View style={styles.promoRating}>
              {/* Overlapping Avatars */}
              <View style={styles.avatarsContainer}>
                <Image source={{uri: 'https://i.pravatar.cc/100?img=5'}} style={styles.avatarSmall} />
                <Image source={{uri: 'https://i.pravatar.cc/100?img=11'}} style={[styles.avatarSmall, styles.avatarOverlap]} />
                <Image source={{uri: 'https://i.pravatar.cc/100?img=8'}} style={[styles.avatarSmall, styles.avatarOverlap]} />
              </View>
              
              <Ionicons name="star" size={18} color="#FFD804" style={{marginLeft: 8}} />
              <Text style={styles.promoRatingText}>4.9 (3k+ Rating)</Text>
            </View>
          </View>

          <View style={styles.promoRight}>
            <View style={styles.badgeDiscount}>
              <Text style={styles.badgeText}>10%</Text>
              <Text style={styles.badgeText}>OFF</Text>
            </View>
            <Image 
              source={{uri: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400&auto=format&fit=crop'}} 
              style={styles.promoImage} 
            />
          </View>
        </View>



        {/* Dots Pagination Placeholder */}
        <View style={styles.dotsContainer}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={[styles.dot, styles.dotActive]} />
        </View>

        {/* Popular Items */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Items</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.popularContainer}>
          <View style={styles.popularCard}>
            <Image source={{uri: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=300&auto=format&fit=crop'}} style={styles.popularImage} />
            <Text style={styles.popularTitle}>BURGER</Text>
            <Text style={styles.popularSubtitle}>30 min | 200 sell</Text>
          </View>

          <View style={styles.popularCard}>
            <Image source={{uri: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=300&auto=format&fit=crop'}} style={styles.popularImage} />
            <Text style={styles.popularTitle}>PIZZA</Text>
            <Text style={styles.popularSubtitle}>30 min | 200 sell</Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA' },
  scrollContent: { paddingHorizontal: 24, paddingBottom: 40 },
  
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 },
  avatar: { width: 50, height: 50, borderRadius: 25 },
  locationContainer: { alignItems: 'center' },
  locationLabel: { color: '#818181', fontSize: 13 },
  locationText: { color: '#242424', fontSize: 15, fontWeight: '600', marginTop: 2 },
  notificationBtn: { padding: 10 },

  searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#4A43EC', borderRadius: 30, marginTop: 25, height: 60, paddingHorizontal: 20 },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, color: 'white', fontSize: 14 },

  categoriesWrapper: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 },
  categoryItem: { width: 75, height: 90, backgroundColor: '#F5F5F5', borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  categoryActive: { backgroundColor: '#29D697' },
  categoryText: { fontSize: 13, fontWeight: '600', marginTop: 8, color: '#242424' },

  promoBanner: { 
    backgroundColor: '#2A2B2E', // Màu xám đen giống thiết kế
    borderRadius: 24, 
    marginTop: 30, 
    height: 160, 
    flexDirection: 'row', 
    overflow: 'hidden' 
  },
  promoContent: { 
    flex: 1.3, 
    paddingLeft: 20, 
    justifyContent: 'right',
    zIndex: 2, 
  },
  promoTitle: { 
    color: '#FFD804', 
    fontSize: 28, 
    fontWeight: '900', 
    letterSpacing: 0.5,
    marginTop: 20,
  },
  promoSubtitle: { 
    color: 'white', 
    fontSize: 16, 
    marginTop: 6 
  },
  
  promoRating: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: 15 
  },
  avatarsContainer: { 
    flexDirection: 'row' 
  },
  avatarSmall: { 
    width: 26, 
    height: 26, 
    borderRadius: 13, 
    borderWidth: 2, 
    borderColor: '#2A2B2E' // Trùng màu nền để tạo hiệu ứng cắt khoét viền
  },
  avatarOverlap: { 
    marginLeft: -10 // Kéo lùi lại để xếp đè lên nhau
  },
  promoRatingText: { 
    color: 'white', 
    fontSize: 13, 
    marginLeft: 6 
  },
  
  promoRight: { 
    flex: 1, 
    position: 'relative' 
  },
  promoImage: { 
    width: '150%', 
    height: '150%', 
    position: 'absolute', 
    right: -30, 
    top: -10 
  },
  badgeDiscount: { 
    position: 'absolute', 
    zIndex: 10, 
    top: 30, 
    left: -30, // Kéo lệch sang trái để đè lên nửa ảnh bánh và nửa background
    backgroundColor: '#5D5FEF', 
    width: 50, 
    height: 50, 
    borderRadius: 32, 
    justifyContent: 'center', 
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  badgeText: { 
    color: 'white', 
    fontSize: 14, 
    fontWeight: 'bold',
    lineHeight: 18
  },
  dotsContainer: { flexDirection: 'row', justifyContent: 'center', marginTop: 15 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#1A1A1A', opacity: 0.2, marginHorizontal: 4 },
  dotActive: { opacity: 1 },

  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 30, marginBottom: 15 },
  sectionTitle: { fontSize: 18, fontWeight: '600', color: '#242424' },
  viewAllText: { fontSize: 13, color: '#606060', fontWeight: '600' },

  popularContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  popularCard: { width: '48%' },
  popularImage: { width: '100%', height: 120, borderRadius: 12 },
  popularTitle: { fontSize: 16, fontWeight: '600', color: '#242424', marginTop: 10, textAlign: 'center' },
  popularSubtitle: { fontSize: 10, color: '#818181', textAlign: 'center', marginTop: 4 },
});