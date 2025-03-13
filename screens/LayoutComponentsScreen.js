// screens/LayoutComponentsScreen.js
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity,
  SafeAreaView,
  useWindowDimensions
} from 'react-native';
import CodeBlock from '../components/CodeBlock';

export default function LayoutComponentsScreen() {
  const [activeTab, setActiveTab] = useState('flexbox');
  
  const renderContent = () => {
    switch(activeTab) {
      case 'flexbox':
        return <FlexboxDemo />;
      case 'grid':
        return <GridLayoutDemo />;
      case 'positioning':
        return <PositioningDemo />;
      case 'safearea':
        return <SafeAreaDemo />;
      default:
        return <FlexboxDemo />;
    }
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabBar}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'flexbox' && styles.activeTab]} 
          onPress={() => setActiveTab('flexbox')}
        >
          <Text style={[styles.tabText, activeTab === 'flexbox' && styles.activeTabText]}>Flexbox</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'grid' && styles.activeTab]} 
          onPress={() => setActiveTab('grid')}
        >
          <Text style={[styles.tabText, activeTab === 'grid' && styles.activeTabText]}>Grid Layout</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'positioning' && styles.activeTab]} 
          onPress={() => setActiveTab('positioning')}
        >
          <Text style={[styles.tabText, activeTab === 'positioning' && styles.activeTabText]}>Positioning</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'safearea' && styles.activeTab]} 
          onPress={() => setActiveTab('safearea')}
        >
          <Text style={[styles.tabText, activeTab === 'safearea' && styles.activeTabText]}>SafeArea</Text>
        </TouchableOpacity>
      </ScrollView>
      
      <ScrollView style={styles.content}>
        {renderContent()}
      </ScrollView>
    </SafeAreaView>
  );
}

// Flexbox Layout Demo
function FlexboxDemo() {
  const flexboxCode = `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flexbox Direction</Text>
      <View style={styles.rowContainer}>
        <View style={styles.box}><Text>1</Text></View>
        <View style={styles.box}><Text>2</Text></View>
        <View style={styles.box}><Text>3</Text></View>
      </View>
      
      <Text style={styles.title}>Flexbox Justify Content</Text>
      <View style={styles.justifyContainer}>
        <View style={styles.box}><Text>1</Text></View>
        <View style={styles.box}><Text>2</Text></View>
        <View style={styles.box}><Text>3</Text></View>
      </View>
      
      <Text style={styles.title}>Flexbox Align Items</Text>
      <View style={styles.alignContainer}>
        <View style={[styles.box, styles.tallBox]}><Text>1</Text></View>
        <View style={styles.box}><Text>2</Text></View>
        <View style={[styles.box, styles.tallBox]}><Text>3</Text></View>
      </View>
      
      <Text style={styles.title}>Flex Wrap</Text>
      <View style={styles.wrapContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
          <View key={n} style={styles.smallBox}>
            <Text>{n}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  rowContainer: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    padding: 8,
    marginBottom: 16,
  },
  justifyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f0',
    padding: 8,
    marginBottom: 16,
  },
  alignContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    backgroundColor: '#f0f0f0',
    padding: 8,
    marginBottom: 16,
  },
  wrapContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#f0f0f0',
    padding: 8,
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: '#5B37B7',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
    borderRadius: 4,
  },
  tallBox: {
    height: 80,
  },
  smallBox: {
    width: 40,
    height: 40,
    backgroundColor: '#5B37B7',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
    borderRadius: 4,
  },
});`;

  return (
    <View style={styles.demoContainer}>
      <Text style={styles.componentTitle}>Flexbox Layout</Text>
      <Text style={styles.componentDescription}>
        React Native uses Flexbox for layouts, which provides a consistent way to arrange components.
      </Text>
      
      <View style={styles.exampleContainer}>
        <Text style={styles.subtitle}>Flexbox Direction (Row)</Text>
        <View style={styles.rowContainer}>
          <View style={styles.box}><Text style={styles.boxText}>1</Text></View>
          <View style={styles.box}><Text style={styles.boxText}>2</Text></View>
          <View style={styles.box}><Text style={styles.boxText}>3</Text></View>
        </View>
        
        <Text style={styles.subtitle}>Justify Content (Space Between)</Text>
        <View style={styles.justifyContainer}>
          <View style={styles.box}><Text style={styles.boxText}>1</Text></View>
          <View style={styles.box}><Text style={styles.boxText}>2</Text></View>
          <View style={styles.box}><Text style={styles.boxText}>3</Text></View>
        </View>
        
        <Text style={styles.subtitle}>Align Items (Center)</Text>
        <View style={styles.alignContainer}>
          <View style={[styles.box, styles.tallBox]}><Text style={styles.boxText}>1</Text></View>
          <View style={styles.box}><Text style={styles.boxText}>2</Text></View>
          <View style={[styles.box, styles.tallBox]}><Text style={styles.boxText}>3</Text></View>
        </View>
        
        <Text style={styles.subtitle}>Flex Wrap</Text>
        <View style={styles.wrapContainer}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
            <View key={n} style={styles.smallBox}>
              <Text style={styles.boxText}>{n}</Text>
            </View>
          ))}
        </View>
      </View>
      
      <Text style={styles.codeTitle}>Example Code:</Text>
      <CodeBlock code={flexboxCode} />
      
      <Text style={styles.propsTitle}>Common Flexbox Properties:</Text>
      <View style={styles.propsContainer}>
        <View style={styles.propRow}>
          <Text style={styles.propName}>flexDirection</Text>
          <Text style={styles.propDescription}>Direction of children (row, column, row-reverse, column-reverse)</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>justifyContent</Text>
          <Text style={styles.propDescription}>Alignment along the main axis</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>alignItems</Text>
          <Text style={styles.propDescription}>Alignment along the cross axis</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>flexWrap</Text>
          <Text style={styles.propDescription}>Whether children can wrap to multiple lines</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>flex</Text>
          <Text style={styles.propDescription}>How a child will grow relative to siblings</Text>
        </View>
      </View>
    </View>
  );
}

