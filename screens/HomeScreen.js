// screens/HomeScreen.js - Main menu screen
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const menuItems = [
  {
    id: 'basic',
    title: 'Basic UI Components',
    screen: 'BasicComponents',
    icon: 'cube-outline',
    description: 'Text, Image, Button, Icons, and other fundamental components'
  },
  {
    id: 'layout',
    title: 'Layout Components',
    screen: 'LayoutComponents',
    icon: 'grid-outline',
    description: 'View, FlexBox, SafeAreaView, and other layout containers'
  },
  {
    id: 'list',
    title: 'List Components',
    screen: 'ListComponents',
    icon: 'list-outline',
    description: 'FlatList, SectionList, and other list-based components'
  },
  {
    id: 'form',
    title: 'Form Components',
    screen: 'FormComponents',
    icon: 'create-outline',
    description: 'TextInput, Switch, Slider, Picker, and other form elements'
  },
  {
    id: 'animation',
    title: 'Animation Examples',
    screen: 'AnimationComponents',
    icon: 'pulse-outline',
    description: 'Basic animations, transitions, and gesture handlers'
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} 
          style={styles.logo} 
        />
        <Text style={styles.headerText}>React Native Component Showcase</Text>
        <Text style={styles.subHeaderText}>
          Interactive examples of essential components
        </Text>
      </View>
      
      <View style={styles.menuContainer}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
            onPress={() => navigation.navigate(item.screen)}
          >
            <View style={styles.menuItemContent}>
              <Ionicons name={item.icon} size={24} color="#5B37B7" />
              <View style={styles.menuItemText}>
                <Text style={styles.menuItemTitle}>{item.title}</Text>
                <Text style={styles.menuItemDescription}>{item.description}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#CCCCCC" />
            </View>
          </TouchableOpacity>
        ))}
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Build with React Native & Expo
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  subHeaderText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 5,
  },
  menuContainer: {
    paddingHorizontal: 15,
  },
  menuItem: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  menuItemText: {
    flex: 1,
    marginLeft: 12,
  },
  menuItemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  menuItemDescription: {
    fontSize: 12,
    color: '#666',
    marginTop: 3,
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#999',
  },
});