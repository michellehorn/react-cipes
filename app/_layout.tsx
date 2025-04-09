import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { Tabs } from 'expo-router';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

SplashScreen.preventAutoHideAsync().catch(() => {});

export default function Layout() {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn('App init failed', e);
      } finally {
        setAppReady(true);
        await SplashScreen.hideAsync();
      }
    };

    prepare();
  }, []);

  if (!appReady) {
    return <View style={{ flex: 1, backgroundColor: '#ff642c' }} />;
  }

  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ff642c',
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarStyle: {
          backgroundColor: '#ff642c',
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          height: 90,
          paddingTop: 15,
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#ffe1d6',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="recipes"
        options={{
          title: '',
          tabBarIcon: ({ color, size }) => <Ionicons name="restaurant" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: '',
          tabBarIcon: ({ color, size }) => <Ionicons name="heart" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