// Grid Layout Demo
function GridLayoutDemo() {
  const gridCode = `import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simple 2x2 Grid</Text>
      <View style={styles.grid}>
        <View style={styles.row}>
          <View style={styles.cell}><Text>1</Text></View>
          <View style={styles.cell}><Text>2</Text></View>
        </View>
        <View style={styles.row}>
          <View style={styles.cell}><Text>3</Text></View>
          <View style={styles.cell}><Text>4</Text></View>
        </View>
      </View>
      
      <Text style={styles.title}>3-Column Grid</Text>
      <View style={styles.threeColumnGrid}>
        {[1, 2, 3, 4, 5, 6].map(n => (
          <View key={n} style={styles.gridItem}>
            <Text>{n}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  grid: {
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    height: 100,
    backgroundColor: '#5B37B7',
    margin: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  threeColumnGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  gridItem: {
    width: '31%',
    height: 80,
    backgroundColor: '#5B37B7',
    margin: '1%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  
  // Demo specific styles for positioning
  relativeContainer: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    padding: 8,
    marginBottom: 16,
  },
  absoluteContainer: {
    height: 200,
    backgroundColor: '#f0f0f0',
    position: 'relative',
    padding: 8,
    marginBottom: 16,
  },
  baseBox: {
    width: 80,
    height: 80,
    backgroundColor: '#5B37B7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  topLeftBox: {
    position: 'absolute',
    top: 8,
    left: 8,
    width: 70,
    height: 40,
    backgroundColor: '#FF5722',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  bottomRightBox: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    width: 90,
    height: 40,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  centeredBox: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 60,
    height: 60,
    marginLeft: -30,
    marginTop: -30,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  
  // Demo specific styles for SafeArea
  safeAreaExample: {
    alignItems: 'center',
  },
  phoneFrame: {
    width: 220,
    height: 400,
    borderWidth: 10,
    borderColor: '#333',
    borderRadius: 30,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: 'white',
  },
  phoneNotch: {
    width: 80,
    height: 30,
    backgroundColor: 'red',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignSelf: 'center',
  },
  phoneContent: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'red',
    borderStyle: 'dashed',
    padding: 10,
  },
  phoneHomeIndicator: {
    height: 20,
    backgroundColor: 'red',
  },
  safeHeader: {
    padding: 8,
    backgroundColor: '#5B37B7',
    alignItems: 'center',
  },
  safeHeaderText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  safeBody: {
    flex: 1,
    padding: 8,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeBodyText: {
    textAlign: 'center',
    fontSize: 12,
  },
  safeFooter: {
    padding: 8,
    backgroundColor: '#5B37B7',
    alignItems: 'center',
  },
  safeFooterText: {
    fontSize: 12,
    color: 'white',
  },
  safeAreaLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  safeAreaLabel: {
    fontSize: 12,
    color: '#666',
  },
});
  cell: {
    flex: 1,
    height: 100,
    backgroundColor: '#5B37B7',
    margin: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  threeColumnGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  gridItem: {
    width: (Dimensions.get('window').width - 48) / 3, // 3 columns with padding
    height: 100,
    backgroundColor: '#5B37B7',
    margin: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
});`;

  return (
    <View style={styles.demoContainer}>
      <Text style={styles.componentTitle}>Grid Layout</Text>
      <Text style={styles.componentDescription}>
        While React Native doesn't have a built-in grid component, we can create grids using flexbox.
      </Text>
      
      <View style={styles.exampleContainer}>
        <Text style={styles.subtitle}>Simple 2x2 Grid</Text>
        <View style={styles.grid}>
          <View style={styles.row}>
            <View style={styles.cell}><Text style={styles.boxText}>1</Text></View>
            <View style={styles.cell}><Text style={styles.boxText}>2</Text></View>
          </View>
          <View style={styles.row}>
            <View style={styles.cell}><Text style={styles.boxText}>3</Text></View>
            <View style={styles.cell}><Text style={styles.boxText}>4</Text></View>
          </View>
        </View>
        
        <Text style={styles.subtitle}>3-Column Grid</Text>
        <View style={styles.threeColumnGrid}>
          {[1, 2, 3, 4, 5, 6].map(n => (
            <View key={n} style={styles.gridItem}>
              <Text style={styles.boxText}>{n}</Text>
            </View>
          ))}
        </View>
      </View>
      
      <Text style={styles.codeTitle}>Example Code:</Text>
      <CodeBlock code={gridCode} />
      
      <Text style={styles.note}>
        Note: React Native doesn't provide a dedicated grid component. Instead, grids are created using a 
        combination of flexbox properties and calculations.
      </Text>
    </View>
  );
}

