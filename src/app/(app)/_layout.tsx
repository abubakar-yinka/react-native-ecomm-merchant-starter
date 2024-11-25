/* eslint-disable max-lines-per-function */
/* eslint-disable react/no-unstable-nested-components */
import { SplashScreen, Tabs } from 'expo-router';
import React, { useCallback, useEffect } from 'react';

import {
  Home as HomeIcon,
  Order as OrderIcon,
  Profile as ProfileIcon,
  Search as SearchIcon,
  Trends as TrendsIcon,
} from '@/components/ui/icons';
import { useAuth } from '@/lib';

export default function TabLayout() {
  const status = useAuth.use.status();

  const hideSplash = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    if (status !== 'idle') {
      setTimeout(() => {
        hideSplash();
      }, 1000);
    }
  }, [hideSplash, status]);

  return (
    <Tabs initialRouteName="search">
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
          tabBarActiveTintColor: '#12AF37',
          tabBarButtonTestID: 'home-tab',
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          headerShown: false,
          tabBarIcon: ({ color }) => <SearchIcon color={color} />,
          tabBarActiveTintColor: '#12AF37',
          tabBarButtonTestID: 'search-tab',
        }}
      />

      <Tabs.Screen
        name="trends"
        options={{
          title: 'Trends',
          headerShown: false,
          tabBarIcon: ({ color }) => <TrendsIcon color={color} />,
          tabBarActiveTintColor: '#12AF37',
          tabBarButtonTestID: 'trends-tab',
        }}
      />

      <Tabs.Screen
        name="order"
        options={{
          title: 'Order',
          headerShown: false,
          tabBarIcon: ({ color }) => <OrderIcon color={color} />,
          tabBarActiveTintColor: '#12AF37',
          tabBarButtonTestID: 'order-tab',
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color }) => <ProfileIcon color={color} />,
          tabBarActiveTintColor: '#12AF37',
          tabBarButtonTestID: 'profile-tab',
        }}
      />
    </Tabs>
  );
}
