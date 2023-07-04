import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons'
import { useTheme } from "styled-components";

import { Home } from '@screens/Home';
import { DetailsAds } from '@screens/DetailsAds';
import { SignOut } from '@screens/SignOut';
import { AllMyAds } from '@screens/AllMyAds';
import { DetailsMyAds } from '@screens/DetailsMyAds';
import { CreateAds } from '@screens/CreateAds';
import { PreviewMyAds } from '@screens/PreviewMyAds';

type AppRoutes = {
  home: undefined;
  DetailsAds: { AdId: string};
  DetailsMyAds: undefined;
  CreateAds: undefined;
  SignOut: undefined;
  AllMyAds: undefined;
  PreviewMyAds: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  const theme = useTheme()

  return (
    <Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: theme.Colors.GRAY_600,
      tabBarInactiveTintColor: theme.Colors.GRAY_300,
    }}>
      <Screen
        name='home'
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather
              name="home"
              size={size}
              color={color}
            />
          )
        }}
      />

      <Screen
        name='AllMyAds'
        component={AllMyAds}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather
              name="tag"
              size={size}
              color={color}
            />
          )
        }}
      />

      <Screen
        name='SignOut'
        component={SignOut}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather
              name="log-out"
              size={size}
              color={theme.Colors.RED_LIGHT}
            />
          )
        }}
      />

      <Screen
        name='DetailsAds'
        component={DetailsAds}
        options={{
          tabBarButton: () => null,
          tabBarStyle: { display: 'none' }
        }}
      />

      <Screen
        name='PreviewMyAds'
        component={PreviewMyAds}
        options={{
          tabBarButton: () => null,
          tabBarStyle: { display: 'none' }
        }}
      />

      <Screen
        name='DetailsMyAds'
        component={DetailsMyAds}
        options={{
          tabBarButton: () => null,
          tabBarStyle: { display: 'none' }
        }}
      />

      <Screen
        name='CreateAds'
        component={CreateAds}
        options={{
          tabBarButton: () => null,
          tabBarStyle: { display: 'none' }
        }}
      />

    </Navigator>
  )
}