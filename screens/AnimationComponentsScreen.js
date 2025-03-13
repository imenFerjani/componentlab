// screens/AnimationComponentsScreen.js
import React, { useState, useRef, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity,
  Animated,
  Easing,
  SafeAreaView,
  useWindowDimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CodeBlock from '../components/CodeBlock';

export default function AnimationComponentsScreen() {
  const [activeTab, setActiveTab] = useState('fade');
  
  const renderContent = () => {
    switch(activeTab) {
      case 'fade':
        return <FadeAnimation />;
      case 'scale':
        return <ScaleAnimation />;
      case 'translate':
        return <TranslateAnimation />;
      case 'sequence':
        return <SequenceAnimation />;
      default:
        return <FadeAnimation />;
    }
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabBar}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'fade' && styles.activeTab]} 
          onPress={() => setActiveTab('fade')}
        >
          <Text style={[styles.tabText, activeTab === 'fade' && styles.activeTabText]}>Fade</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'scale' && styles.activeTab]} 
          onPress={() => setActiveTab('scale')}
        >
          <Text style={[styles.tabText, activeTab === 'scale' && styles.activeTabText]}>Scale</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'translate' && styles.activeTab]} 
          onPress={() => setActiveTab('translate')}
        >
          <Text style={[styles.tabText, activeTab === 'translate' && styles.activeTabText]}>Translate</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'sequence' && styles.activeTab]} 
          onPress={() => setActiveTab('sequence')}
        >
          <Text style={[styles.tabText, activeTab === 'sequence' && styles.activeTabText]}>Sequence</Text>
        </TouchableOpacity>
      </ScrollView>
      
      <ScrollView style={styles.content}>
        {renderContent()}
      </ScrollView>
    </SafeAreaView>
  );
}

// Fade Animation Demo
function FadeAnimation() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [isVisible, setIsVisible] = useState(false);
  
  const fadeIn = () => {
    setIsVisible(true);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => setIsVisible(false));
  };
  
  const fadeCode = `import React, { useRef, useState } from 'react';
import { Animated, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [isVisible, setIsVisible] = useState(false);
  
  const fadeIn = () => {
    setIsVisible(true);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => setIsVisible(false));
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fade Animation</Text>
      
      {isVisible && (
        <Animated.View style={[
          styles.animatedBox,
          { opacity: fadeAnim }
        ]}>
          <Text style={styles.boxText}>Fade Me</Text>
        </Animated.View>
      )}
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={fadeIn}>
          <Text style={styles.buttonText}>Fade In</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button} onPress={fadeOut}>
          <Text style={styles.buttonText}>Fade Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  animatedBox: {
    width: 150,
    height: 150,
    backgroundColor: '#5B37B7',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    backgroundColor: '#5B37B7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});`;

  return (
    <View style={styles.demoContainer}>
      <Text style={styles.componentTitle}>Fade Animation</Text>
      <Text style={styles.componentDescription}>
        Fade animations change the opacity of a component over time.
      </Text>
      
      <View style={styles.exampleContainer}>
        <View style={styles.animationContainer}>
          {isVisible && (
            <Animated.View style={[
              styles.animatedBox,
              { opacity: fadeAnim }
            ]}>
              <Text style={styles.boxText}>Fade Me</Text>
            </Animated.View>
          )}
          
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={fadeIn}>
              <Text style={styles.buttonText}>Fade In</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button} onPress={fadeOut}>
              <Text style={styles.buttonText}>Fade Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
      <Text style={styles.codeTitle}>Example Code:</Text>
      <CodeBlock code={fadeCode} />
      
      <Text style={styles.note}>
        Note: The <Text style={styles.code}>useNativeDriver: true</Text> option makes animations run on the native thread 
        for better performance.
      </Text>
    </View>
  );
}

