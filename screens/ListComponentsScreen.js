// screens/ListComponentsScreen.js
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  FlatList,
  SectionList,
  TouchableOpacity,
  SafeAreaView,
  Image,
  RefreshControl
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CodeBlock from '../components/CodeBlock';

export default function ListComponentsScreen() {
  const [activeTab, setActiveTab] = useState('flatlist');
  
  const renderContent = () => {
    switch(activeTab) {
      case 'flatlist':
        return <FlatListDemo />;
      case 'sectionlist':
        return <SectionListDemo />;
      case 'scrollview':
        return <ScrollViewDemo />;
      default:
        return <FlatListDemo />;
    }
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabBar}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'flatlist' && styles.activeTab]} 
          onPress={() => setActiveTab('flatlist')}
        >
          <Text style={[styles.tabText, activeTab === 'flatlist' && styles.activeTabText]}>FlatList</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'sectionlist' && styles.activeTab]} 
          onPress={() => setActiveTab('sectionlist')}
        >
          <Text style={[styles.tabText, activeTab === 'sectionlist' && styles.activeTabText]}>SectionList</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'scrollview' && styles.activeTab]} 
          onPress={() => setActiveTab('scrollview')}
        >
          <Text style={[styles.tabText, activeTab === 'scrollview' && styles.activeTabText]}>ScrollView</Text>
        </TouchableOpacity>
      </ScrollView>
      
      <View style={styles.content}>
        {renderContent()}
      </View>
    </SafeAreaView>
  );
}

// FlatList Component Demo
function FlatListDemo() {
  const [refreshing, setRefreshing] = useState(false);
  
  const data = [
    { id: '1', title: 'Item 1', description: 'Description for item 1' },
    { id: '2', title: 'Item 2', description: 'Description for item 2' },
    { id: '3', title: 'Item 3', description: 'Description for item 3' },
    { id: '4', title: 'Item 4', description: 'Description for item 4' },
    { id: '5', title: 'Item 5', description: 'Description for item 5' },
    { id: '6', title: 'Item 6', description: 'Description for item 6' },
    { id: '7', title: 'Item 7', description: 'Description for item 7' },
    { id: '8', title: 'Item 8', description: 'Description for item 8' },
  ];
  
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };
  
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemContent}>
        <View style={styles.listItemIcon}>
          <Ionicons name="list" size={24} color="#5B37B7" />
        </View>
        <View style={styles.listItemText}>
          <Text style={styles.listItemTitle}>{item.title}</Text>
          <Text style={styles.listItemDescription}>{item.description}</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#CCCCCC" />
      </View>
    </TouchableOpacity>
  );
  
  const flatListCode = `import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, RefreshControl } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [refreshing, setRefreshing] = useState(false);
  
  const data = [
    { id: '1', title: 'Item 1', description: 'Description for item 1' },
    { id: '2', title: 'Item 2', description: 'Description for item 2' },
    { id: '3', title: 'Item 3', description: 'Description for item 3' },
    { id: '4', title: 'Item 4', description: 'Description for item 4' },
    { id: '5', title: 'Item 5', description: 'Description for item 5' },
    // more items...
  ];
  
  const onRefresh = () => {
    setRefreshing(true);
    // Fetch new data here
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };
  
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemContent}>
        <View style={styles.listItemIcon}>
          <Ionicons name="list" size={24} color="#5B37B7" />
        </View>
        <View style={styles.listItemText}>
          <Text style={styles.listItemTitle}>{item.title}</Text>
          <Text style={styles.listItemDescription}>{item.description}</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#CCCCCC" />
      </View>
    </TouchableOpacity>
  );
  
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={["#5B37B7"]}
          />
        }
        ListHeaderComponent={
          <Text style={styles.header}>My Items List</Text>
        }
        ListEmptyComponent={
          <Text style={styles.emptyText}>No items available</Text>
        }
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListFooterComponent={
          <Text style={styles.footer}>End of list</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  listItem: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  listItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  listItemText: {
    flex: 1,
  },
  listItemTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  listItemDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  separator: {
    height: 1,
    backgroundColor: '#f0f0f0',
  },
  footer: {
    fontSize: 14,
    color: '#666',
    padding: 16,
    textAlign: 'center',
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
    padding: 20,
    color: '#666',
  },
});`;

  return (
    <View style={styles.demoContainer}>
      <Text style={styles.componentTitle}>FlatList Component</Text>
      <Text style={styles.componentDescription}>
        FlatList is a performant interface for rendering simple, flat lists. It's designed to handle large amounts of data efficiently.
      </Text>
      
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={["#5B37B7"]}
            />
          }
          ListHeaderComponent={
            <Text style={styles.listHeader}>Pull to refresh demo</Text>
          }
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListFooterComponent={
            <Text style={styles.listFooter}>End of list</Text>
          }
        />
      </View>
      
      <Text style={styles.codeTitle}>Example Code:</Text>
      <CodeBlock code={flatListCode} />
      
      <Text style={styles.propsTitle}>Common FlatList Props:</Text>
      <View style={styles.propsContainer}>
        <View style={styles.propRow}>
          <Text style={styles.propName}>data</Text>
          <Text style={styles.propDescription}>Array of data to be rendered</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>renderItem</Text>
          <Text style={styles.propDescription}>Function to render each item</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>keyExtractor</Text>
          <Text style={styles.propDescription}>Function to extract a unique key for each item</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>ListHeaderComponent</Text>
          <Text style={styles.propDescription}>Component at the top of the list</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>ListFooterComponent</Text>
          <Text style={styles.propDescription}>Component at the bottom of the list</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>horizontal</Text>
          <Text style={styles.propDescription}>Whether the list should render horizontally</Text>
        </View>
      </View>
    </View>
  );
}

