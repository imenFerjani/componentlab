// screens/BasicComponentsScreen.js
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Image,
  Button,
  TouchableOpacity,
  Switch,
  SafeAreaView,
  useWindowDimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CodeBlock from '../components/CodeBlock';

export default function BasicComponentsScreen() {
  const [activeTab, setActiveTab] = useState('text');
  const window = useWindowDimensions();
  
  const renderContent = () => {
    switch(activeTab) {
      case 'text':
        return <TextComponentDemo />;
      case 'image':
        return <ImageComponentDemo />;
      case 'button':
        return <ButtonComponentDemo />;
      case 'icon':
        return <IconComponentDemo />;
      default:
        return <TextComponentDemo />;
    }
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabBar}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'text' && styles.activeTab]} 
          onPress={() => setActiveTab('text')}
        >
          <Text style={[styles.tabText, activeTab === 'text' && styles.activeTabText]}>Text</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'image' && styles.activeTab]} 
          onPress={() => setActiveTab('image')}
        >
          <Text style={[styles.tabText, activeTab === 'image' && styles.activeTabText]}>Image</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'button' && styles.activeTab]} 
          onPress={() => setActiveTab('button')}
        >
          <Text style={[styles.tabText, activeTab === 'button' && styles.activeTabText]}>Button</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'icon' && styles.activeTab]} 
          onPress={() => setActiveTab('icon')}
        >
          <Text style={[styles.tabText, activeTab === 'icon' && styles.activeTabText]}>Icons</Text>
        </TouchableOpacity>
      </ScrollView>
      
      <ScrollView style={styles.content}>
        {renderContent()}
      </ScrollView>
    </SafeAreaView>
  );
}

// Text Component Demo
function TextComponentDemo() {
  const textCode = `import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is a Title</Text>
      
      <Text style={styles.paragraph}>
        This is a paragraph with <Text style={styles.bold}>bold</Text> and{' '}
        <Text style={styles.italic}>italic</Text> text inside.
      </Text>
      
      <Text style={styles.colored}>This text is colored</Text>
      
      <Text numberOfLines={2} ellipsizeMode="tail" style={styles.truncated}>
        This text will be truncated if it's too long. It demonstrates the
        numberOfLines prop which limits text to a specific number of lines.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  colored: {
    color: '#5B37B7',
    fontSize: 18,
  },
  truncated: {
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 4,
  },
});`;

  return (
    <View style={styles.demoContainer}>
      <Text style={styles.componentTitle}>Text Component</Text>
      <Text style={styles.componentDescription}>
        The Text component is used to display text. It supports styling, nesting, and touchable events.
      </Text>
      
      <View style={styles.exampleContainer}>
        <Text style={styles.title}>This is a Title</Text>
        
        <Text style={styles.paragraph}>
          This is a paragraph with <Text style={styles.bold}>bold</Text> and{' '}
          <Text style={styles.italic}>italic</Text> text inside.
        </Text>
        
        <Text style={styles.colored}>This text is colored</Text>
        
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.truncated}>
          This text will be truncated if it's too long. It demonstrates the
          numberOfLines prop which limits text to a specific number of lines.
        </Text>
      </View>
      
      <Text style={styles.codeTitle}>Example Code:</Text>
      <CodeBlock code={textCode} />
      
      <Text style={styles.propsTitle}>Common Props:</Text>
      <View style={styles.propsContainer}>
        <View style={styles.propRow}>
          <Text style={styles.propName}>numberOfLines</Text>
          <Text style={styles.propDescription}>Limits text to specified number of lines</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>ellipsizeMode</Text>
          <Text style={styles.propDescription}>How text should be truncated (head, middle, tail, clip)</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>selectable</Text>
          <Text style={styles.propDescription}>Whether text is selectable by the user</Text>
        </View>
      </View>
    </View>
  );
}

