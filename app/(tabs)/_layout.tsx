import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    
    <Tabs 
      screenOptions={{
        tabBarActiveTintColor: '#ffd33d',
        headerStyle: {
          backgroundColor: '#161e28',
        },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: {
        backgroundColor: '#161e28',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Listen',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'musical-note-sharp' : 'musical-note-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen 
        name="contact" 
        options={{ 
          title: 'Contact', 
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
          ),
        }} 
      />
    </Tabs>
  );
}