// SectionList Component Demo
function SectionListDemo() {
  const sections = [
    {
      title: 'Fruits',
      data: ['Apple', 'Banana', 'Orange', 'Strawberry', 'Grapes'],
      icon: 'nutrition-outline'
    },
    {
      title: 'Vegetables',
      data: ['Carrot', 'Broccoli', 'Spinach', 'Tomato', 'Cucumber'],
      icon: 'leaf-outline'
    },
    {
      title: 'Dairy',
      data: ['Milk', 'Cheese', 'Yogurt', 'Butter', 'Ice Cream'],
      icon: 'water-outline'
    },
  ];
  
  const renderItem = ({ item }) => (
    <View style={styles.sectionItem}>
      <Text style={styles.sectionItemText}>{item}</Text>
    </View>
  );
  
  const renderSectionHeader = ({ section }) => (
    <View style={styles.sectionHeader}>
      <View style={styles.sectionHeaderContent}>
        <Ionicons name={section.icon} size={24} color="#5B37B7" />
        <Text style={styles.sectionHeaderText}>{section.title}</Text>
      </View>
    </View>
  );
  
  const sectionListCode = `import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const sections = [
    {
      title: 'Fruits',
      data: ['Apple', 'Banana', 'Orange', 'Strawberry', 'Grapes'],
      icon: 'nutrition-outline'
    },
    {
      title: 'Vegetables',
      data: ['Carrot', 'Broccoli', 'Spinach', 'Tomato', 'Cucumber'],
      icon: 'leaf-outline'
    },
    {
      title: 'Dairy',
      data: ['Milk', 'Cheese', 'Yogurt', 'Butter', 'Ice Cream'],
      icon: 'water-outline'
    },
  ];
  
  const renderItem = ({ item }) => (
    <View style={styles.sectionItem}>
      <Text style={styles.sectionItemText}>{item}</Text>
    </View>
  );
  
  const renderSectionHeader = ({ section }) => (
    <View style={styles.sectionHeader}>
      <View style={styles.sectionHeaderContent}>
        <Ionicons name={section.icon} size={24} color="#5B37B7" />
        <Text style={styles.sectionHeaderText}>{section.title}</Text>
      </View>
    </View>
  );
  
  return (
    <View style={styles.container}>
      <SectionList
        sections={sections}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item, index) => item + index}
        stickySectionHeadersEnabled={true}
        ListHeaderComponent={
          <Text style={styles.header}>Grocery Categories</Text>
        }
        ListFooterComponent={
          <Text style={styles.footer}>End of list</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  sectionHeader: {
    backgroundColor: '#f0f0f0',
    padding: 8,
  },
  sectionHeaderContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  sectionItem: {
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  sectionItemText: {
    fontSize: 16,
  },
  footer: {
    fontSize: 14,
    color: '#666',
    padding: 16,
    textAlign: 'center',
  },
});`;

  return (
    <View style={styles.demoContainer}>
      <Text style={styles.componentTitle}>SectionList Component</Text>
      <Text style={styles.componentDescription}>
        SectionList is like FlatList, but renders items in sections with section headers. It's ideal for categorized data.
      </Text>
      
      <View style={styles.listContainer}>
        <SectionList
          sections={sections}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          keyExtractor={(item, index) => item + index}
          stickySectionHeadersEnabled={true}
          ListHeaderComponent={
            <Text style={styles.listHeader}>Grocery Categories</Text>
          }
          ListFooterComponent={
            <Text style={styles.listFooter}>End of list</Text>
          }
        />
      </View>
      
      <Text style={styles.codeTitle}>Example Code:</Text>
      <CodeBlock code={sectionListCode} />
      
      <Text style={styles.propsTitle}>Common SectionList Props:</Text>
      <View style={styles.propsContainer}>
        <View style={styles.propRow}>
          <Text style={styles.propName}>sections</Text>
          <Text style={styles.propDescription}>Array of sections with title and data</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>renderItem</Text>
          <Text style={styles.propDescription}>Function to render each item</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>renderSectionHeader</Text>
          <Text style={styles.propDescription}>Function to render section headers</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>stickySectionHeadersEnabled</Text>
          <Text style={styles.propDescription}>Whether section headers should stick to the top</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>keyExtractor</Text>
          <Text style={styles.propDescription}>Function to extract keys for items</Text>
        </View>
      </View>
    </View>
  );
}