// Image Component Demo
function ImageComponentDemo() {
  const imageCode = `import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Local image (require) */}
      <Image
        style={styles.localImage}
        source={require('./assets/your-image.png')}
        resizeMode="contain"
      />
      
      {/* Remote image (URI) */}
      <Image
        style={styles.remoteImage}
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        resizeMode="cover"
      />
      
      {/* Image with border radius */}
      <Image
        style={styles.roundedImage}
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 20,
  },
  localImage: {
    width: 200,
    height: 100,
  },
  remoteImage: {
    width: 150,
    height: 150,
  },
  roundedImage: {
    width: 100,
    height: 100,
    borderRadius: 50, // Half of width/height for circular image
    borderWidth: 2,
    borderColor: '#5B37B7',
  },
});`;

  return (
    <View style={styles.demoContainer}>
      <Text style={styles.componentTitle}>Image Component</Text>
      <Text style={styles.componentDescription}>
        The Image component displays images from various sources including local assets and remote URLs.
      </Text>
      
      <View style={styles.exampleContainer}>
        <View style={styles.imageExamplesContainer}>
          {/* Remote image (URI) */}
          <Image
            style={styles.remoteImage}
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            resizeMode="cover"
          />
          
          {/* Image with border radius */}
          <Image
            style={styles.roundedImage}
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          />
        </View>
      </View>
      
      <Text style={styles.codeTitle}>Example Code:</Text>
      <CodeBlock code={imageCode} />
      
      <Text style={styles.propsTitle}>Common Props:</Text>
      <View style={styles.propsContainer}>
        <View style={styles.propRow}>
          <Text style={styles.propName}>source</Text>
          <Text style={styles.propDescription}>The image source (local or remote)</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>resizeMode</Text>
          <Text style={styles.propDescription}>How to resize the image (cover, contain, stretch, repeat, center)</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>fadeDuration</Text>
          <Text style={styles.propDescription}>Duration of fade-in animation when loading (Android)</Text>
        </View>
      </View>
    </View>
  );
}

// Button Component Demo
function ButtonComponentDemo() {
  const [counter, setCounter] = useState(0);
  
  const buttonCode = `import React, { useState } from 'react';
import { View, Button, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0);
  
  return (
    <View style={styles.container}>
      {/* Standard Button */}
      <Button
        title="Standard Button"
        onPress={() => alert('Button pressed!')}
        color="#5B37B7"
      />
      
      {/* Disabled Button */}
      <Button
        title="Disabled Button"
        disabled
        onPress={() => {}}
      />
      
      {/* Custom TouchableOpacity Button */}
      <TouchableOpacity 
        style={styles.customButton}
        onPress={() => setCounter(counter + 1)}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>
          Custom Button (Pressed {counter} times)
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
  customButton: {
    backgroundColor: '#5B37B7',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});`;

  return (
    <View style={styles.demoContainer}>
      <Text style={styles.componentTitle}>Button Components</Text>
      <Text style={styles.componentDescription}>
        React Native provides the Button component and touchable components for creating interactive elements.
      </Text>
      
      <View style={styles.exampleContainer}>
        {/* Standard Button */}
        <Button
          title="Standard Button"
          onPress={() => alert('Button pressed!')}
          color="#5B37B7"
        />
        
        <View style={styles.spacer} />
        
        {/* Disabled Button */}
        <Button
          title="Disabled Button"
          disabled
          onPress={() => {}}
        />
        
        <View style={styles.spacer} />
        
        {/* Custom TouchableOpacity Button */}
        <TouchableOpacity 
          style={styles.customButton}
          onPress={() => setCounter(counter + 1)}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>
            Custom Button (Pressed {counter} times)
          </Text>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.codeTitle}>Example Code:</Text>
      <CodeBlock code={buttonCode} />
      
      <Text style={styles.propsTitle}>Common Props:</Text>
      <View style={styles.propsContainer}>
        <View style={styles.propRow}>
          <Text style={styles.propName}>onPress</Text>
          <Text style={styles.propDescription}>Function called when button is pressed</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>title</Text>
          <Text style={styles.propDescription}>Text displayed inside button (Button component)</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>disabled</Text>
          <Text style={styles.propDescription}>Whether the button is disabled</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>color</Text>
          <Text style={styles.propDescription}>Background color of the button (Button component)</Text>
        </View>
      </View>
    </View>
  );
}