// Scale Animation Demo
function ScaleAnimation() {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  
  const startAnimation = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.5,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      })
    ]).start();
  };
  
  const scaleCode = `import React, { useRef } from 'react';
import { Animated, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  
  const startAnimation = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.5,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      })
    ]).start();
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scale Animation</Text>
      
      <Animated.View style={[
        styles.animatedBox,
        { transform: [{ scale: scaleAnim }] }
      ]}>
        <Text style={styles.boxText}>Scale Me</Text>
      </Animated.View>
      
      <TouchableOpacity style={styles.button} onPress={startAnimation}>
        <Text style={styles.buttonText}>Animate</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  animatedBox: {
    width: 150,
    height: 150,
    backgroundColor: '#5B37B7',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#5B37B7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});`;

  return (
    <View style={styles.demoContainer}>
      <Text style={styles.componentTitle}>Scale Animation</Text>
      <Text style={styles.componentDescription}>
        Scale animations change the size of a component.
      </Text>
      
      <View style={styles.exampleContainer}>
        <View style={styles.animationContainer}>
          <Animated.View style={[
            styles.animatedBox,
            { transform: [{ scale: scaleAnim }] }
          ]}>
            <Text style={styles.boxText}>Scale Me</Text>
          </Animated.View>
          
          <TouchableOpacity style={styles.button} onPress={startAnimation}>
            <Text style={styles.buttonText}>Animate</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <Text style={styles.codeTitle}>Example Code:</Text>
      <CodeBlock code={scaleCode} />
      
      <Text style={styles.propsTitle}>Transform Properties:</Text>
      <View style={styles.propsContainer}>
        <View style={styles.propRow}>
          <Text style={styles.propName}>scale</Text>
          <Text style={styles.propDescription}>Scales the element uniformly</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>scaleX</Text>
          <Text style={styles.propDescription}>Scales the element horizontally</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>scaleY</Text>
          <Text style={styles.propDescription}>Scales the element vertically</Text>
        </View>
      </View>
    </View>
  );
}