// ScrollView Component Demo
function ScrollViewDemo() {
  const [refreshing, setRefreshing] = useState(false);
  
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };
  
  const scrollViewCode = `import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, RefreshControl } from 'react-native';

export default function App() {
  const [refreshing, setRefreshing] = useState(false);
  
  const onRefresh = () => {
    setRefreshing(true);
    // Fetch new data here
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };
  
  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={["#5B37B7"]}
        />
      }
    >
      <Text style={styles.header}>ScrollView Demo</Text>
      <Text style={styles.description}>
        ScrollView is a scrollable container that can hold multiple components and views.
        It's best for a small number of items of a limited size.
      </Text>
      
      <View style={styles.box}>
        <Text style={styles.boxTitle}>Item 1</Text>
        <Text style={styles.boxContent}>
          This is some content inside a box. ScrollView loads all its child components
          at once, so it's not suitable for very long lists of items.
        </Text>
      </View>
      
      <View style={styles.box}>
        <Text style={styles.boxTitle}>Item 2</Text>
        <Text style={styles.boxContent}>
          ScrollView can scroll both vertically and horizontally by changing
          the horizontal prop.
        </Text>
      </View>
      
      <Text style={styles.subheader}>Horizontal ScrollView Example:</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        style={styles.horizontalScroll}
      >
        {[1, 2, 3, 4, 5].map(i => (
          <View key={i} style={styles.horizontalItem}>
            <Text style={styles.horizontalItemText}>Item {i}</Text>
          </View>
        ))}
      </ScrollView>
      
      <View style={styles.box}>
        <Text style={styles.boxTitle}>Item 3</Text>
        <Text style={styles.boxContent}>
          Unlike FlatList, ScrollView doesn't optimize the rendering of its
          children, so all children are rendered at once.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    padding: 16,
    color: '#666',
  },
  scrollViewBox: {
    backgroundColor: 'white',
    borderRadius: 8,
    margin: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  scrollViewBoxTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  scrollViewBoxContent: {
    fontSize: 14,
    lineHeight: 20,
    color: '#666',
  },
  scrollViewSubheader: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    marginTop: 8,
    color: '#333',
  },
  horizontalScroll: {
    height: 120,
    padding: 16,
  },
  horizontalItem: {
    width: 160,
    height: 80,
    marginRight: 12,
    backgroundColor: '#5B37B7',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontalItemText: {
    color: 'white',
    fontWeight: 'bold',
  },
  scrollViewSpacing: {
    height: 20,
  },
}); '#666',
  },
  box: {
    backgroundColor: 'white',
    borderRadius: 8,
    margin: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  boxTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  boxContent: {
    fontSize: 14,
    lineHeight: 20,
    color: '#666',
  },
  subheader: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    marginTop: 8,
  },
  horizontalScroll: {
    height: 120,
    padding: 16,
  },
  horizontalItem: {
    width: 160,
    height: 80,
    marginRight: 12,
    backgroundColor: '#5B37B7',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontalItemText: {
    color: 'white',
    fontWeight: 'bold',
  },
});`;

  return (
    <View style={styles.demoContainer}>
      <Text style={styles.componentTitle}>ScrollView Component</Text>
      <Text style={styles.componentDescription}>
        ScrollView is a generic scrolling container that can contain multiple components and views. Unlike FlatList, it renders all its child components at once.
      </Text>
      
      <View style={styles.listContainer}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={["#5B37B7"]}
            />
          }
        >
          <Text style={styles.scrollViewHeader}>ScrollView Demo</Text>
          <Text style={styles.scrollViewDescription}>
            ScrollView is a scrollable container that can hold multiple components and views.
            It's best for a small number of items of a limited size.
          </Text>
          
          <View style={styles.scrollViewBox}>
            <Text style={styles.scrollViewBoxTitle}>Item 1</Text>
            <Text style={styles.scrollViewBoxContent}>
              This is some content inside a box. ScrollView loads all its child components
              at once, so it's not suitable for very long lists of items.
            </Text>
          </View>
          
          <View style={styles.scrollViewBox}>
            <Text style={styles.scrollViewBoxTitle}>Item 2</Text>
            <Text style={styles.scrollViewBoxContent}>
              ScrollView can scroll both vertically and horizontally by changing
              the horizontal prop.
            </Text>
          </View>
          
          <Text style={styles.scrollViewSubheader}>Horizontal ScrollView Example:</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={true}
            style={styles.horizontalScroll}
          >
            {[1, 2, 3, 4, 5].map(i => (
              <View key={i} style={styles.horizontalItem}>
                <Text style={styles.horizontalItemText}>Item {i}</Text>
              </View>
            ))}
          </ScrollView>
          
          <View style={styles.scrollViewBox}>
            <Text style={styles.scrollViewBoxTitle}>Item 3</Text>
            <Text style={styles.scrollViewBoxContent}>
              Unlike FlatList, ScrollView doesn't optimize the rendering of its
              children, so all children are rendered at once.
            </Text>
          </View>
          
          <View style={styles.scrollViewSpacing} />
        </ScrollView>
      </View>
      
      <Text style={styles.codeTitle}>Example Code:</Text>
      <CodeBlock code={scrollViewCode} />
      
      <Text style={styles.propsTitle}>ScrollView vs FlatList:</Text>
      <View style={styles.propsContainer}>
        <View style={styles.propRow}>
          <Text style={styles.propName}>Use ScrollView</Text>
          <Text style={styles.propDescription}>For content of limited size and when all items need to be rendered immediately</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>Use FlatList</Text>
          <Text style={styles.propDescription}>For long lists where only visible items should be rendered for better performance</Text>
        </View>
      </View>
      
      <Text style={styles.propsTitle}>Common ScrollView Props:</Text>
      <View style={styles.propsContainer}>
        <View style={styles.propRow}>
          <Text style={styles.propName}>horizontal</Text>
          <Text style={styles.propDescription}>Whether to scroll horizontally</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>showsVerticalScrollIndicator</Text>
          <Text style={styles.propDescription}>Whether to show the vertical scroll indicator</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>showsHorizontalScrollIndicator</Text>
          <Text style={styles.propDescription}>Whether to show the horizontal scroll indicator</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>refreshControl</Text>
          <Text style={styles.propDescription}>Component for pull-to-refresh functionality</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7',
  },
  tabBar: {
    backgroundColor: 'white',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 4,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: '#5B37B7',
  },
  tabText: {
    fontWeight: '500',
    color: '#333',
  },
  activeTabText: {
    color: 'white',
  },
  content: {
    flex: 1,
  },
  demoContainer: {
    padding: 16,
  },
  componentTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  componentDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: '#666',
    marginBottom: 16,
  },
  listContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 16,
    height: 300,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    overflow: 'hidden',
  },
  codeTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  propsTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 8,
    color: '#333',
  },
  propsContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  propRow: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  propName: {
    width: 120,
    fontWeight: '500',
    color: '#5B37B7',
  },
  propDescription: {
    flex: 1,
    fontSize: 14,
    color: '#666',
  },
  
  // FlatList specific styles
  listHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  listItem: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  listItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  listItemText: {
    flex: 1,
  },
  listItemTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  listItemDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  separator: {
    height: 1,
    backgroundColor: '#f0f0f0',
  },
  listFooter: {
    fontSize: 14,
    color: '#666',
    padding: 16,
    textAlign: 'center',
    backgroundColor: '#f8f8f8',
  },
  
  // SectionList specific styles
  sectionHeader: {
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  sectionHeaderContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#333',
  },
  sectionItem: {
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  sectionItemText: {
    fontSize: 16,
    color: '#333',
  },
  
  // ScrollView specific styles
  scrollViewHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  scrollViewDescription: {
    fontSize: 14,
    lineHeight: 20,
    padding: 16,
  },
});