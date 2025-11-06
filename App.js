//NOTE - the Maint IMPORTs for the whole APP
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

//NOTE - Screen Imports of the screens in our APP
import HomeScreen from './Screens/HomeScreen';
import EventsScreen from './Screens/EventsScreen';
import DetailsScreen from './Screens/DetailsScreen';
import ThinkingScreen from './Screens/ThinkingScreen';
import RegisterScreen from './Screens/RegisterScreen';
import SettingsScreen from './Screens/SettingsScreen';

//ANCHOR - Primary Nav Approach
const Tab = createBottomTabNavigator();
//ANCHOR - Sub Nav Approach
const Stack = createStackNavigator();

//SECTION - TABS
function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Events') {
            iconName = 'calendar';
            } else if (route.name === 'Settings') {
            iconName = 'settings';
          }
          
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Events" component={EventsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
//!SECTION

//SECTION - Main APP wrapper
export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Root"
            component={Tabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Event Details" component={DetailsScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
//!SECTION