// Positioning Demo
function PositioningDemo() {
  const positioningCode = `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Relative Positioning (Default)</Text>
      <View style={styles.relativeContainer}>
        <View style={styles.box}><Text>1</Text></View>
        <View style={styles.box}><Text>2</Text></View>
        <View style={styles.box}><Text>3</Text></View>
      </View>
      
      <Text style={styles.title}>Absolute Positioning</Text>
      <View style={styles.absoluteContainer}>
        <View style={styles.baseBox}><Text>Base</Text></View>
        <View style={styles.topLeftBox}><Text>Top Left</Text></View>
        <View style={styles.bottomRightBox}><Text>Bottom Right</Text></View>
        <View style={styles.centeredBox}><Text>Center</Text></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  relativeContainer: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    padding: 8,
    marginBottom: 16,
  },
  absoluteContainer: {
    height: 200,
    backgroundColor: '#f0f0f0',
    position: 'relative',
    padding: 8,
    marginBottom: 16,
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: '#5B37B7',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
    borderRadius: 4,
  },
  baseBox: {
    width: 80,
    height: 80,
    backgroundColor: '#5B37B7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  topLeftBox: {
    position: 'absolute',
    top: 8,
    left: 8,
    width: 70,
    height: 40,
    backgroundColor: '#FF5722',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  bottomRightBox: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    width: 90,
    height: 40,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  centeredBox: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 60,
    height: 60,
    marginLeft: -30,
    marginTop: -30,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
});`;

  return (
    <View style={styles.demoContainer}>
      <Text style={styles.componentTitle}>Positioning</Text>
      <Text style={styles.componentDescription}>
        React Native provides different positioning options to control the layout of components.
      </Text>
      
      <View style={styles.exampleContainer}>
        <Text style={styles.subtitle}>Relative Positioning (Default)</Text>
        <View style={styles.relativeContainer}>
          <View style={styles.box}><Text style={styles.boxText}>1</Text></View>
          <View style={styles.box}><Text style={styles.boxText}>2</Text></View>
          <View style={styles.box}><Text style={styles.boxText}>3</Text></View>
        </View>
        
        <Text style={styles.subtitle}>Absolute Positioning</Text>
        <View style={styles.absoluteContainer}>
          <View style={styles.baseBox}><Text style={styles.boxText}>Base</Text></View>
          <View style={styles.topLeftBox}><Text style={styles.boxText}>Top Left</Text></View>
          <View style={styles.bottomRightBox}><Text style={styles.boxText}>Bottom Right</Text></View>
          <View style={styles.centeredBox}><Text style={styles.boxText}>Center</Text></View>
        </View>
      </View>
      
      <Text style={styles.codeTitle}>Example Code:</Text>
      <CodeBlock code={positioningCode} />
      
      <Text style={styles.propsTitle}>Positioning Properties:</Text>
      <View style={styles.propsContainer}>
        <View style={styles.propRow}>
          <Text style={styles.propName}>position</Text>
          <Text style={styles.propDescription}>Type of positioning (relative or absolute)</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>top, right, bottom, left</Text>
          <Text style={styles.propDescription}>Distance from respective edges</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>zIndex</Text>
          <Text style={styles.propDescription}>Z-ordering of overlapping elements</Text>
        </View>
      </View>
    </View>
  );
}

