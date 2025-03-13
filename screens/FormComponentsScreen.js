// screens/FormComponentsScreen.js
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity,
  TextInput,
  Switch,
  Button,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Modal
} from 'react-native';
// Import Slider from community package
import Slider from '@react-native-community/slider';
import { Ionicons } from '@expo/vector-icons';
import CodeBlock from '../components/CodeBlock';

export default function FormComponentsScreen() {
  const [activeTab, setActiveTab] = useState('textinput');
  
  const renderContent = () => {
    switch(activeTab) {
      case 'textinput':
        return <TextInputDemo />;
      case 'switch':
        return <SwitchDemo />;
      case 'slider':
        return <SliderDemo />;
      case 'picker':
        return <CustomPickerDemo />;
      default:
        return <TextInputDemo />;
    }
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingContainer}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabBar}>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'textinput' && styles.activeTab]} 
            onPress={() => setActiveTab('textinput')}
          >
            <Text style={[styles.tabText, activeTab === 'textinput' && styles.activeTabText]}>TextInput</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'switch' && styles.activeTab]} 
            onPress={() => setActiveTab('switch')}
          >
            <Text style={[styles.tabText, activeTab === 'switch' && styles.activeTabText]}>Switch</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'slider' && styles.activeTab]} 
            onPress={() => setActiveTab('slider')}
          >
            <Text style={[styles.tabText, activeTab === 'slider' && styles.activeTabText]}>Slider</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'picker' && styles.activeTab]} 
            onPress={() => setActiveTab('picker')}
          >
            <Text style={[styles.tabText, activeTab === 'picker' && styles.activeTabText]}>Picker</Text>
          </TouchableOpacity>
        </ScrollView>
        
        <ScrollView style={styles.content}>
          {renderContent()}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
  }