// Translate Animation Demo
function TranslateAnimation() {
  const translateX = useRef(new Animated.Value(0)).current;
  const window = useWindowDimensions();
  
  const startAnimation = () => {
    Animated.sequence([
      Animated.timing(translateX, {
        toValue: window.width / 2 - 100,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(translateX, {
        toValue: -window.width / 2 + 100,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(translateX, {
        toValue: 0,
        friction: 5,
        tension: 40,
        useNativeDriver: true,
      })
    ]).start();
  };
  
  const translateCode = `import React, { useRef } from 'react';
import { Animated, View, Text, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';

export default function App() {
  const translateX = useRef(new Animated.Value(0)).current;
  const window = useWindowDimensions();
  
  const startAnimation = () => {
    Animated.sequence([
      Animated.timing(translateX, {
        toValue: window.width / 2 - 100,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(translateX, {
        toValue: -window.width / 2 + 100,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(translateX, {
        toValue: 0,
        friction: 5,
        tension: 40,
        useNativeDriver: true,
      })
    ]).start();
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Translate Animation</Text>
      
      <View style={styles.animationArea}>
        <Animated.View style={[
          styles.animatedBox,
          { transform: [{ translateX: translateX }] }
        ]}>
          <Text style={styles.boxText}>Move Me</Text>
        </Animated.View>
      </View>
      
      <TouchableOpacity style={styles.button} onPress={startAnimation}>
        <Text style={styles.buttonText}>Animate</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  animationArea: {
    height: 150,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  animatedBox: {
    width: 100,
    height: 100,
    backgroundColor: '#5B37B7',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#5B37B7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});`;

  return (
    <View style={styles.demoContainer}>
      <Text style={styles.componentTitle}>Translate Animation</Text>
      <Text style={styles.componentDescription}>
        Translate animations move a component from one position to another.
      </Text>
      
      <View style={styles.exampleContainer}>
        <View style={styles.animationContainer}>
          <View style={styles.animationArea}>
            <Animated.View style={[
              styles.animatedBox,
              { transform: [{ translateX: translateX }] }
            ]}>
              <Text style={styles.boxText}>Move Me</Text>
            </Animated.View>
          </View>
          
          <TouchableOpacity style={styles.button} onPress={startAnimation}>
            <Text style={styles.buttonText}>Animate</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <Text style={styles.codeTitle}>Example Code:</Text>
      <CodeBlock code={translateCode} />
      
      <Text style={styles.propsTitle}>Transform Properties:</Text>
      <View style={styles.propsContainer}>
        <View style={styles.propRow}>
          <Text style={styles.propName}>translateX</Text>
          <Text style={styles.propDescription}>Moves the element horizontally</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>translateY</Text>
          <Text style={styles.propDescription}>Moves the element vertically</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>translate</Text>
          <Text style={styles.propDescription}>Moves the element in both X and Y directions</Text>
        </View>
      </View>
    </View>
  );
}

// Sequence Animation Demo
function SequenceAnimation() {
  const moveAnim = useRef(new Animated.Value(0)).current;
  const colorAnim = useRef(new Animated.Value(0)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;
  
  const backgroundColor = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['#5B37B7', '#FF5722']
  });
  
  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });
  
  const startAnimation = () => {
    Animated.sequence([
      // Step 1: Move down
      Animated.timing(moveAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false, // we need this for backgroundColor
      }),
      // Step 2: Change color
      Animated.timing(colorAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }),
      // Step 3: Rotate
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }),
      // Step 4: Reset
      Animated.parallel([
        Animated.timing(moveAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(colorAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(rotateAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),
      ]),
    ]).start();
  };
  
  const sequenceCode = `import React, { useRef } from 'react';
import { Animated, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const moveAnim = useRef(new Animated.Value(0)).current;
  const colorAnim = useRef(new Animated.Value(0)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;
  
  const backgroundColor = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['#5B37B7', '#FF5722']
  });
  
  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });
  
  const startAnimation = () => {
    Animated.sequence([
      // Step 1: Move down
      Animated.timing(moveAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false, // we need this for backgroundColor
      }),
      // Step 2: Change color
      Animated.timing(colorAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }),
      // Step 3: Rotate
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }),
      // Step 4: Reset
      Animated.parallel([
        Animated.timing(moveAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(colorAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(rotateAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),
      ]),
    ]).start();
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Complex Animation Sequence</Text>
      
      <View style={styles.animationArea}>
        <Animated.View
          style={[
            styles.animatedBox,
            {
              transform: [
                { translateY: moveAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 100],
                  }) 
                },
                { rotate: rotation }
              ],
              backgroundColor: backgroundColor
            }
          ]}
        >
          <Text style={styles.boxText}>Animate Me</Text>
        </Animated.View>
      </View>
      
      <TouchableOpacity style={styles.button} onPress={startAnimation}>
        <Text style={styles.buttonText}>Start Sequence</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  animationArea: {
    height: 150,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  animatedBox: {
    width: 100,
    height: 100,
    backgroundColor: '#5B37B7',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#5B37B7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});`;

  return (
    <View style={styles.demoContainer}>
      <Text style={styles.componentTitle}>Complex Animation Sequence</Text>
      <Text style={styles.componentDescription}>
        Animations can be combined in sequences or run in parallel for complex effects.
      </Text>
      
      <View style={styles.exampleContainer}>
        <View style={styles.animationContainer}>
          <View style={styles.animationArea}>
            <Animated.View
              style={[
                styles.animatedBox,
                {
                  transform: [
                    { translateY: moveAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 100],
                      }) 
                    },
                    { rotate: rotation }
                  ],
                  backgroundColor: backgroundColor
                }
              ]}
            >
              <Text style={styles.boxText}>Animate Me</Text>
            </Animated.View>
          </View>
          
          <TouchableOpacity style={styles.button} onPress={startAnimation}>
            <Text style={styles.buttonText}>Start Sequence</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <Text style={styles.codeTitle}>Example Code:</Text>
      <CodeBlock code={sequenceCode} />
      
      <Text style={styles.propsTitle}>Animated Methods:</Text>
      <View style={styles.propsContainer}>
        <View style={styles.propRow}>
          <Text style={styles.propName}>sequence</Text>
          <Text style={styles.propDescription}>Animations run one after the other</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>parallel</Text>
          <Text style={styles.propDescription}>Animations run at the same time</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>stagger</Text>
          <Text style={styles.propDescription}>Animations start with staggered delays</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>interpolate</Text>
          <Text style={styles.propDescription}>Maps input values to different output values</Text>
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
  animationContainer: {
    alignItems: 'center',
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
  code: {
    fontFamily: 'monospace',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 4,
    borderRadius: 2,
  },
  
  // Demo specific styles
  animatedBox: {
    width: 150,
    height: 150,
    backgroundColor: '#5B37B7',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    backgroundColor: '#5B37B7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  animationArea: {
    height: 200,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});