// SafeArea Demo
function SafeAreaDemo() {
  const safeAreaCode = `import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.headerText}>App Header</Text>
          </View>
          
          <View style={styles.body}>
            <Text style={styles.bodyText}>
              Content is safely displayed within the visible area, 
              avoiding notches, status bars, and home indicators.
            </Text>
          </View>
          
          <View style={styles.footer}>
            <Text style={styles.footerText}>App Footer</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5B37B7',
  },
  content: {
    flex: 1,
  },
  header: {
    padding: 16,
    backgroundColor: '#4527A0',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  body: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyText: {
    color: 'white',
    textAlign: 'center',
    lineHeight: 24,
  },
  footer: {
    padding: 16,
    backgroundColor: '#4527A0',
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
  },
});`;

  return (
    <View style={styles.demoContainer}>
      <Text style={styles.componentTitle}>SafeAreaView</Text>
      <Text style={styles.componentDescription}>
        SafeAreaView automatically adjusts content positioning to stay within the visible area of the device, accounting for notches, status bars, and home indicators.
      </Text>
      
      <View style={styles.exampleContainer}>
        <View style={styles.safeAreaExample}>
          <View style={styles.phoneFrame}>
            <View style={styles.phoneNotch} />
            
            <View style={styles.phoneContent}>
              <View style={styles.safeHeader}>
                <Text style={styles.safeHeaderText}>App Header</Text>
              </View>
              
              <View style={styles.safeBody}>
                <Text style={styles.safeBodyText}>
                  Content is safely displayed within the visible area
                </Text>
              </View>
              
              <View style={styles.safeFooter}>
                <Text style={styles.safeFooterText}>App Footer</Text>
              </View>
            </View>
            
            <View style={styles.phoneHomeIndicator} />
          </View>
          
          <View style={styles.safeAreaLabels}>
            <Text style={styles.safeAreaLabel}>Unsafe (red)</Text>
            <Text style={styles.safeAreaLabel}>Safe (purple)</Text>
          </View>
        </View>
      </View>
      
      <Text style={styles.codeTitle}>Example Code:</Text>
      <CodeBlock code={safeAreaCode} />
      
      <Text style={styles.note}>
        Note: SafeAreaView is particularly important for iOS devices with notches (like iPhone X and newer) and 
        devices with rounded corners.
      </Text>
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
    padding: 16,
  },
  demoContainer: {
    marginBottom: 30,
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
  exampleContainer: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
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
  note: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#666',
    marginTop: 16,
  },
  
  // Demo specific styles for flexbox
  rowContainer: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    padding: 8,
    marginBottom: 16,
  },
  justifyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f0',
    padding: 8,
    marginBottom: 16,
  },
  alignContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    backgroundColor: '#f0f0f0',
    padding: 8,
    marginBottom: 16,
  },
  wrapContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#f0f0f0',
    padding: 8,
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: '#5B37B7',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
    borderRadius: 4,
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
  tallBox: {
    height: 80,
  },
  smallBox: {
    width: 40,
    height: 40,
    backgroundColor: '#5B37B7',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
    borderRadius: 4,
  },
  
  // Demo specific styles for grid
  grid: {
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
  },
});