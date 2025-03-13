// App.js - Main entry point
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import BasicComponentsScreen from './screens/BasicComponentsScreen';
import LayoutComponentsScreen from './screens/LayoutComponentsScreen';
import ListComponentsScreen from './screens/ListComponentsScreen';
import FormComponentsScreen from './screens/FormComponentsScreen';
import AnimationComponentsScreen from './screens/AnimationComponentsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#5B37B7',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'React Native Component Showcase' }} 
        />
        <Stack.Screen 
          name="BasicComponents" 
          component={BasicComponentsScreen} 
          options={{ title: 'Basic UI Components' }} 
        />
        <Stack.Screen 
          name="LayoutComponents" 
          component={LayoutComponentsScreen} 
          options={{ title: 'Layout Components' }} 
        />
        <Stack.Screen 
          name="ListComponents" 
          component={ListComponentsScreen} 
          options={{ title: 'List Components' }} 
        />
        <Stack.Screen 
          name="FormComponents" 
          component={FormComponentsScreen} 
          options={{ title: 'Form Components' }} 
        />
        <Stack.Screen 
          name="AnimationComponents" 
          component={AnimationComponentsScreen} 
          options={{ title: 'Animation Examples' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
