import React from 'react';
import { 
  View, Text, StyleSheet, SafeAreaView, 
  TouchableOpacity, Image, ScrollView 
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function CartScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="arrow-back" size={24} color="#202244" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Shopping Cart</Text>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="trash-outline" size={24} color="#202244" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Main Hero Section */}
        <View style={styles.heroSection}>
          <Image 
            source={{uri: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop'}} 
            style={styles.mainImage} 
          />
          
          {/* 10% OFF Badge */}
          <View style={styles.badge}>
            <Text style={styles.badgeText}>10%</Text>
            <Text style={styles.badgeText}>OFF</Text>
          </View>

          {/* Thumbnails Overlapping */}
          <View style={styles.thumbnailsContainer}>
            <View style={styles.thumbnailWrapper}>
              <Image source={{uri: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=200&auto=format&fit=crop'}} style={styles.thumbnailImage} />
            </View>
            <View style={[styles.thumbnailWrapper, styles.thumbnailActive]}>
              <Image source={{uri: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400&auto=format&fit=crop'}} style={styles.thumbnailImage} />
            </View>
            <View style={styles.thumbnailWrapper}>
              <Image source={{uri: 'https://images.unsplash.com/photo-1586816001966-79b736744398?q=80&w=200&auto=format&fit=crop'}} style={styles.thumbnailImage} />
            </View>
          </View>
        </View>

        {/* Gray Container for Details */}
        <View style={styles.detailsContainer}>
          
          {/* Title & Price */}
          <View style={styles.rowBetween}>
            <Text style={styles.productTitle}>BURGER</Text>
            <Text style={styles.productPrice}>$28</Text>
          </View>

          {/* Rating & Quantity Control */}
          <View style={styles.ratingQuantityRow}>
            <View style={styles.ratingBox}>
              <Ionicons name="star" size={16} color="#FFD804" />
              <Text style={styles.ratingText}>4.9 <Text style={{color: '#818181'}}>(3k+ Rating)</Text></Text>
            </View>
            
            <View style={styles.quantityBox}>
              <TouchableOpacity style={styles.qtyBtn}>
                <Ionicons name="remove" size={16} color="#5B5B5B" />
              </TouchableOpacity>
              <Text style={styles.qtyText}>02</Text>
              <TouchableOpacity style={styles.qtyBtn}>
                <Ionicons name="add" size={16} color="#5B5B5B" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Delivery Address Box */}
          <View style={styles.addressContainer}>
            <View style={styles.addressLeft}>
              <View style={styles.iconCircle}>
                <Ionicons name="location-outline" size={20} color="#5B5B5B" />
              </View>
              <View style={{marginLeft: 12}}>
                <Text style={styles.addressLabel}>Delivery Address</Text>
                <Text style={styles.addressValue}>Dhaka, Bangladesh</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.editBtn}>
              <MaterialCommunityIcons name="pencil-outline" size={20} color="white" />
            </TouchableOpacity>
          </View>

          {/* Payment Method Box */}
          <View style={styles.paymentContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name="card" size={24} color="#00A6ED" />
              <Text style={styles.paymentText}>Payment Method</Text>
            </View>
            <TouchableOpacity style={styles.changeBtn}>
              <Text style={styles.changeBtnText}>Change</Text>
            </TouchableOpacity>
          </View>

          {/* Checkout Summary */}
          <View style={styles.summaryContainer}>
            <Text style={styles.summaryTitle}>Checkout Summary</Text>
            
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Subtotal (2)</Text>
              <Text style={styles.summaryValue}>$56</Text>
            </View>
            <View style={styles.divider} />
            
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Delivery Fee</Text>
              <Text style={styles.summaryValue}>$6.20</Text>
            </View>
            <View style={styles.divider} />
            
            <View style={[styles.summaryRow, {marginTop: 5}]}>
              <Text style={styles.totalLabel}>Payable Total</Text>
              <Text style={styles.totalValue}>$62.2</Text>
            </View>
          </View>

          {/* Confirm Button */}
          <TouchableOpacity style={styles.confirmBtn}>
            <Text style={styles.confirmBtnText}>Confirm Order</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, paddingVertical: 15 },
  iconButton: { padding: 5 },
  headerTitle: { fontSize: 16, fontWeight: '600', color: '#000' },
  scrollContent: { paddingBottom: 40 },
  
  heroSection: { paddingHorizontal: 24, position: 'relative', marginTop: 10 },
  mainImage: { width: '100%', height: 200, borderRadius: 12 },
  
  badge: { position: 'absolute', top: 15, left: 40, backgroundColor: '#4A43EC', width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center', zIndex: 10 },
  badgeText: { color: 'white', fontSize: 11, fontWeight: 'bold' },
  
  thumbnailsContainer: { flexDirection: 'row', justifyContent: 'center', marginTop: -35, zIndex: 20 },
  thumbnailWrapper: { width: 75, height: 60, borderRadius: 10, marginHorizontal: 8, padding: 3, backgroundColor: 'white', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 5, elevation: 3 },
  thumbnailActive: { transform: [{scale: 1.05}], borderColor: '#4A43EC', borderWidth: 1 },
  thumbnailImage: { width: '100%', height: '100%', borderRadius: 8 },

  detailsContainer: { backgroundColor: '#F5F5F5', marginHorizontal: 24, marginTop: 25, borderRadius: 12, padding: 20 },
  
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  productTitle: { fontSize: 28, fontWeight: '700', color: '#242424', textTransform: 'uppercase' },
  productPrice: { fontSize: 22, fontWeight: '600', color: '#7D78F1' },

  ratingQuantityRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 },
  ratingBox: { flexDirection: 'row', alignItems: 'center' },
  ratingText: { fontSize: 12, marginLeft: 5, color: '#3D3D3D', fontWeight: '500' },
  quantityBox: { flexDirection: 'row', alignItems: 'center' },
  qtyBtn: { width: 24, height: 24, borderRadius: 12, borderWidth: 1, borderColor: '#818181', justifyContent: 'center', alignItems: 'center' },
  qtyText: { marginHorizontal: 12, fontSize: 15, fontWeight: '600', color: '#5B5B5B' },

  addressContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#C0EADB', padding: 12, borderRadius: 8, marginTop: 25 },
  addressLeft: { flexDirection: 'row', alignItems: 'center' },
  iconCircle: { width: 36, height: 36, borderRadius: 18, backgroundColor: 'rgba(255,255,255,0.5)', justifyContent: 'center', alignItems: 'center' },
  addressLabel: { fontSize: 11, color: '#5B5B5B', fontWeight: '500' },
  addressValue: { fontSize: 13, color: '#5B5B5B', fontWeight: '600', marginTop: 2 },
  editBtn: { backgroundColor: '#A9A6FF', width: 45, height: 45, borderRadius: 8, justifyContent: 'center', alignItems: 'center' },

  paymentContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFF', paddingHorizontal: 15, paddingVertical: 12, borderRadius: 8, marginTop: 15 },
  paymentText: { fontSize: 14, color: '#242424', fontWeight: '500', marginLeft: 10 },
  changeBtn: { borderWidth: 1, borderColor: '#4A43EC', paddingHorizontal: 15, paddingVertical: 6, borderRadius: 20 },
  changeBtnText: { color: '#4A43EC', fontSize: 11, fontWeight: '500' },

  summaryContainer: { marginTop: 25 },
  summaryTitle: { fontSize: 14, fontWeight: '600', color: '#242424', marginBottom: 15 },
  summaryRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 8 },
  summaryLabel: { fontSize: 14, color: '#818181' },
  summaryValue: { fontSize: 14, color: '#242424', fontWeight: '500' },
  divider: { height: 1, backgroundColor: '#818181', opacity: 0.2 },
  totalLabel: { fontSize: 14, color: '#242424', fontWeight: '600' },
  totalValue: { fontSize: 14, color: '#4A43EC', fontWeight: '600' },

  confirmBtn: { backgroundColor: '#4A43EC', height: 54, borderRadius: 27, justifyContent: 'center', alignItems: 'center', marginTop: 35 },
  confirmBtnText: { color: 'white', fontSize: 15, fontWeight: '600' }
});