// Icon Component Demo
function IconComponentDemo() {
  const iconCode = `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Ionicons */}
      <View style={styles.iconRow}>
        <Ionicons name="heart" size={32} color="red" />
        <Ionicons name="heart-outline" size={32} color="red" />
        <Ionicons name="notifications" size={32} color="#5B37B7" />
      </View>
      
      {/* Material Icons */}
      <View style={styles.iconRow}>
        <MaterialIcons name="star" size={32} color="gold" />
        <MaterialIcons name="favorite" size={32} color="pink" />
        <MaterialIcons name="home" size={32} color="#5B37B7" />
      </View>
      
      {/* FontAwesome */}
      <View style={styles.iconRow}>
        <FontAwesome name="user" size={32} color="#5B37B7" />
        <FontAwesome name="paper-plane" size={32} color="#5B37B7" />
        <FontAwesome name="github" size={32} color="#333" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});`;

  return (
    <View style={styles.demoContainer}>
      <Text style={styles.componentTitle}>Icon Components</Text>
      <Text style={styles.componentDescription}>
        Expo provides access to popular icon libraries through the @expo/vector-icons package.
      </Text>
      
      <View style={styles.exampleContainer}>
        {/* Ionicons */}
        <View style={styles.iconRow}>
          <Ionicons name="heart" size={32} color="red" />
          <Ionicons name="heart-outline" size={32} color="red" />
          <Ionicons name="notifications" size={32} color="#5B37B7" />
        </View>
        
        <View style={styles.spacer} />
        
        {/* More Ionicons */}
        <View style={styles.iconRow}>
          <Ionicons name="star" size={32} color="gold" />
          <Ionicons name="home" size={32} color="#5B37B7" />
          <Ionicons name="settings-outline" size={32} color="#333" />
        </View>
        
        <View style={styles.spacer} />
        
        {/* Even more icons */}
        <View style={styles.iconRow}>
          <Ionicons name="person" size={32} color="#5B37B7" />
          <Ionicons name="paper-plane-outline" size={32} color="#5B37B7" />
          <Ionicons name="logo-github" size={32} color="#333" />
        </View>
      </View>
      
      <Text style={styles.codeTitle}>Example Code:</Text>
      <CodeBlock code={iconCode} />
      
      <Text style={styles.propsTitle}>Common Props:</Text>
      <View style={styles.propsContainer}>
        <View style={styles.propRow}>
          <Text style={styles.propName}>name</Text>
          <Text style={styles.propDescription}>Name of the icon to display</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>size</Text>
          <Text style={styles.propDescription}>Size of the icon in pixels</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>color</Text>
          <Text style={styles.propDescription}>Color of the icon</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>style</Text>
          <Text style={styles.propDescription}>Additional styles for the icon</Text>
        </View>
      </View>
      
      <Text style={styles.note}>
        Note: Expo provides access to multiple icon libraries including Ionicons, 
        MaterialIcons, FontAwesome, and more.
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
  spacer: {
    height: 20,
  },
  note: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#666',
    marginTop: 16,
  },
  
  // Demo specific styles
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  colored: {
    color: '#5B37B7',
    fontSize: 18,
    marginBottom: 8,
  },
  truncated: {
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 4,
  },
  imageExamplesContainer: {
    alignItems: 'center',
    gap: 20,
  },
  remoteImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  roundedImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#5B37B7',
  },
  customButton: {
    backgroundColor: '#5B37B7',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});