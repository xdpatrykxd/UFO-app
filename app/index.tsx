import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import SightingList from './SightingList';
import RecentSighting from './RecentSighting';
import ReportSighting from './ReportSighting';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;
          
          if (route.name === 'Sighting List') {
            iconName = 'home';
          } else if (route.name === 'Recent Sighting') {
            iconName = 'eye';
          } else if (route.name === 'Report Sighting') {
            iconName = 'create';
          } else {
            iconName = 'help';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#00ffcc',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: {
          backgroundColor: '#111', 
          paddingBottom: 10, 
          height: 80, 
        },
        tabBarLabelStyle: {
          fontSize: 16, 
          fontWeight: 'bold', 
        },
        headerShown: true, 
        headerStyle: {
          backgroundColor: '#111', 
          height: 100, 
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 26, 
          fontWeight: 'bold', 
        },
      })}
    >
      <Tab.Screen name="Sighting List" component={SightingList} />
      <Tab.Screen name="Recent Sighting" component={RecentSighting} />
      <Tab.Screen name="Report Sighting" component={ReportSighting} />
    </Tab.Navigator>
  );
}

export default App;