// TextInput Component Demo
function TextInputDemo() {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  const [multiline, setMultiline] = useState('');
  
  const textInputCode = `import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  const [multiline, setMultiline] = useState('');
  
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Basic Input:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter text here"
        value={text}
        onChangeText={setText}
      />
      
      <Text style={styles.label}>Password Input:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      
      <Text style={styles.label}>Multiline Input:</Text>
      <TextInput
        style={styles.multilineInput}
        placeholder="Enter multiple lines of text"
        value={multiline}
        onChangeText={setMultiline}
        multiline={true}
        numberOfLines={4}
        textAlignVertical="top"
      />
      
      <Text style={styles.previewTitle}>Preview:</Text>
      <Text style={styles.preview}>
        You typed: {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    marginBottom: 4,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  multilineInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 8,
    paddingVertical: 8,
    minHeight: 100,
  },
  previewTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  preview: {
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 4,
  },
});`;

  return (
    <View style={styles.demoContainer}>
      <Text style={styles.componentTitle}>TextInput Component</Text>
      <Text style={styles.componentDescription}>
        TextInput is a core component that allows users to enter text. It can be configured for different types of input.
      </Text>
      
      <View style={styles.exampleContainer}>
        <Text style={styles.label}>Basic Input:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter text here"
          value={text}
          onChangeText={setText}
        />
        
        <Text style={styles.label}>Password Input:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        
        <Text style={styles.label}>Multiline Input:</Text>
        <TextInput
          style={styles.multilineInput}
          placeholder="Enter multiple lines of text"
          value={multiline}
          onChangeText={setMultiline}
          multiline={true}
          numberOfLines={4}
          textAlignVertical="top"
        />
        
        <Text style={styles.previewTitle}>Preview:</Text>
        <Text style={styles.preview}>
          You typed: {text}
        </Text>
      </View>
      
      <Text style={styles.codeTitle}>Example Code:</Text>
      <CodeBlock code={textInputCode} />
      
      <Text style={styles.propsTitle}>Common TextInput Props:</Text>
      <View style={styles.propsContainer}>
        <View style={styles.propRow}>
          <Text style={styles.propName}>placeholder</Text>
          <Text style={styles.propDescription}>Hint text shown when input is empty</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>value</Text>
          <Text style={styles.propDescription}>The current value of the input</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>onChangeText</Text>
          <Text style={styles.propDescription}>Function called when text changes</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>secureTextEntry</Text>
          <Text style={styles.propDescription}>Whether to hide the text (for passwords)</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>multiline</Text>
          <Text style={styles.propDescription}>Whether to allow multiple lines of text</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>keyboardType</Text>
          <Text style={styles.propDescription}>Type of keyboard to display (e.g., numeric)</Text>
        </View>
      </View>
    </View>
  );
}
// Switch Component Demo
function SwitchDemo() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
  const [customEnabled, setCustomEnabled] = useState(false);
  const toggleCustom = () => setCustomEnabled(previousState => !previousState);
  
  const switchCode = `import React, { useState } from 'react';
import { View, Switch, Text, StyleSheet } from 'react-native';

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
  return (
    <View style={styles.container}>
      <View style={styles.switchRow}>
        <Text style={styles.switchLabel}>
          Default Switch:
        </Text>
        <Switch
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      
      <View style={styles.switchRow}>
        <Text style={styles.switchLabel}>
          Custom Colors:
        </Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      
      <Text style={styles.switchStatus}>
        Switch is {isEnabled ? 'ON' : 'OFF'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
  },
  switchLabel: {
    fontSize: 16,
  },
  switchStatus: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});`;

  return (
    <View style={styles.demoContainer}>
      <Text style={styles.componentTitle}>Switch Component</Text>
      <Text style={styles.componentDescription}>
        The Switch component renders a boolean input. It's a controlled component that requires an onValueChange callback and a value prop.
      </Text>
      
      <View style={styles.exampleContainer}>
        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>
            Default Switch:
          </Text>
          <Switch
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        
        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>
            Custom Colors:
          </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleCustom}
            value={customEnabled}
          />
        </View>
        
        <Text style={styles.switchStatus}>
          Switches are {isEnabled && customEnabled ? 'both ON' : 
            isEnabled || customEnabled ? 'partially ON' : 'both OFF'}
        </Text>
      </View>
      
      <Text style={styles.codeTitle}>Example Code:</Text>
      <CodeBlock code={switchCode} />
      
      <Text style={styles.propsTitle}>Common Switch Props:</Text>
      <View style={styles.propsContainer}>
        <View style={styles.propRow}>
          <Text style={styles.propName}>value</Text>
          <Text style={styles.propDescription}>Boolean value of the switch</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>onValueChange</Text>
          <Text style={styles.propDescription}>Function called when switch is toggled</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>trackColor</Text>
          <Text style={styles.propDescription}>Colors for the track for false and true states</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>thumbColor</Text>
          <Text style={styles.propDescription}>Color of the thumb (circle)</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>disabled</Text>
          <Text style={styles.propDescription}>Whether the switch is disabled</Text>
        </View>
      </View>
    </View>
  );
}
// Slider Component Demo
function SliderDemo() {
  const [value, setValue] = useState(50);
  const [rangeValue, setRangeValue] = useState(25);
  
  const sliderCode = `import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

export default function App() {
  const [value, setValue] = useState(50);
  
  return (
    <View style={styles.container}>
      <Text style={styles.sliderLabel}>
        Basic Slider: {Math.round(value)}
      </Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        value={value}
        onValueChange={setValue}
        step={1}
      />
      
      <Text style={styles.sliderLabel}>
        Styled Slider: {Math.round(value)}%
      </Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        value={value}
        onValueChange={setValue}
        minimumTrackTintColor="#5B37B7"
        maximumTrackTintColor="#d3d3d3"
        thumbTintColor="#5B37B7"
      />
      
      <View style={styles.valueDisplay}>
        <Text style={styles.valueDisplayText}>
          Selected Value: {Math.round(value)}
        </Text>
        <View style={[styles.valueBar, { width: \`\${value}%\` }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  sliderLabel: {
    fontSize: 16,
    marginBottom: 4,
  },
  slider: {
    width: '100%',
    height: 40,
    marginBottom: 16,
  },
  valueDisplay: {
    marginTop: 16,
    padding: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  valueDisplayText: {
    marginBottom: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  valueBar: {
    height: 20,
    backgroundColor: '#5B37B7',
    borderRadius: 4,
  },
});`;

  return (
    <View style={styles.demoContainer}>
      <Text style={styles.componentTitle}>Slider Component</Text>
      <Text style={styles.componentDescription}>
        The Slider component allows users to select a value from a range of values by moving a thumb along a track.
      </Text>
      
      <View style={styles.exampleContainer}>
        <Text style={styles.sliderLabel}>
          Basic Slider: {Math.round(value)}
        </Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          value={value}
          onValueChange={setValue}
          step={1}
        />
        
        <Text style={styles.sliderLabel}>
          Styled Slider: {Math.round(rangeValue)}%
        </Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          value={rangeValue}
          onValueChange={setRangeValue}
          minimumTrackTintColor="#5B37B7"
          maximumTrackTintColor="#d3d3d3"
          thumbTintColor="#5B37B7"
        />
        
        <View style={styles.valueDisplay}>
          <Text style={styles.valueDisplayText}>
            Selected Values:
          </Text>
          <Text style={styles.valueText}>Slider 1: {Math.round(value)}</Text>
          <View style={[styles.valueBar, { width: `${value}%` }]} />
          
          <Text style={[styles.valueText, { marginTop: 10 }]}>
            Slider 2: {Math.round(rangeValue)}
          </Text>
          <View style={[styles.valueBar, { width: `${rangeValue}%`, backgroundColor: '#5B37B7' }]} />
        </View>
      </View>
      
      <Text style={styles.codeTitle}>Example Code:</Text>
      <CodeBlock code={sliderCode} />
      
      <Text style={styles.propsTitle}>Common Slider Props:</Text>
      <View style={styles.propsContainer}>
        <View style={styles.propRow}>
          <Text style={styles.propName}>value</Text>
          <Text style={styles.propDescription}>Current value of the slider</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>minimumValue</Text>
          <Text style={styles.propDescription}>Minimum value of the slider</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>maximumValue</Text>
          <Text style={styles.propDescription}>Maximum value of the slider</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>step</Text>
          <Text style={styles.propDescription}>Step value of the slider</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>onValueChange</Text>
          <Text style={styles.propDescription}>Function called when value changes</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>minimumTrackTintColor</Text>
          <Text style={styles.propDescription}>Color of the track to the left of thumb</Text>
        </View>
      </View>
    </View>
  );
}
// Custom Picker Demo (since @react-native-picker/picker is external)
function CustomPickerDemo() {
  const [selectedValue, setSelectedValue] = useState('option1');
  const [isOpen, setIsOpen] = useState(false);
  
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 4', value: 'option4' },
  ];
  
  const pickerCode = `import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';

export default function App() {
  const [selectedValue, setSelectedValue] = useState('option1');
  const [isOpen, setIsOpen] = useState(false);
  
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 4', value: 'option4' },
  ];
  
  const selectedOption = options.find(option => option.value === selectedValue);
  
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Custom Picker:</Text>
      
      <TouchableOpacity 
        style={styles.pickerButton} 
        onPress={() => setIsOpen(true)}
      >
        <Text style={styles.pickerButtonText}>
          {selectedOption?.label || 'Select an option'}
        </Text>
        <Text style={styles.pickerIcon}>▼</Text>
      </TouchableOpacity>
      
      <Modal
        visible={isOpen}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsOpen(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select an option</Text>
            
            {options.map((option) => (
              <TouchableOpacity
                key={option.value}
                style={[
                  styles.option,
                  selectedValue === option.value && styles.selectedOption
                ]}
                onPress={() => {
                  setSelectedValue(option.value);
                  setIsOpen(false);
                }}
              >
                <Text style={[
                  styles.optionText,
                  selectedValue === option.value && styles.selectedOptionText
                ]}>
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
            
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setIsOpen(false)}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      
      <Text style={styles.selectedValueText}>
        Selected: {selectedOption?.label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    marginBottom: 4,
    fontWeight: 'bold',
  },
  pickerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 12,
    backgroundColor: 'white',
  },
  pickerButtonText: {
    fontSize: 16,
  },
  pickerIcon: {
    fontSize: 14,
    color: '#666',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  option: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  selectedOption: {
    backgroundColor: '#f0f0f0',
  },
  optionText: {
    fontSize: 16,
  },
  selectedOptionText: {
    fontWeight: 'bold',
    color: '#5B37B7',
  },
  cancelButton: {
    marginTop: 16,
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
  },
  selectedValueText: {
    marginTop: 16,
    fontSize: 16,
    textAlign: 'center',
  },
});`;

  const selectedOption = options.find(option => option.value === selectedValue);
  
  return (
    <View style={styles.demoContainer}>
      <Text style={styles.componentTitle}>Custom Picker Component</Text>
      <Text style={styles.componentDescription}>
        React Native core doesn't include a Picker component. Here's a custom implementation using a Modal.
      </Text>
      
      <View style={styles.exampleContainer}>
        <Text style={styles.label}>Custom Picker:</Text>
        
        <TouchableOpacity 
          style={styles.pickerButton} 
          onPress={() => setIsOpen(true)}
        >
          <Text style={styles.pickerButtonText}>
            {selectedOption?.label || 'Select an option'}
          </Text>
          <Text style={styles.pickerIcon}>▼</Text>
        </TouchableOpacity>
        
        <Modal
          visible={isOpen}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setIsOpen(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Select an option</Text>
              
              {options.map((option) => (
                <TouchableOpacity
                  key={option.value}
                  style={[
                    styles.option,
                    selectedValue === option.value && styles.selectedOption
                  ]}
                  onPress={() => {
                    setSelectedValue(option.value);
                    setIsOpen(false);
                  }}
                >
                  <Text style={[
                    styles.optionText,
                    selectedValue === option.value && styles.selectedOptionText
                  ]}>
                    {option.label}
                  </Text>
                </TouchableOpacity>
              ))}
              
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setIsOpen(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        
        <Text style={styles.selectedValueText}>
          Selected: {selectedOption?.label}
        </Text>
      </View>
      
      <Text style={styles.codeTitle}>Example Code:</Text>
      <CodeBlock code={pickerCode} />
      
      <Text style={styles.note}>
        Note: For a more complete Picker implementation, you can use community packages like @react-native-picker/picker.
      </Text>
      
      <Text style={styles.propsTitle}>Implementation Details:</Text>
      <View style={styles.propsContainer}>
        <View style={styles.propRow}>
          <Text style={styles.propName}>State Management</Text>
          <Text style={styles.propDescription}>Track selected value and modal visibility</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>UI Components</Text>
          <Text style={styles.propDescription}>Touchable areas, modal for options display</Text>
        </View>
        <View style={styles.propRow}>
          <Text style={styles.propName}>Accessibility</Text>
          <Text style={styles.propDescription}>Visual feedback for selected items</Text>
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
  keyboardAvoidingContainer: {
    flex: 1,
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
  note: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#666',
    marginTop: 16,
  },
  
  // Demo specific styles for TextInput
  label: {
    marginBottom: 4,
    fontWeight: '500',
    color: '#333',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
  },
  multilineInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 8,
    paddingVertical: 8,
    minHeight: 100,
    backgroundColor: '#fff',
    textAlignVertical: 'top',
  },
  previewTitle: {
    fontWeight: '600',
    marginBottom: 4,
    color: '#333',
  },
  preview: {
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 4,
  },
  
  // Demo specific styles for Switch
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
  },
  switchLabel: {
    fontSize: 16,
    color: '#333',
  },
  switchStatus: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#5B37B7',
  },
  
  // Demo specific styles for Slider
  sliderLabel: {
    fontSize: 16,
    marginBottom: 4,
    color: '#333',
  },
  slider: {
    width: '100%',
    height: 40,
    marginBottom: 16,
  },
  valueDisplay: {
    marginTop: 16,
    padding: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  valueDisplayText: {
    marginBottom: 8,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  valueText: {
    marginBottom: 4,
    color: '#333',
  },
  valueBar: {
    height: 20,
    backgroundColor: '#5B37B7',
    borderRadius: 4,
  },
  
  // Demo specific styles for Custom Picker
  pickerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 12,
    backgroundColor: 'white',
  },
  pickerButtonText: {
    fontSize: 16,
    color: '#333',
  },
  pickerIcon: {
    fontSize: 14,
    color: '#666',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  option: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  selectedOption: {
    backgroundColor: '#f0f0f0',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  selectedOptionText: {
    fontWeight: 'bold',
    color: '#5B37B7',
  },
  cancelButton: {
    marginTop: 16,
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
  },
  selectedValueText: {
    marginTop: 16,
    fontSize: 16,
    textAlign: 'center',
    color: '#5B37B7',
  },
});